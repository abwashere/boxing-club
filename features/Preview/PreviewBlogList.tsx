'use client';

import { usePreview } from '@/lib/sanity.preview';
import BlogList from '@/features/Blog/components/BlogList';

type Props = { query: string };

const PreviewBlogList = ({ query }: Props) => {
  const posts = usePreview(null, query);
  console.log('PREVIEW bloglist', posts.length);

  return <BlogList posts={posts} />;
};

export default PreviewBlogList;
