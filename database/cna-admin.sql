-- Run once in the Neon SQL editor before enabling the admin dashboard.

CREATE TABLE IF NOT EXISTS cna_site_settings (
  settings_id SMALLINT PRIMARY KEY CHECK (settings_id = 1),
  notice_enabled BOOLEAN NOT NULL DEFAULT TRUE,
  notice_text TEXT NOT NULL DEFAULT '',
  social_links JSONB NOT NULL DEFAULT '[]'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO cna_site_settings (settings_id, notice_enabled, notice_text, social_links)
VALUES (
  1,
  TRUE,
  'The first class is full. Applications submitted after November 5, 2026 will be considered for future classes.',
  '[
    {"id":"instagram","label":"Instagram","href":"#"},
    {"id":"facebook","label":"Facebook","href":"#"},
    {"id":"tiktok","label":"TikTok","href":"#"},
    {"id":"x","label":"X (Twitter)","href":"#"}
  ]'::jsonb
)
ON CONFLICT (settings_id) DO NOTHING;

CREATE TABLE IF NOT EXISTS cna_blog_posts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  summary TEXT NOT NULL DEFAULT '',
  body TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS cna_blog_posts_published_idx
  ON cna_blog_posts (published_at DESC)
  WHERE status = 'published';

-- Login rate-limit keys are HMACs of client addresses, not raw IP addresses.
CREATE TABLE IF NOT EXISTS cna_admin_login_attempts (
  client_key TEXT PRIMARY KEY,
  attempts INTEGER NOT NULL DEFAULT 0,
  window_started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  blocked_until TIMESTAMPTZ
);
