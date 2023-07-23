import React, { FC } from 'react';
import Link from 'next/link';
import { BsBoxArrowUpRight } from 'react-icons/bs';

type Props = {
  post: Record<string, any>;
};

const PostCard: FC<Props> = ({ post }) => {
  return (
    <div className="relative bg-slate-100 p-5 rounded-xl h-72 max-h-72 mb-5">
      <h3 className="font-semibold mb-3 text-2xl">{post.title}</h3>
      <p className="text-justify line-clamp-5 text-base">{post.content}</p>
      <Link href={`/posts/${post.id}`}>
        <p className="absolute bottom-5 left-5 font-bold flex items-center">
          Read more <BsBoxArrowUpRight className="icon-bold ml-2" />
        </p>
      </Link>
    </div>
  );
};

export default PostCard;
