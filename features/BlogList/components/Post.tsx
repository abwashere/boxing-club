import ArrowUpRight from '@/components/Icons/ArrowUpRight';
import getUrlFor from '@/utils/getUrlFor';
import Image from 'next/image';
import Link from 'next/link';

type Props = { post: Post };

const Post = ({ post }: Props) => {
  return (
    <div className='mb-5 tablet:shadow-lg tablet:shadow-gray-shadow laptop:rounded-xl laptop:mb-0 tablet:flex'>
      <div className='relative flex-1 w-full h-40 mb-2 tablet:mb-0 tablet:h-72'>
        <Image
          src={getUrlFor(post.mainImage).url()}
          alt='main post image'
          className='object-cover rounded-lg tablet:rounded-l-xl'
          fill
        />
      </div>

      <div className='flex-1 p-2 border-b-2 border-gray tablet:border tablet:rounded-r-xl tablet:p-5 group'>
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
            <ArrowUpRight classes='text-yellow h-2.5 w-2.5 group-hover:animate-bounce' />
          </div>
          {/*TODO: <div>{post.body[0]}</div> */}
        </Link>
      </div>
    </div>
  );
};

export default Post;
