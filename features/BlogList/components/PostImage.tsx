import getUrlFor from '@/utils/getUrlFor';
import resolveImagePosition from '@/utils/resolveImagePosition';
import classNames from 'classnames';
import Image from 'next/image';

type Props = {
  cdnImage: Image;
};

const PostImage = ({ cdnImage }: Props) => {
  const resolvedImagePosition = resolveImagePosition(cdnImage);

  return (
    <Image
      src={getUrlFor(cdnImage).url()}
      alt={cdnImage.alt || "Image principale de l'article"}
      className={classNames('object-cover', resolvedImagePosition)}
      fill
      priority={true}
    />
  );
};

export default PostImage;
