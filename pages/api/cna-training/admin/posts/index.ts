import type { NextApiRequest, NextApiResponse } from 'next';
import { isAdminRequestSameOrigin, requireAdmin } from '../../../../../lib/cnaAdminAuth';
import { cnaSql, mapAdminPost } from '../../../../../lib/cnaContent';
import { parseCnaPost } from '../../../../../lib/cnaAdminValidation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireAdmin(req, res)) return;

  if (req.method === 'GET') {
    try {
      const sql = cnaSql();
      const rows = await sql`
        SELECT id, slug, title, summary, body, status, published_at, created_at, updated_at
        FROM cna_blog_posts
        ORDER BY updated_at DESC
      `;
      return res.status(200).json(rows.map((row) => mapAdminPost(row as Record<string, unknown>)));
    } catch (error) {
      console.error('CNA admin post list failed:', error);
      return res.status(503).json({ message: 'Could not load class updates. Check the database setup.' });
    }
  }

  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed.' });
  if (!isAdminRequestSameOrigin(req)) return res.status(403).json({ message: 'Request origin not allowed.' });
  const post = parseCnaPost(req.body);
  if (!post) return res.status(400).json({ message: 'Check the title, URL slug, summary, and post text.' });

  try {
    const sql = cnaSql();
    const publishedAt = post.status === 'published' ? new Date().toISOString() : null;
    const rows = await sql`
      INSERT INTO cna_blog_posts (slug, title, summary, body, status, published_at)
      VALUES (${post.slug}, ${post.title}, ${post.summary}, ${post.body}, ${post.status}, ${publishedAt})
      RETURNING id, slug, title, summary, body, status, published_at, created_at, updated_at
    `;
    return res.status(201).json(mapAdminPost(rows[0] as Record<string, unknown>));
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === '23505') {
      return res.status(409).json({ message: 'That URL slug is already in use.' });
    }
    console.error('CNA admin post create failed:', error);
    return res.status(503).json({ message: 'Could not save the class update.' });
  }
}
