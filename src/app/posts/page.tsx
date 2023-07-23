import React, { FC } from 'react';
import PostCard from '@/components/Post/PostCard';
import { posts } from '../../../mock/post';

const PostsPage: FC = () => {
  return (
    <div className="p-5 sm:p-10 bg-white rounded-md w-3/4 sm:w-full mx-auto">
      <div className="w-full mx-auto grid lg:grid-cols-2 gap-5">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
