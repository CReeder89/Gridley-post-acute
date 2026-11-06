import type { NextApiRequest, NextApiResponse } from 'next';
import { isAdminRequestSameOrigin, requireAdmin } from '../../../../../lib/cnaAdminAuth';
import { cnaSql, mapAdminPost } from '../../../../../lib/cnaContent';
import { parseCnaPost } from '../../../../../lib/cnaAdminValidation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireAdmin(req, res)) return;
  if (req.method !== 'PUT' && req.method !== 'DELETE') return res.status(405).json({ message: 'Method not allowed.' });
  if (!isAdminRequestSameOrigin(req)) return res.status(403).json({ message: 'Request origin not allowed.' });

  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
  if (!id || !/^\d+$/.test(id)) return res.status(400).json({ message: 'Invalid post ID.' });
  try {
    const sql = cnaSql();
    if (req.method === 'DELETE') {
      await sql`DELETE FROM cna_blog_posts WHERE id = ${id}`;
      return res.status(200).json({ deleted: true });
    }

    const post = parseCnaPost(req.body);
    if (!post) return res.status(400).json({ message: 'Check the title, URL slug, summary, and post text.' });
    const existing = await sql`SELECT status, published_at FROM cna_blog_posts WHERE id = ${id}`;
    if (!existing[0]) return res.status(404).json({ message: 'Class update not found.' });

    const publishedAt = post.status === 'draft'
      ? null
      : existing[0].status === 'published' && existing[0].published_at
        ? String(existing[0].published_at)
        : new Date().toISOString();
    const rows = await sql`
      UPDATE cna_blog_posts
      SET slug = ${post.slug}, title = ${post.title}, summary = ${post.summary}, body = ${post.body},
        status = ${post.status}, published_at = ${publishedAt}, updated_at = NOW()
      WHERE id = ${id}
      RETURNING id, slug, title, summary, body, status, published_at, created_at, updated_at
    `;
    return res.status(200).json(mapAdminPost(rows[0] as Record<string, unknown>));
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === '23505') {
      return res.status(409).json({ message: 'That URL slug is already in use.' });
    }
    console.error('CNA admin post update failed:', error);
    return res.status(503).json({ message: 'Could not update the class update.' });
  }
}
