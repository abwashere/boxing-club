import PageTitle from '@/components/PageTitle';
import Post from './components/Post';

type Props = { posts: Post[] };

const BlogList = ({ posts }: Props) => {
    console.log('Bloglist', posts);

  return (
    <div>
      <PageTitle title='ACTUALITÉS' />
      <div className='flex flex-col grid-cols-2 tablet:gap-2 laptop:gap-5 laptop:grid'>
        {posts.map(post => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
