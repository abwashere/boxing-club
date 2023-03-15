import BackButton from '@/components/BackButton';
import Loader from '@/components/Loader';
import MainWrapper from '@/components/MainWrapper';
import PageTitle from '@/components/PageTitle';
import { RichTextComponents } from '@/components/PortableTextComponents';
import { client } from '@/lib/sanity.client';
import getUrlFor from '@/utils/getUrlFor';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const query = groq`
    *[_type == 'person' && "coach" in roles]
      {
        slug
      }
  `;
  const coaches: Person[] = await client.fetch(query);
  const slugRoutes = coaches.map(coach => coach.slug.current);

  return slugRoutes.map(slug => ({
    slug,
  }));
}

export default async function PostPage({ params: { slug } }: Props) {
  const query = groq`
    *[_type == 'person' && slug.current == $slug][0]
  `;
  const coach: Person = await client.fetch(query, { slug });

  if (!coach)
    return (
      <div className='flex items-center justify-center h-full'>
        <Loader text='Chargement...' />
      </div>
    );

  const { fullName, presentation, subtitle, photo } = coach;

  return (
    <MainWrapper backButton={<BackButton text='retour' />}>
      <div className='my-4 text-center uppercase tablet:mb-10'>
        <PageTitle title={fullName} />
      </div>
      <div className='flex flex-col w-full tablet:gap-8 laptop:gap-10 tablet:flex-row tablet:justify-center'>
        <div className='relative tablet:w-1/3 laptop:w-1/2 desktop:w-1/3 mb-4 h-96 laptop:h-[60vh]'>
          <Image
            src={getUrlFor(photo).url()}
            alt={photo.alt}
            className='object-cover object-top'
            fill
            sizes='384px'
          />
        </div>
        <div className='mb-8'>
          <h2 className='mb-4 text-yellow'>{subtitle}</h2>
          <PortableText value={presentation} components={RichTextComponents} />
        </div>
      </div>
    </MainWrapper>
  );
}
