import React, { FC } from 'react';
import NavigationBar from '@/components/Navigation';
import HomeHeading from '@/components/Heading';
import PostCard from '@/components/Post/PostCard';
import { posts } from 'mock/post';

const Home: FC = () => {
  return (
    <div className="w-full h-full pt-11">
      <div className="container mx-auto w-3/4">
        <NavigationBar />
      </div>
      <div className="flex container justify-center mx-auto pt-10 pb-20 w-3/4">
        <HomeHeading />
      </div>
      <div className="grid md:grid-cols-3 gap-5 container mx-auto w-3/4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
