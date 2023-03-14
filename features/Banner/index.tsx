import { getRandomIndex } from '@/utils/getRandomIndex';
import getUrlFor from '@/utils/getUrlFor';
import resolveImagePosition from '@/utils/resolveImagePosition';
import classNames from 'classnames';
import Image from 'next/image';

type Props = { hero: HeroSection };

const Banner = ({ hero }: Props) => {
  const { title, subtitle, heroGallery } = hero;

  const randomImage =
    heroGallery.images[getRandomIndex(heroGallery.images.length)];

  const resolvedImagePosition = resolveImagePosition(randomImage);

  return (
    <div className='relative h-[100vh] w-screen'>
      <Image
        src={getUrlFor(randomImage).url()}
        alt={randomImage.alt}
        className={classNames('object-cover', resolvedImagePosition)}
        fill
        quality={100}
      />
      <div className='absolute top-[45%] w-full'>
        <div className='flex flex-col justify-center px-8 py-4 m-auto font-bold text-center bg-opacity-25 w-fit bg-gray'>
          <h1 className='!text-xl tablet:!text-2xl text-yellow'>{title}</h1>
          <p className='w-2/3 m-auto text-xl leading-5 tracking-widest tablet:w-full'>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
