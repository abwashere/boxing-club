import { RichTextComponents } from '@/components/PortableTextComponents';
import SectionWrapper from '@/components/SectionWrapper';
import getUrlFor from '@/utils/getUrlFor';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = { article: Article };

const PrizesSection = ({ article }: Props) => {
  return (
    <SectionWrapper>
      {article && (
        <>
          <div className='relative h-32 m-auto tablet:w-2/3 tablet:h-48 laptop:h-64 desktop:h-72'>
            <Image
              src={getUrlFor(article.mainImage).url()}
              alt={article.mainImage.alt || 'Photo compétiteurs'}
              className='object-cover object-top'
              fill
              sizes='(max-height: 390px) 128px, (max-height: 768px) 192px'
            />
          </div>
          <div className='p-2 text-sm text-gray-light'>
            <p className='my-2'>Le VBC c&apos;est&nbsp;:</p>
            <PortableText
              value={article.body}
              components={RichTextComponents}
            />
          </div>
        </>
      )}
    </SectionWrapper>
  );
};

export default PrizesSection;
