import BackButton from '@/components/BackButton';
import Chip from '@/components/Chip';
import DateChip from '@/components/DateChip';
import Loader from '@/components/Loader';
import PageTitle from '@/components/PageTitle';
import { RichTextComponents } from '@/components/RichTextComponents';
import PostImage from '@/features/BlogList/components/PostImage';
import MainWrapper from '@/features/MainWrapper';
import { client } from '@/lib/sanity.client';
import { getFormattedDate } from '@/utils/getFormattedDate';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 120; // refetch data on the server for this page every 120 seconds

export async function generateStaticParams() {
  /*
    This method returns all possible slugs params.
    The query below returns every posts, with only slug object in each one
  */
  const query = groq`
    *[_type == 'post']
      {
        slug
      }
  `;
  const posts: Post[] = await client.fetch(query);
  const slugRoutes = posts.map(post => post.slug.current);

  return slugRoutes.map(slug => ({
    slug,
  }));
}

const PostPage = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type == 'post' && slug.current == $slug][0]
      {
        ...,
        categories[]->,
        secondaryImages[]->,
      }
  `;
  const post: Post = await client.fetch(query, { slug });

  if (!post)
    return (
      <div className='flex justify-center'>
        <Loader text="Chargement de l'article" />
      </div>
    );

  const {
    title,
    subtitle,
    categories,
    mainImage,
    secondaryImages,
    body,
    publishedAt,
  } = post;

  const backButton = <BackButton text='retour' />;
  return (
    <MainWrapper isArticle backButton={backButton}>
      <div className='w-full px-2 py-4 tablet:hidden'>
        <PageTitle title={title} />
      </div>
      <div>
        <DateChip
          classes='w-fit p-2 !bg-opacity-100'
          date={getFormattedDate(publishedAt)}
        />
      </div>
      <div className='relative mt-2'>
        <div className='tablet:min-h-[500px] laptop-lg:min-h-[700px]'>
          <PostImage
            isArticleImage
            cdnImage={mainImage}
            smallDeviceHeight={800}
          />
        </div>
        <div className='absolute bottom-0 hidden w-full px-2 py-4 rounded-b-lg tablet:block tablet:rounded-none bg-opacity-60 bg-gray'>
          <PageTitle title={title} />
        </div>
      </div>
      <div className='flex flex-wrap my-2 mb-4 gap-x-2 gap-y-1'>
        {categories.map(category => (
          <Chip key={category._id} item={category.title} color='gray' />
        ))}
      </div>
      {subtitle && (
        <div>
          <PortableText value={subtitle} components={RichTextComponents} />
        </div>
      )}
      <div>
        <PortableText value={body} components={RichTextComponents} />
      </div>
    </MainWrapper>
  );
};

export default PostPage;
