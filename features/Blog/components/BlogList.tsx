type Props = { posts: Post[] };

const BlogList = ({ posts }: Props) => {
  console.log('bloglist', posts.length);

  return <div>BlogList</div>;
};

export default BlogList;
