import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import type { CnaPost, CnaSiteSettings } from '../../lib/cnaContent';

type AdminPostDraft = {
  id: string | null;
  title: string;
  slug: string;
  summary: string;
  body: string;
};

const emptyPost: AdminPostDraft = { id: null, title: '', slug: '', summary: '', body: '' };

const api = async <T,>(path: string, method = 'GET', body?: unknown): Promise<T> => {
  const response = await fetch(path, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.message || 'Something went wrong. Please try again.');
  return payload as T;
};

function makeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const CnaAdminPage: React.FC = () => {
  const [checkingSession, setCheckingSession] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [settings, setSettings] = useState<CnaSiteSettings | null>(null);
  const [posts, setPosts] = useState<CnaPost[]>([]);
  const [postDraft, setPostDraft] = useState<AdminPostDraft>(emptyPost);
  const [loginError, setLoginError] = useState('');
  const [pageError, setPageError] = useState('');
  const [noticeMessage, setNoticeMessage] = useState('');
  const [socialMessage, setSocialMessage] = useState('');
  const [postMessage, setPostMessage] = useState('');
  const [savingSettings, setSavingSettings] = useState(false);
  const [savingPost, setSavingPost] = useState(false);

  const loadDashboard = useCallback(async () => {
    setPageError('');
    try {
      const [savedSettings, savedPosts] = await Promise.all([
        api<CnaSiteSettings>('/api/cna-training/admin/settings'),
        api<CnaPost[]>('/api/cna-training/admin/posts'),
      ]);
      setSettings(savedSettings);
      setPosts(savedPosts);
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Could not load the admin dashboard.');
    }
  }, []);

  useEffect(() => {
    let active = true;
    api<{ authenticated: boolean }>('/api/cna-training/admin/session')
      .then(async (result) => {
        if (!active) return;
        setAuthenticated(result.authenticated);
        if (result.authenticated) await loadDashboard();
      })
      .catch((error) => {
        if (active) setLoginError(error instanceof Error ? error.message : 'Could not check the admin session.');
      })
      .finally(() => {
        if (active) setCheckingSession(false);
      });
    return () => { active = false; };
  }, [loadDashboard]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoginError('');
    try {
      await api('/api/cna-training/admin/session', 'POST', { username, password });
      setAuthenticated(true);
      setPassword('');
      await loadDashboard();
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : 'Could not sign in.');
    }
  };

  const handleLogout = async () => {
    await api('/api/cna-training/admin/session', 'DELETE').catch(() => undefined);
    setAuthenticated(false);
    setSettings(null);
    setPosts([]);
  };

  const saveSettings = async (messageType: 'notice' | 'social') => {
    if (!settings) return;
    setSavingSettings(true);
    setPageError('');
    setNoticeMessage('');
    setSocialMessage('');
    try {
      const saved = await api<CnaSiteSettings>('/api/cna-training/admin/settings', 'PUT', {
        ...settings,
        section: messageType,
      });
      setSettings((current) => current ? {
        ...current,
        ...(messageType === 'notice'
          ? { noticeEnabled: saved.noticeEnabled, noticeText: saved.noticeText }
          : { socialLinks: saved.socialLinks }),
      } : saved);
      if (messageType === 'notice') setNoticeMessage('Class notice saved.');
      else setSocialMessage('Social links saved.');
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Could not save settings.');
    } finally {
      setSavingSettings(false);
    }
  };

  const savePost = async (status: 'draft' | 'published') => {
    setSavingPost(true);
    setPageError('');
    setPostMessage('');
    const payload = { ...postDraft, status };
    try {
      const saved = await api<CnaPost>(
        postDraft.id ? `/api/cna-training/admin/posts/${postDraft.id}` : '/api/cna-training/admin/posts',
        postDraft.id ? 'PUT' : 'POST',
        payload
      );
      setPosts((current) => [saved, ...current.filter((post) => post.id !== saved.id)]);
      setPostDraft(emptyPost);
      setPostMessage(status === 'published' ? 'Update published.' : 'Draft saved.');
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Could not save this update.');
    } finally {
      setSavingPost(false);
    }
  };

  const editPost = (post: CnaPost) => {
    setPostDraft({
      id: post.id,
      title: post.title,
      slug: post.slug,
      summary: post.summary,
      body: post.body,
    });
    setPostMessage('');
  };

  const deletePost = async (post: CnaPost) => {
    if (!window.confirm(`Delete “${post.title}”? This cannot be undone.`)) return;
    try {
      await api(`/api/cna-training/admin/posts/${post.id}`, 'DELETE');
      setPosts((current) => current.filter((item) => item.id !== post.id));
      if (postDraft.id === post.id) setPostDraft(emptyPost);
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Could not delete this update.');
    }
  };

  if (checkingSession) {
    return <main className="cna-admin-shell"><p role="status">Checking admin session…</p></main>;
  }

  if (!authenticated) {
    return (
      <main className="cna-admin-shell cna-admin-shell--login">
        <Head><meta name="robots" content="noindex,nofollow" /></Head>
        <section className="cna-admin-login" aria-labelledby="admin-login-heading">
          <p className="cna-admin-eyebrow">West Harbor CNA Training</p>
          <h1 id="admin-login-heading">Admin sign in</h1>
          <p>Sign in to manage class notices, social profiles, and updates.</p>
          <form onSubmit={handleLogin} className="cna-admin-form">
            <label htmlFor="admin-username">Username</label>
            <input
              id="admin-username"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            {loginError && <p className="cna-admin-error" role="alert">{loginError}</p>}
            <button className="cna-admin-button" type="submit">Sign in</button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="cna-admin-shell">
      <Head><meta name="robots" content="noindex,nofollow" /></Head>
      <header className="cna-admin-header">
        <div>
          <p className="cna-admin-eyebrow">West Harbor CNA Training</p>
          <h1>Content dashboard</h1>
          <p>Manage the class notice, social links, and public class updates.</p>
        </div>
        <button className="cna-admin-button cna-admin-button--quiet" type="button" onClick={handleLogout}>
          Sign out
        </button>
      </header>

      {pageError && <p className="cna-admin-error" role="alert">{pageError}</p>}

      {settings ? (
        <div className="cna-admin-settings-grid">
          <section className="cna-admin-card" aria-labelledby="notice-editor-heading">
            <div className="cna-admin-card__heading">
              <div>
                <p className="cna-admin-eyebrow">Site-wide message</p>
                <h2 id="notice-editor-heading">Class notice</h2>
              </div>
              <span className={`cna-admin-status ${settings.noticeEnabled ? 'is-on' : 'is-off'}`}>
                {settings.noticeEnabled ? 'Visible' : 'Hidden'}
              </span>
            </div>
            <label className="cna-admin-toggle">
              <input
                type="checkbox"
                checked={settings.noticeEnabled}
                onChange={(event) => setSettings({ ...settings, noticeEnabled: event.target.checked })}
              />
              Show notice on CNA pages
            </label>
            <label htmlFor="class-notice-text">Notice text</label>
            <textarea
              id="class-notice-text"
              rows={4}
              maxLength={500}
              value={settings.noticeText}
              onChange={(event) => setSettings({ ...settings, noticeText: event.target.value })}
            />
            <p className="cna-admin-help">Up to 500 characters. This notice appears on the CNA overview, program, and application pages.</p>
            <div className="cna-admin-actions">
              <button className="cna-admin-button" type="button" disabled={savingSettings} onClick={() => void saveSettings('notice')}>
                {savingSettings ? 'Saving…' : 'Save notice'}
              </button>
              {noticeMessage && <span className="cna-admin-success" role="status">{noticeMessage}</span>}
            </div>
          </section>

          <section className="cna-admin-card" aria-labelledby="social-editor-heading">
            <p className="cna-admin-eyebrow">Public profile links</p>
            <h2 id="social-editor-heading">Social links</h2>
            <p className="cna-admin-help">Use a full HTTPS profile URL. Clear a field to hide that social link from the site.</p>
            <div className="cna-admin-form">
              {settings.socialLinks.map((link) => (
                <React.Fragment key={link.id}>
                  <label htmlFor={`social-${link.id}`}>{link.label} URL</label>
                  <input
                    id={`social-${link.id}`}
                    type="url"
                    inputMode="url"
                    placeholder={`https://${link.id}.com/your-profile`}
                    value={link.href === '#' ? '' : link.href}
                    onChange={(event) => setSettings({
                      ...settings,
                      socialLinks: settings.socialLinks.map((item) => item.id === link.id ? { ...item, href: event.target.value } : item),
                    })}
                  />
                </React.Fragment>
              ))}
            </div>
            <div className="cna-admin-actions">
              <button className="cna-admin-button" type="button" disabled={savingSettings} onClick={() => void saveSettings('social')}>
                {savingSettings ? 'Saving…' : 'Save social links'}
              </button>
              {socialMessage && <span className="cna-admin-success" role="status">{socialMessage}</span>}
            </div>
          </section>
        </div>
      ) : null}

      <section className="cna-admin-card cna-admin-posts" aria-labelledby="post-editor-heading">
        <div className="cna-admin-card__heading">
          <div>
            <p className="cna-admin-eyebrow">News and class updates</p>
            <h2 id="post-editor-heading">{postDraft.id ? 'Edit update' : 'Write an update'}</h2>
          </div>
          {postDraft.id && <button type="button" className="cna-admin-text-button" onClick={() => setPostDraft(emptyPost)}>Cancel editing</button>}
        </div>
        <div className="cna-admin-post-layout">
          <form className="cna-admin-form" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="post-title">Title</label>
            <input
              id="post-title"
              value={postDraft.title}
              maxLength={140}
              onChange={(event) => setPostDraft((current) => ({
                ...current,
                title: event.target.value,
                slug: !current.id && (!current.slug || current.slug === makeSlug(current.title))
                  ? makeSlug(event.target.value)
                  : current.slug,
              }))}
            />
            <label htmlFor="post-slug">Page URL</label>
            <div className="cna-admin-slug-field">
              <span>/cna-training/updates/</span>
              <input id="post-slug" value={postDraft.slug} maxLength={100} onChange={(event) => setPostDraft({ ...postDraft, slug: makeSlug(event.target.value) })} />
            </div>
            <label htmlFor="post-summary">Short summary <span>(optional)</span></label>
            <textarea id="post-summary" rows={2} maxLength={300} value={postDraft.summary} onChange={(event) => setPostDraft({ ...postDraft, summary: event.target.value })} />
            <label htmlFor="post-body">Post</label>
            <textarea id="post-body" rows={10} maxLength={30000} value={postDraft.body} onChange={(event) => setPostDraft({ ...postDraft, body: event.target.value })} />
            <p className="cna-admin-help">Plain text only. Use a blank line to start a new paragraph.</p>
            <div className="cna-admin-actions">
              <button className="cna-admin-button cna-admin-button--quiet" type="button" disabled={savingPost} onClick={() => void savePost('draft')}>
                Save draft
              </button>
              <button className="cna-admin-button" type="button" disabled={savingPost} onClick={() => void savePost('published')}>
                {savingPost ? 'Saving…' : 'Publish update'}
              </button>
              {postMessage && <span className="cna-admin-success" role="status">{postMessage}</span>}
            </div>
          </form>

          <aside className="cna-admin-post-list" aria-labelledby="saved-posts-heading">
            <h3 id="saved-posts-heading">Saved updates</h3>
            {posts.length === 0 ? (
              <p className="cna-admin-help">No posts yet. Save a draft or publish your first update.</p>
            ) : (
              <ul>
                {posts.map((post) => (
                  <li key={post.id}>
                    <div>
                      <span className={`cna-admin-status ${post.status === 'published' ? 'is-on' : 'is-off'}`}>
                        {post.status === 'published' ? 'Published' : 'Draft'}
                      </span>
                      <h4>{post.title}</h4>
                      <p>{post.updatedAt ? `Updated ${new Date(post.updatedAt).toLocaleDateString()}` : ''}</p>
                    </div>
                    <div className="cna-admin-post-actions">
                      {post.status === 'published' && (
                        <a href={`/cna-training/updates/${post.slug}`} target="_blank" rel="noreferrer">View</a>
                      )}
                      <button type="button" className="cna-admin-text-button" onClick={() => editPost(post)}>Edit</button>
                      <button type="button" className="cna-admin-text-button cna-admin-text-button--danger" onClick={() => void deletePost(post)}>Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
};

export default CnaAdminPage;
