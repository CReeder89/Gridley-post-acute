import React from 'react';
import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import MetaHead from '../../../components/MetaHead';
import { getPublishedCnaPost, type CnaPost } from '../../../lib/cnaContent';

const CnaUpdatePage: React.FC<{ post: CnaPost }> = ({ post }) => {
  const paragraphs = post.body.split(/\r?\n\s*\r?\n/).map((paragraph) => paragraph.trim()).filter(Boolean);

  return (
    <div className="academy-page cna-update-page">
      <MetaHead
        title={`${post.title} - West Harbor CNA Training`}
        description={post.summary || post.title}
        image="/images/cna-group2.jpg"
        url={`${process.env.WEBSITE}/cna-training/updates/${post.slug}`}
      />
      <article className="cna-update-article">
        <Link href="/cna-training/updates" className="academy-text-link">← All class updates</Link>
        <p className="cna-update-card__date">
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            : ''}
        </p>
        <h1>{post.title}</h1>
        {post.summary && <p className="cna-update-article__summary">{post.summary}</p>}
        <div className="cna-update-article__body">
          {paragraphs.map((paragraph, index) => <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>)}
        </div>
      </article>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{ post: CnaPost }> = async (context) => {
  const slug = context.params?.slug;
  if (typeof slug !== 'string') return { notFound: true };
  const post = await getPublishedCnaPost(slug);
  if (!post) return { notFound: true };
  return { props: { post } };
};

export default CnaUpdatePage;
