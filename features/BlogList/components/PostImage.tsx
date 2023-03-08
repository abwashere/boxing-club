import getUrlFor from '@/utils/getUrlFor';
import classNames from 'classnames';
import Image from 'next/image';

type Props = {
  cdnImage: Image;
  // isCustom?: boolean;
  // isMain?: boolean;
  w?: number;
  h?: number;
};

const imageClassNames =
  'object-cover rounded-lg tablet:rounded-none tablet:!rounded-t-xl laptop:!rounded-l-xl laptop:!rounded-r-none';
/* 
const resolveCustomImage = (image: Image, isMain: boolean) => {
  return (
    <>
      <img
        src={getUrlFor(image).fit('crop').size(768, 300).url()}
        alt='main post image'
        className={classNames(imageClassNames, 'tablet:hidden')}
      />
      <img
        src={getUrlFor(image).fit('crop').size(768, 300).url()}
        alt='main post image'
        className={classNames(imageClassNames, 'tablet:hidden')}
      />
    </>
  );
};
 */
const PostImage = ({
  cdnImage,
  // isCustom,
  // isMain = false,
  w = 768,
  h = 300,
}: Props) => {
  return (
    <>
      {/* {isCustom ? (
        <img
          src={getUrlFor(cdnImage).fit('crop').size(768, 300).url()}
          alt='main post image'
          className={classNames(imageClassNames, 'tablet:hidden')}
        />
      ) : ( */}
        <>
          {/* Mobile */}
          <img
            src={getUrlFor(cdnImage).fit('crop').size(w, h).url()}
            alt='main post image'
            className={classNames(imageClassNames, 'tablet:hidden')}
          />

          {/* Tablet ... */}
          <Image
            src={getUrlFor(cdnImage).url()}
            alt='main post image'
            className={classNames(imageClassNames, 'hidden tablet:block')}
            fill
          />
        </>
      {/* )} */}
    </>
  );
};

export default PostImage;
