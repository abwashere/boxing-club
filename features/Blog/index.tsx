import React from 'react';
import BlogList from './components/BlogList';

type Props = { posts: Post[] };

const Blog = ({ posts }: Props) => {
  return (
    <div>
        IN BLOG :
      <BlogList posts={posts} />
    </div>
  );
};

export default Blog;
