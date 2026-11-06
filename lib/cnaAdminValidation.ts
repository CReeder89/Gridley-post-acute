import type { CnaPost, CnaSocialId, CnaSocialLink, CnaSiteSettings } from './cnaContent';

const socialDefinitions: { id: CnaSocialId; label: string }[] = [
  { id: 'instagram', label: 'Instagram' },
  { id: 'facebook', label: 'Facebook' },
  { id: 'tiktok', label: 'TikTok' },
  { id: 'x', label: 'X (Twitter)' },
];

export function parseCnaNotice(value: unknown): Pick<CnaSiteSettings, 'noticeEnabled' | 'noticeText'> | null {
  if (!value || typeof value !== 'object') return null;
  const input = value as Record<string, unknown>;
  if (typeof input.noticeEnabled !== 'boolean' || typeof input.noticeText !== 'string') return null;
  const noticeText = input.noticeText.trim();
  if (noticeText.length > 500) return null;
  if (input.noticeEnabled && !noticeText) return null;

  return { noticeEnabled: input.noticeEnabled, noticeText };
}

export function parseCnaSocialLinks(value: unknown): CnaSocialLink[] | null {
  if (!value || typeof value !== 'object') return null;
  const input = value as Record<string, unknown>;
  if (!Array.isArray(input.socialLinks)) return null;

  const byId = new Map(input.socialLinks.map((link) => {
    if (!link || typeof link !== 'object') return ['', ''];
    const row = link as Record<string, unknown>;
    return [row.id, row.href];
  }));

  const socialLinks: CnaSocialLink[] = [];
  for (const definition of socialDefinitions) {
    const href = byId.get(definition.id);
    if (typeof href !== 'string' || href.length > 2048) return null;
    if (href && href !== '#') {
      try {
        if (new URL(href).protocol !== 'https:') return null;
      } catch {
        return null;
      }
    }
    socialLinks.push({ ...definition, href });
  }

  return socialLinks;
}

export type CnaPostInput = Pick<CnaPost, 'slug' | 'title' | 'summary' | 'body' | 'status'>;

export function parseCnaPost(value: unknown): CnaPostInput | null {
  if (!value || typeof value !== 'object') return null;
  const input = value as Record<string, unknown>;
  if (
    typeof input.slug !== 'string' ||
    typeof input.title !== 'string' ||
    typeof input.summary !== 'string' ||
    typeof input.body !== 'string' ||
    (input.status !== 'draft' && input.status !== 'published')
  ) return null;

  const post = {
    slug: input.slug.trim().toLowerCase(),
    title: input.title.trim(),
    summary: input.summary.trim(),
    body: input.body.trim(),
    status: input.status,
  } as CnaPostInput;

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug) || post.slug.length > 100) return null;
  if (!post.title || post.title.length > 140 || post.summary.length > 300 || !post.body || post.body.length > 30000) return null;
  return post;
}
