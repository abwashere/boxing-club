import getUrlFor from '@/utils/getUrlFor';
import classNames from 'classnames';
import Image from 'next/image';

type Props = {
  cdnImage: Image;
  isArticleImage?: boolean;
  smallDeviceWidth?: number;
  smallDeviceHeight?: number;
};

const imageRoundedClassNames =
  'object-cover rounded-lg tablet:rounded-none tablet:!rounded-t-xl laptop:!rounded-l-xl laptop:!rounded-r-none';
const imageSquaredClassNames = 'object-contain';

const PostImage = ({
  cdnImage,
  isArticleImage,
  smallDeviceWidth = 768,
  smallDeviceHeight = 300,
}: Props) => {
  return (
    <>
      {/* Mobile */}
      <img
        src={getUrlFor(cdnImage)
          .fit('crop')
          .size(smallDeviceWidth, smallDeviceHeight)
          .url()}
        alt='main post image'
        className={classNames(imageRoundedClassNames, 'tablet:hidden')}
      />

      {/* Tablet ... */}
      <Image
        src={getUrlFor(cdnImage).url()}
        alt='main post image'
        className={classNames(
          isArticleImage ? imageSquaredClassNames : imageRoundedClassNames,
          'hidden tablet:block',
        )}
        fill
      />
    </>
  );
};

export default PostImage;
