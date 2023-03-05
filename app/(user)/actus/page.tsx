import Blog from '@/features/Blog';
import PreviewBlogList from '@/features/Preview/PreviewBlogList';
import { Preview as PreviewSuspense } from '@/features/Preview/PreviewSuspense';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { previewData } from 'next/headers';

const query = groq`
    *[_type=='post'] {
        title->,
        categories[]->
    } | order(_createdAt desc)
`;

const ActusPage = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  return (
    <div>
      <Blog posts={posts} />
    </div>
  );
};

export default ActusPage;
