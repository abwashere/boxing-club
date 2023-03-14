import SectionWrapper from '@/components/SectionWrapper';
import getUrlFor from '@/utils/getUrlFor';
import Image from 'next/image';

type Props = { article: Article };

const PartnersSection = ({ article }: Props) => {
  return (
    <SectionWrapper bgColor='white'>
      <div className='!text-gray-dark'>
        <h2 className='mb-2 uppercase'>{article.title}</h2>
        <p>{article.subtitle}</p>
      </div>
      <div className='flex flex-col items-center justify-center max-w-xl gap-4 py-8 m-auto laptop:max-w-2xl tablet:flex-row tablet:flex-wrap'>
        {article.gallery.images.map((image: Image) => (
          <div
            key={image._id}
            className='relative w-1/2 h-20 mb-1 laptop:mb-2 tablet:h-32 tablet:w-1/4'
          >
            <Image
              src={getUrlFor(image).url()}
              alt={image.alt || 'Logo partenaire'}
              className='object-contain object-center'
              fill
              sizes='(max-height: 390px) 80px, (max-height: 768px) 128px'
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PartnersSection;
