import BackButton from '@/components/BackButton';
import Chip from '@/components/Chip';
import DateChip from '@/components/DateChip';
import Loader from '@/components/Loader';
import PageTitle from '@/components/PageTitle';
import { RichTextComponents } from '@/components/PortableTextComponents';
import PostImage from '@/features/BlogList/components/PostImage';
import MainWrapper from '@/components/MainWrapper';
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
    <MainWrapper backButton={backButton}>
      <div className='w-full my-4 tablet:hidden'>
        <PageTitle title={title} />
      </div>
      <div>
        <DateChip
          extraClassNames='w-fit p-2 !bg-opacity-100'
          date={getFormattedDate(publishedAt)}
        />
      </div>
      <div className='relative mt-2'>
        <div className='relative h-52 tablet:min-h-[500px] laptop:min-h-[700px]'>
          <PostImage cdnImage={mainImage} />
        </div>
        <div className='absolute bottom-0 hidden w-full px-2 pb-4 tablet:block bg-opacity-60 bg-gray'>
          <PageTitle title={title} />
        </div>
      </div>
      <div className='flex flex-wrap my-2 mb-4 gap-x-2 gap-y-1'>
        {categories.map(category => (
          <Chip
            key={category._id}
            item={category.title}
            color='gray'
            extraClassNames='laptop:text-xs laptop:px-3'
          />
        ))}
      </div>
      {subtitle && (
        <div>
          <PortableText value={subtitle} components={RichTextComponents} />
        </div>
      )}
      <div className='mb-8'>
        <PortableText value={body} components={RichTextComponents} />
      </div>
      {secondaryImages && (
        <>
          <hr className='mb-2 text-gray' />
          <p className='mb-2 text-center text-gray-light'>
            Autres images de l&apos;évènement
          </p>
          <div className='grid gap-2 mb-4 tablet:grid-cols-2'>
            {secondaryImages.map(image => (
              <div
                key={image._id}
                className='relative min-h-[200px] tablet:min-h-[400px] tablet:mb-4'
              >
                <PostImage cdnImage={image} />
              </div>
            ))}
          </div>
        </>
      )}
    </MainWrapper>
  );
};

export default PostPage;
