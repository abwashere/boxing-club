import getUrlFor from '@/utils/getUrlFor';
import resolveImagePosition from '@/utils/resolveImagePosition';
import classNames from 'classnames';
import Image from 'next/image';

type Props = {
  cdnImage: Image;
  isArticleImage?: boolean;
  isGalleryImage?: boolean;
};

const PostImage = ({ cdnImage, isArticleImage, isGalleryImage }: Props) => {
  const resolvedImagePosition = resolveImagePosition(cdnImage);

  return (
    <Image
      src={getUrlFor(cdnImage).url()}
      alt={cdnImage.alt || "Image principale de l'article"}
      className={classNames(
        'object-cover rounded-lg tablet:rounded-b-none',
        {
          'laptop:rounded-l-xl laptop:rounded-r-none': !isArticleImage,
        },
        { 'rounded-t-xl': isArticleImage },
        { '!rounded-none': isGalleryImage },
        resolvedImagePosition,
      )}
      fill
      // https://nextjs.org/docs/api-reference/next/image#sizes
      sizes={
        isArticleImage
          ? '(max-width: 768px) 99vw, (max-width: 1200px) 48vw, 30vw'
          : '(max-width: 390px) 99vw, (max-width: 768px) 48vw, 30vw'
      }
      priority={true}
    />
  );
};

export default PostImage;
