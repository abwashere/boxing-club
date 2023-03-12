import Chip from '@/components/Chip';
import ClientSideRoute from '@/components/ClientSideRoute';
import DateChip from '@/components/DateChip';
import ArrowUpRight from '@/components/Icons/ArrowUpRight';
import { PoorTextComponents } from '@/components/PortableTextComponents';
import { getFormattedDate } from '@/utils/getFormattedDate';
import { actusUrl } from '@/utils/urls';
import { PortableText } from '@portabletext/react';
import PostImage from './PostImage';

type Props = { post: Post };

const Post = ({ post }: Props) => {
  return (
    <div className='mb-5 tablet:shadow-lg tablet:shadow-gray-shadow laptop:rounded-xl laptop:mb-0 laptop:flex'>
      <div className='relative mb-2 laptop:w-1/2 h-52 tablet:h-72 tablet:mb-0'>
        <PostImage cdnImage={post.mainImage} />
        <DateChip
          extraClassNames='absolute laptop:hidden left-1 bottom-1'
          date={getFormattedDate(post.publishedAt)}
        />
      </div>

      <div className='p-2 border-b laptop:w-1/2 tablet:border-b-0 border-neutral-700 laptop:border laptop:rounded-r-xl laptop:p-4 group'>
        <ClientSideRoute route={`${actusUrl}/${post.slug.current}`}>
          <div className='flex justify-between'>
            <h2 className='mb-2'>{post.title}</h2>
            <DateChip
              extraClassNames='hidden laptop:block laptop:ml-4 laptop:-mr-4'
              date={getFormattedDate(post.publishedAt)}
            />
          </div>
          <div className='flex flex-wrap mb-2 gap-x-2 gap-y-1'>
            {post.categories.map(category => (
              <Chip key={category._id} item={category.title} color='gray' />
            ))}
          </div>
          <div className='mb-2 font-normal line-clamp-2 laptop:line-clamp-3'>
            <PortableText
              value={post.subtitle ? post.subtitle : post.body}
              components={PoorTextComponents}
            />
          </div>
          <div className='flex flex-wrap items-center'>
            <span className='mr-1 font-bold text-yellow'>Lire la suite</span>
            <ArrowUpRight extraClassNames='text-yellow !h-3 !w-3 group-hover:animate-bounce' />
          </div>
        </ClientSideRoute>
      </div>
    </div>
  );
};

export default Post;
