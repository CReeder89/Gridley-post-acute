import { neon } from '@neondatabase/serverless';
import { academyProgram, academySocial } from '../content/cnaTraining';

export type CnaSocialId = 'instagram' | 'facebook' | 'tiktok' | 'x';

export type CnaSocialLink = {
  id: CnaSocialId;
  label: string;
  href: string;
};

export type CnaSiteSettings = {
  noticeEnabled: boolean;
  noticeText: string;
  socialLinks: CnaSocialLink[];
};

export type CnaPost = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  body: string;
  status: 'draft' | 'published';
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export const defaultCnaSettings: CnaSiteSettings = {
  noticeEnabled: true,
  noticeText: academyProgram.firstClassNote,
  socialLinks: academySocial.links.map((link) => ({ ...link })),
};

export function cnaSql() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error('DATABASE_URL is not configured.');
  return neon(databaseUrl);
}

function mapSettings(row: Record<string, unknown> | undefined): CnaSiteSettings {
  if (!row) return defaultCnaSettings;

  let socialLinks = defaultCnaSettings.socialLinks;
  if (Array.isArray(row.social_links)) {
    const byId = new Map(row.social_links.map((item: any) => [item.id, item]));
    socialLinks = defaultCnaSettings.socialLinks.map((link) => {
      const saved = byId.get(link.id) as Partial<CnaSocialLink> | undefined;
      return { ...link, href: typeof saved?.href === 'string' ? saved.href : link.href };
    });
  }

  return {
    noticeEnabled: typeof row.notice_enabled === 'boolean' ? row.notice_enabled : defaultCnaSettings.noticeEnabled,
    noticeText: typeof row.notice_text === 'string' ? row.notice_text : defaultCnaSettings.noticeText,
    socialLinks,
  };
}

function mapPost(row: Record<string, unknown>): CnaPost {
  return {
    id: String(row.id),
    slug: String(row.slug),
    title: String(row.title),
    summary: String(row.summary || ''),
    body: String(row.body || ''),
    status: row.status === 'published' ? 'published' : 'draft',
    publishedAt: row.published_at ? new Date(String(row.published_at)).toISOString() : null,
    createdAt: new Date(String(row.created_at)).toISOString(),
    updatedAt: new Date(String(row.updated_at)).toISOString(),
  };
}

export async function getCnaSiteSettings(): Promise<CnaSiteSettings> {
  if (!process.env.DATABASE_URL) return defaultCnaSettings;
  try {
    const sql = cnaSql();
    const rows = await sql`SELECT notice_enabled, notice_text, social_links FROM cna_site_settings WHERE settings_id = 1`;
    return mapSettings(rows[0] as Record<string, unknown> | undefined);
  } catch (error) {
    console.error('Could not load CNA site settings:', error);
    return defaultCnaSettings;
  }
}

export async function getPublishedCnaPosts(): Promise<CnaPost[]> {
  if (!process.env.DATABASE_URL) return [];
  try {
    const sql = cnaSql();
    const rows = await sql`
      SELECT id, slug, title, summary, body, status, published_at, created_at, updated_at
      FROM cna_blog_posts
      WHERE status = 'published' AND published_at <= now()
      ORDER BY published_at DESC, created_at DESC
    `;
    return rows.map((row) => mapPost(row as Record<string, unknown>));
  } catch (error) {
    console.error('Could not load CNA updates:', error);
    return [];
  }
}

export async function getPublishedCnaPost(slug: string): Promise<CnaPost | null> {
  if (!process.env.DATABASE_URL) return null;
  try {
    const sql = cnaSql();
    const rows = await sql`
      SELECT id, slug, title, summary, body, status, published_at, created_at, updated_at
      FROM cna_blog_posts
      WHERE slug = ${slug} AND status = 'published' AND published_at <= now()
      LIMIT 1
    `;
    return rows[0] ? mapPost(rows[0] as Record<string, unknown>) : null;
  } catch (error) {
    console.error('Could not load CNA update:', error);
    return null;
  }
}

export function mapAdminSettings(row: Record<string, unknown> | undefined): CnaSiteSettings {
  return mapSettings(row);
}

export function mapAdminPost(row: Record<string, unknown>): CnaPost {
  return mapPost(row);
}
