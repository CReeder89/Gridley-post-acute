import React from 'react';
import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import MetaHead from '../../../components/MetaHead';
import { getPublishedCnaPosts, type CnaPost } from '../../../lib/cnaContent';

const dateLabel = (value: string | null) => value
  ? new Date(value).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  : '';

const CnaUpdatesPage: React.FC<{ posts: CnaPost[] }> = ({ posts }) => (
  <div className="academy-page cna-updates-page">
    <MetaHead
      title="Class Updates - West Harbor CNA Training"
      description="Class news and updates from West Harbor CNA Training in Gridley, California."
      image="/images/cna-group2.jpg"
      url={`${process.env.WEBSITE}/cna-training/updates`}
    />
    <header className="academy-page-header">
      <p className="academy-section__eyebrow">West Harbor CNA Training</p>
      <h1>Class Updates</h1>
      <p>News, class announcements, and stories from the program.</p>
    </header>
    <main className="academy-section cna-updates-list" aria-label="Class updates">
      {posts.length ? posts.map((post) => (
        <article className="cna-update-card" key={post.id}>
          <p className="cna-update-card__date">{dateLabel(post.publishedAt)}</p>
          <h2><Link href={`/cna-training/updates/${post.slug}`}>{post.title}</Link></h2>
          {post.summary && <p>{post.summary}</p>}
          <Link className="academy-text-link" href={`/cna-training/updates/${post.slug}`}>
            Read update
          </Link>
        </article>
      )) : (
        <div className="cna-updates-empty">
          <h2>Updates coming soon</h2>
          <p>Check back for class news and announcements.</p>
        </div>
      )}
    </main>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => ({
  props: { posts: await getPublishedCnaPosts() },
});

export default CnaUpdatesPage;
