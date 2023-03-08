import BackButton from '@/components/BackButton';
import Chip from '@/components/Chip';
import DateChip from '@/components/DateChip';
import Loader from '@/components/Loader';
import PageSubTitle from '@/components/PageSubTitle';
import PageTitle from '@/components/PageTitle';
import PostImage from '@/features/BlogList/components/PostImage';
import MainWrapper from '@/features/MainWrapper';
import { RichTextComponents } from '@/features/RichTextComponents';
import { client } from '@/lib/sanity.client';
import { getFormattedDate } from '@/utils/getFormattedDate';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';

type Props = {
  params: {
    slug: string;
  };
};

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

  if (!post) return <Loader text="Chargement de l'article" />;

  const {
    title,
    subTitle,
    categories,
    mainImage,
    secondaryImages,
    body,
    publishedAt,
  } = post;

  const backButton = <BackButton text='retour' />;
  return (
    <MainWrapper backButton={backButton}>
      <div className='flex justify-end w-full'>
        <DateChip
          classes='w-fit p -2 !bg-opacity-100'
          date={getFormattedDate(publishedAt)}
        />
      </div>
      <div className='relative mt-2'>
        <div className='absolute top-0 w-full px-2 py-4 rounded-t-lg bg-opacity-80 bg-gray'>
          <PageTitle title={title} />
        </div>
        <PostImage cdnImage={mainImage} h={800} />
        <div className='flex flex-wrap my-2 gap-x-2 gap-y-1'>
          {categories.map(category => (
            <Chip key={category._id} item={category.title} color='gray' />
          ))}
        </div>
      </div>
      {subTitle && <PageSubTitle text={subTitle} />}
      <PortableText value={body} components={RichTextComponents} />
    </MainWrapper>
  );
};

export default PostPage;
