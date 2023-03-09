'use client';

import BlogList from '@/features/BlogList';
import { usePreview } from '@/lib/sanity.preview';
import MainWrapper from '@/components/MainWrapper';

type Props = { query: string };

const PreviewBlogList = ({ query }: Props) => {
  const posts = usePreview(null, query);

  return (
    <MainWrapper>
      <BlogList posts={posts} />
    </MainWrapper>
  );
};

export default PreviewBlogList;
