import MainWrapper from '@/components/MainWrapper';
import PageTitle from '@/components/PageTitle';
import { RichTextComponents } from '@/components/PortableTextComponents';
import { client } from '@/lib/sanity.client';
import getUrlFor from '@/utils/getUrlFor';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import Organigramme from './Organigramme';

const query = groq`*[_type=='article' && slug.current=='presentation-du-club'][0]{
  title,
  mainImage,
  gallery,
  body
}`;

export default async function PresentationPage() {
  const article = await client.fetch(query);
  console.log(article);
  const { title, mainImage, gallery, body } = article;

  const organigramme = gallery.images[0];

  return (
    <MainWrapper>
      <div className='mb-4 text-center tablet:mb-10'>
        <PageTitle title={title} />
      </div>
      <div className='relative mb-2 h-52 tablet:h-48 laptop:h-72 desktop:h-96 group-hover:outline group-hover:outline-yellow'>
        <Image
          src={getUrlFor(mainImage).url()}
          alt={mainImage.alt}
          className='object-cover object-top'
          fill
          sizes='(max-height: 390px) 192px, (max-height: 768px) 240px'
        />
      </div>
      <div className='py-4 mb-8'>
        <PortableText components={RichTextComponents} value={body} />
      </div>

      <Organigramme image={organigramme} />
    </MainWrapper>
  );
}
