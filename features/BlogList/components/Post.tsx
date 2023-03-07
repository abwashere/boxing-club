import Chip from '@/components/Chip';
import ClientSideRoute from '@/components/ClientSideRoute';
import DateChip from '@/components/DateChip';
import ArrowUpRight from '@/components/Icons/ArrowUpRight';
import { getFormattedDate } from '@/utils/getFormattedDate';
import { actusUrl } from '@/utils/urls';
import PostImage from './PostImage';

type Props = { post: Post };

const Post = ({ post }: Props) => {
  return (
    <div className='mb-5 tablet:shadow-lg tablet:shadow-gray-shadow laptop:rounded-xl laptop:mb-0 laptop:flex'>
      <div className='relative mb-2 laptop:w-1/2 tablet:h-72 tablet:mb-0'>
        <PostImage cdnImage={post.mainImage} />
        <DateChip
          classes='absolute laptop:hidden left-1 top-1'
          date={getFormattedDate(post.publishedAt)}
        />
      </div>

      <div className='relative p-2 border-b-2 laptop:w-1/2 tablet:border-b-0 border-neutral-700 laptop:border laptop:rounded-r-xl laptop:p-4 group'>
        <ClientSideRoute route={`${actusUrl}/${post.slug.current}`}>
          <h2 className='mb-2'>{post.title}</h2>
          <div className='flex flex-wrap mb-2 gap-x-2 gap-y-1'>
            {post.categories.map(category => (
              <Chip key={category._id} item={category.title} color='gray' />
            ))}
          </div>
          <p className='mb-2 line-clamp-2 laptop:line-clamp-3'>
            Excepteur nisi duis incididunt ea minim qui ullamco consectetur
            labore ex. Adipisicing adipisicing cupidatat ea cillum amet.
            Proident cupidatat consequat culpa enim ullamco fugiat pariatur sint
            ut. Elit nisi cillum cillum proident eiusmod. Aliqua laborum est
            deserunt labore officia ut dolore deserunt duis esse minim amet.
          </p>
          <div className='flex flex-wrap items-center'>
            <span className='mr-1 font-bold text-yellow'>Lire la suite</span>
            <ArrowUpRight classes='text-yellow !h-3 !w-3 group-hover:animate-bounce' />
          </div>
          <DateChip
            classes='hidden laptop:block absolute right-0 bottom-0'
            date={getFormattedDate(post.publishedAt)}
          />
        </ClientSideRoute>
      </div>
    </div>
  );
};

export default Post;
