import React, { FC } from 'react';
import Link from 'next/link';
import NavigationBar from '@/components/Navigation';
import HomeHeading from '@/components/Heading';
import PostCard from '@/components/Post/PostCard';
import { posts } from 'mock/post';

const Home: FC = () => {
  return (
    <>
      <NavigationBar />
      <div className="flex justify-center pt-10 pb-20">
        <HomeHeading />
      </div>
      <div>
        <h2 className="font-semibold">Recent posts:</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 pb-20 pt-5">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
