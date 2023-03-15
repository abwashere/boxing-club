import MainWrapper from '@/components/MainWrapper';
import PageTitle from '@/components/PageTitle';
import { RichTextComponents } from '@/components/PortableTextComponents';
import { client } from '@/lib/sanity.client';
import getUrlFor from '@/utils/getUrlFor';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';

const query = groq`*[_type=='article' && slug.current=='administration'][0]{
  ...,
  coaches[]->
}`;

export default async function AdministrationPage() {
  const article = await client.fetch(query);
  const administration = article.coaches;

  return (
    <MainWrapper>
      <div className='my-4 text-center uppercase tablet:mb-10'>
        <PageTitle title={article.title} />
      </div>
      <div className='grid grid-cols-2 mb-4 text-center laptop:grid-cols-4 gap-x-2 gap-y-8 laptop:gap-8'>
        {administration &&
          administration.map((member: Person) => (
            <div key={member._id}>
              <p>{member.fullName}</p>
              <p className='mb-2 text-yellow'>{member.administrationRole}</p>
              <div className='relative mb-2 h-52 tablet:h-96 laptop:h-[600px]'>
                <Image
                  src={getUrlFor(member.photo).url()}
                  alt={member.photo.alt}
                  className='object-cover object-top'
                  fill
                  sizes=''
                />
              </div>
            </div>
          ))}
      </div>
      <div className='mb-8 text-center'>
        <PortableText value={article.body} components={RichTextComponents} />
      </div>
    </MainWrapper>
  );
}
