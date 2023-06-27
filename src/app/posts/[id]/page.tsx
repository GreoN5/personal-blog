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
      <div className="bg-slate-100 px-20 pb-1 pt-16 mt-5 h-full">
        <h1 className="mb-1 font-semibold">{post?.title}</h1>
        <div className="mb-5">
          <span className="mr-1 text-slate-500">{post?.category}</span>
          <span className="mr-1 text-slate-500">/</span>
          <span className="text-slate-500">
            {format(new Date(post?.postedOn || ''), 'dd.MM.yyyy')}
          </span>
        </div>
        <p className="text-justify">{post?.content}</p>
      </div>
    </>
  );
};

export default PostPage;
