import type { NextApiRequest, NextApiResponse } from 'next';
import { isAdminRequestSameOrigin, requireAdmin } from '../../../../lib/cnaAdminAuth';
import { cnaSql, mapAdminSettings } from '../../../../lib/cnaContent';
import { parseCnaNotice, parseCnaSocialLinks } from '../../../../lib/cnaAdminValidation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireAdmin(req, res)) return;

  try {
    const sql = cnaSql();
    if (req.method === 'GET') {
      const rows = await sql`SELECT notice_enabled, notice_text, social_links FROM cna_site_settings WHERE settings_id = 1`;
      return res.status(200).json(mapAdminSettings(rows[0] as Record<string, unknown> | undefined));
    }

    if (req.method !== 'PUT') return res.status(405).json({ message: 'Method not allowed.' });
    if (!isAdminRequestSameOrigin(req)) return res.status(403).json({ message: 'Request origin not allowed.' });

    const section = req.body?.section;
    let rows;
    if (section === 'notice') {
      const notice = parseCnaNotice(req.body);
      if (!notice) return res.status(400).json({ message: 'Add notice text (up to 500 characters) or turn the notice off.' });
      rows = await sql`
        UPDATE cna_site_settings
        SET notice_enabled = ${notice.noticeEnabled}, notice_text = ${notice.noticeText}, updated_at = NOW()
        WHERE settings_id = 1
        RETURNING notice_enabled, notice_text, social_links
      `;
    } else if (section === 'social') {
      const socialLinks = parseCnaSocialLinks(req.body);
      if (!socialLinks) return res.status(400).json({ message: 'Enter valid HTTPS profile URLs or clear the links you do not use.' });
      const linksJson = JSON.stringify(socialLinks);
      rows = await sql`
        UPDATE cna_site_settings
        SET social_links = ${linksJson}::jsonb, updated_at = NOW()
        WHERE settings_id = 1
        RETURNING notice_enabled, notice_text, social_links
      `;
    } else {
      return res.status(400).json({ message: 'Choose a settings section to save.' });
    }
    if (!rows[0]) return res.status(503).json({ message: 'Run the CNA admin database setup SQL first.' });
    return res.status(200).json(mapAdminSettings(rows[0] as Record<string, unknown> | undefined));
  } catch (error) {
    console.error('CNA admin settings request failed:', error);
    return res.status(503).json({ message: 'Could not reach the content database. Check DATABASE_URL and run the setup SQL.' });
  }
}
