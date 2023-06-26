'use client';

import React, { FC } from 'react';
import { useParams } from 'next/navigation';
import { format } from 'date-fns';
import NavigationBar from '@/components/Navigation';
import { posts } from 'mock/post';

const PostPage: FC = () => {
  const params = useParams();
  const post = posts.find((p) => p.id === Number(params?.id));

  return (
    <>
      <NavigationBar />
      <div className="bg-slate-100 p-5 mt-5">
        <h1 className="mb-1">{post?.title}</h1>
        <div className="mb-5">
          <span>{post?.category}</span>
          <span>{post?.createdBy}</span>
          <span>{format(new Date(post?.postedOn || ''), 'yyyy-MM-dd')}</span>
        </div>
        <p>{post?.content}</p>
      </div>
    </>
  );
};

export default PostPage;
