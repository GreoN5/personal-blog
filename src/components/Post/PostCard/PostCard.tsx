import React, { FC } from 'react';

type Props = {
  post: Record<string, any>;
};

const PostCard: FC<Props> = ({ post }) => {
  return (
    <div className="bg-slate-100 p-5 rounded-xl h-72 max-h-72">
      <h3 className="font-semibold mb-3 text-2xl">{post.title}</h3>
      <p className="text-justify line-clamp-5 text-base">{post.content}</p>
    </div>
  );
};

export default PostCard;
