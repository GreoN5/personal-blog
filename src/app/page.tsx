import React, { FC } from 'react';
import HomeHeading from '@/components/Heading';
import PostCard from '@/components/Post/PostCard';
import { posts } from 'mock/post';

const Home: FC = () => {
  return (
    <>
      <div className="flex justify-center pt-10 pb-20">
        <HomeHeading />
      </div>
      <div>
        <h2 className="font-semibold">Recent posts:</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 pb-20 pt-5">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Home;
