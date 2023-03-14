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
    *[_type == 'person' && role == "coach"]
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

  const backButton = <BackButton text='retour' />;

  return (
    <MainWrapper backButton={backButton}>
      <div className='mb-4 tablet:mb-10'>
        <PageTitle title={fullName} />
      </div>
      <div className='flex flex-col p-2 tablet:gap-8 laptop:gap-12 tablet:flex-row tablet:justify-center'>
        <div className='relative w-full mb-4 h-96 tablet:w-1/3'>
          <Image
            src={getUrlFor(photo).url()}
            alt={photo.alt}
            className='object-cover object-top tablet:object-contain'
            fill
            sizes='(max-height: 390px) 192px, (max-height: 768px) 240px'
          />
        </div>
        <div className='mb-8 tablet:flex-1 tablet:w-2/3'>
          <h2 className='mb-4 text-yellow'>{subtitle}</h2>
          <PortableText value={presentation} components={RichTextComponents} />
        </div>
      </div>
    </MainWrapper>
  );
}
