import { createHmac, scryptSync, timingSafeEqual } from 'node:crypto';
import type { NextApiRequest, NextApiResponse } from 'next';

export const ADMIN_COOKIE = process.env.NODE_ENV === 'production'
  ? '__Host-cna_admin_session'
  : 'cna_admin_session';
const SESSION_SECONDS = 8 * 60 * 60;
const HASH_BYTES = 64;

function safeEqual(left: Buffer, right: Buffer): boolean {
  return left.length === right.length && timingSafeEqual(left, right);
}

function sessionSecret(): string {
  const secret = process.env.CNA_ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error('CNA_ADMIN_SESSION_SECRET must be at least 32 characters.');
  return secret;
}

export function verifyAdminPassword(username: unknown, password: unknown): boolean {
  const expectedUsername = process.env.CNA_ADMIN_USERNAME;
  const stored = process.env.CNA_ADMIN_PASSWORD_HASH || '';
  if (typeof username !== 'string' || typeof password !== 'string' || !expectedUsername) return false;
  const [algorithm, saltEncoded, hashEncoded] = stored.split(':');
  if (algorithm !== 'scrypt' || !saltEncoded || !hashEncoded || password.length < 1 || password.length > 1024) return false;

  const suppliedUser = Buffer.from(username);
  const expectedUser = Buffer.from(expectedUsername);
  const userMatches = safeEqual(suppliedUser, expectedUser);

  try {
    const salt = Buffer.from(saltEncoded, 'base64url');
    const expectedHash = Buffer.from(hashEncoded, 'base64url');
    if (salt.length < 16 || expectedHash.length !== HASH_BYTES) return false;
    const actualHash = scryptSync(password, salt, HASH_BYTES);
    return userMatches && safeEqual(actualHash, expectedHash);
  } catch {
    return false;
  }
}

function sign(expiration: number): string {
  return createHmac('sha256', sessionSecret()).update(`cna-admin:${expiration}`).digest('base64url');
}

export function setAdminSession(res: NextApiResponse): void {
  const expiration = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const token = `${expiration}.${sign(expiration)}`;
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader(
    'Set-Cookie',
    `${ADMIN_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_SECONDS}${secure}`
  );
}

export function clearAdminSession(res: NextApiResponse): void {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader('Set-Cookie', `${ADMIN_COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secure}`);
}

export function hasAdminSession(req: NextApiRequest): boolean {
  const cookieHeader = req.headers.cookie || '';
  const token = cookieHeader
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${ADMIN_COOKIE}=`))
    ?.slice(ADMIN_COOKIE.length + 1);
  if (!token) return false;

  const [expirationText, signature] = token.split('.');
  const expiration = Number(expirationText);
  if (!Number.isSafeInteger(expiration) || expiration <= Math.floor(Date.now() / 1000) || !signature) return false;
  try {
    return safeEqual(Buffer.from(signature), Buffer.from(sign(expiration)));
  } catch {
    return false;
  }
}

export function isAdminRequestSameOrigin(req: NextApiRequest): boolean {
  const origin = req.headers.origin;
  const configuredOrigin = process.env.CNA_ADMIN_ALLOWED_ORIGIN;
  if (!origin || !configuredOrigin) return false;
  try {
    return new URL(origin).origin === new URL(configuredOrigin).origin;
  } catch {
    return false;
  }
}

export function requireAdmin(req: NextApiRequest, res: NextApiResponse): boolean {
  if (!hasAdminSession(req)) {
    res.status(401).json({ message: 'Please sign in to continue.' });
    return false;
  }
  return true;
}
