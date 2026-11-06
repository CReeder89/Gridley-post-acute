import type { NextApiRequest, NextApiResponse } from 'next';
import { createHmac } from 'node:crypto';
import { clearAdminSession, hasAdminSession, isAdminRequestSameOrigin, setAdminSession, verifyAdminPassword } from '../../../../lib/cnaAdminAuth';
import { cnaSql } from '../../../../lib/cnaContent';

const MAX_ATTEMPTS = 5;
const WINDOW_MINUTES = 15;

function loginClientKey(req: NextApiRequest): string {
  const address = req.headers['x-real-ip'] || req.socket.remoteAddress || 'unknown';
  return createHmac('sha256', process.env.CNA_ADMIN_SESSION_SECRET || 'missing-secret')
    .update(String(address))
    .digest('hex');
}

async function getLoginLock(clientKey: string): Promise<Date | null> {
  const sql = cnaSql();
  const rows = await sql`
    SELECT blocked_until FROM cna_admin_login_attempts
    WHERE client_key = ${clientKey}
      AND window_started_at > NOW() - (${WINDOW_MINUTES} * INTERVAL '1 minute')
  `;
  return rows[0]?.blocked_until ? new Date(String(rows[0].blocked_until)) : null;
}

async function recordFailedLogin(clientKey: string): Promise<void> {
  const sql = cnaSql();
  await sql`
    INSERT INTO cna_admin_login_attempts (client_key, attempts, window_started_at)
    VALUES (${clientKey}, 1, NOW())
    ON CONFLICT (client_key) DO UPDATE SET
      attempts = CASE
        WHEN cna_admin_login_attempts.window_started_at <= NOW() - (${WINDOW_MINUTES} * INTERVAL '1 minute') THEN 1
        ELSE cna_admin_login_attempts.attempts + 1
      END,
      window_started_at = CASE
        WHEN cna_admin_login_attempts.window_started_at <= NOW() - (${WINDOW_MINUTES} * INTERVAL '1 minute') THEN NOW()
        ELSE cna_admin_login_attempts.window_started_at
      END,
      blocked_until = CASE
        WHEN cna_admin_login_attempts.window_started_at <= NOW() - (${WINDOW_MINUTES} * INTERVAL '1 minute') THEN NULL
        WHEN cna_admin_login_attempts.attempts + 1 >= ${MAX_ATTEMPTS} THEN NOW() + (${WINDOW_MINUTES} * INTERVAL '1 minute')
        ELSE cna_admin_login_attempts.blocked_until
      END
  `;
}

async function clearFailedLogins(clientKey: string): Promise<void> {
  const sql = cnaSql();
  await sql`DELETE FROM cna_admin_login_attempts WHERE client_key = ${clientKey}`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({ authenticated: hasAdminSession(req) });
  }

  if (req.method === 'DELETE') {
    if (!isAdminRequestSameOrigin(req)) return res.status(403).json({ message: 'Request origin not allowed.' });
    clearAdminSession(res);
    return res.status(200).json({ authenticated: false });
  }

  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed.' });
  if (!isAdminRequestSameOrigin(req)) return res.status(403).json({ message: 'Request origin not allowed.' });

  const { username, password } = req.body || {};
  const clientKey = loginClientKey(req);
  try {
    const blockedUntil = await getLoginLock(clientKey);
    if (blockedUntil && blockedUntil.getTime() > Date.now()) {
      return res.status(429).json({ message: 'Too many sign-in attempts. Please try again in 15 minutes.' });
    }

    if (!verifyAdminPassword(username, password)) {
      await recordFailedLogin(clientKey);
      return res.status(401).json({ message: 'The username or password is incorrect.' });
    }

    await clearFailedLogins(clientKey);
    setAdminSession(res);
    return res.status(200).json({ authenticated: true });
  } catch (error) {
    console.error('CNA admin sign-in failed:', error);
    return res.status(503).json({ message: 'Admin sign-in is not configured. Check the database and server environment settings.' });
  }
}
