import getUrlFor from '@/utils/getUrlFor';
import classNames from 'classnames';
import Image from 'next/image';

type Props = {
  cdnImage: Image;
};

const imageClassNames =
  'object-cover rounded-lg tablet:rounded-none tablet:!rounded-t-xl laptop:!rounded-l-xl laptop:!rounded-r-none';

const PostImage = ({ cdnImage }: Props) => {
  return (
    <>
      {/* Mobile */}
      <img
        src={getUrlFor(cdnImage).fit('crop').size(768, 300).url()}
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
  );
};

export default PostImage;
