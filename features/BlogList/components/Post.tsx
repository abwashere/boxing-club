import DateChip from '@/components/DateChip';
import ArrowUpRight from '@/components/Icons/ArrowUpRight';
import { getFormattedDate } from '@/utils/getFormattedDate';
import getUrlFor from '@/utils/getUrlFor';
import Image from 'next/image';
import Link from 'next/link';

type Props = { post: Post };

const Post = ({ post }: Props) => {
  return (
    <div className='mb-5 tablet:shadow-lg tablet:shadow-gray-shadow laptop:rounded-xl laptop:mb-0 tablet:flex'>
      <div className='relative flex-1 w-full mb-2 h-52 tablet:mb-0 tablet:h-72'>
        <Image
          src={getUrlFor(post.mainImage).url()}
          alt='main post image'
          className='object-cover object-top rounded-lg tablet:rounded-r-none tablet:rounded-l-xl'
          fill
        />
        <DateChip
          classes='absolute tablet:hidden left-1 top-1'
          date={getFormattedDate(post.publishedAt)}
        />
      </div>

      <div className='relative flex-1 p-2 border-b-2 border-neutral-700 tablet:border tablet:rounded-r-xl tablet:p-5 group'>
        <Link href='/url-a-ajouter'>
          <h2 className='mb-2'>{post.title}</h2>
          {/* <div>
            {post.categories.map(category => (
              <>
                TODO: <Chip item={category.title} />
                {category.title}
              </>
            ))}
          </div> */}
          <p className='mb-2 line-clamp-3'>
            Non excepteur amet minim mollit aute ullamco. Dolore amet officia
            amet nisi irure laborum eiusmod excepteur ex Lorem laboris ipsum
            velit sit. Ea consequat in esse et sunt aute. Ex enim enim aute
            magna ea eu dolor enim eu. Sunt ipsum commodo commodo minim
            consectetur esse esse reprehenderit ut anim quis esse.
          </p>
          <div className='flex items-center'>
            <span className='mr-1 font-bold text-gray'>Lire l'article</span>
            <ArrowUpRight classes='text-yellow h-2 w-2 group-hover:animate-bounce' />
          </div>
          {/*TODO: <div>{post.body[0]}</div> */}{' '}
          <DateChip
            classes='hidden tablet:block absolute left-0 bottom-0'
            date={getFormattedDate(post.publishedAt)}
          />
        </Link>
      </div>
    </div>
  );
};

export default Post;
