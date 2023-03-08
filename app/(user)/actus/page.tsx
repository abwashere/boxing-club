import PageTitle from '@/components/PageTitle';
import BlogList from '@/features/BlogList';
import MainWrapper from '@/features/MainWrapper';
import PreviewBlogList from '@/features/Preview/PreviewBlogList';
import { Preview as PreviewSuspense } from '@/features/Preview/PreviewSuspense';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { previewData } from 'next/headers';

const query = groq`
  *[_type=='post']{
      ...,
      categories[]->,
      body->,
      secondaryImages->
  } | order(publishedAt desc)
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
    <MainWrapper>
      <div className='flex w-full mb-10 tablet:justify-center'>
        <PageTitle title='ACTUALITÉS' />
      </div>
      <BlogList posts={posts} />
    </MainWrapper>
  );
};

export default ActusPage;
