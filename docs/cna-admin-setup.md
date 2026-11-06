# CNA Admin Setup

The site-local admin dashboard is at `/cna-training/admin`. Public pages read only the notice settings and published class updates. The admin APIs use a signed, HTTP-only session cookie and a server-side scrypt password hash.

## 1. Create the Neon database

Create a Neon Postgres database and copy its pooled connection string. Keep the connection string private. For a Vercel deployment, connect the database to the Vercel project and use its pooled `DATABASE_URL` environment variable. For local development, put the connection string in `.env.local`.

## 2. Create the tables

Open Neon’s SQL editor and run [`database/cna-admin.sql`](../database/cna-admin.sql) once. It creates the content settings, class updates, and hashed-IP login rate-limit tables, and seeds the current class notice and social link placeholders. Re-running it does not overwrite settings that have already been saved.

## 3. Generate the admin secrets

Run `node scripts/generate-cna-admin-secrets.mjs` in a private interactive terminal. Enter a unique password with at least 14 characters. The script does not echo the password; it prints a scrypt password hash and a random session secret. Do not put the plain password in an environment variable or source file.

Set these server-side environment variables:

```text
DATABASE_URL=<pooled Neon Postgres connection string>
CNA_ADMIN_USERNAME=<your chosen username>
CNA_ADMIN_PASSWORD_HASH=<scrypt hash printed by the script>
CNA_ADMIN_SESSION_SECRET=<session secret printed by the script>
CNA_ADMIN_ALLOWED_ORIGIN=<exact site origin, for example https://example.com>
```

For local development, use `CNA_ADMIN_ALLOWED_ORIGIN=http://localhost:3000`. In Vercel, add the variables in Project Settings → Environment Variables for the environments where the dashboard should work, then redeploy. Never prefix these variables with `NEXT_PUBLIC_`.

## 4. Sign in and publish

Open `/cna-training/admin`, sign in, edit the notice or social URLs, and save. To publish class news, write a title, URL slug, and plain-text body. Blank lines create paragraph breaks. Save as a draft or publish immediately. Drafts are never returned by public pages.

The dashboard includes a five-attempt, 15-minute sign-in lockout per client address. Changing the admin password means generating a new hash and updating the environment variable. Changing `CNA_ADMIN_SESSION_SECRET` invalidates all existing sessions.
