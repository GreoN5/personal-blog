import React, { FC } from 'react';
import Link from 'next/link';

const Links: FC = () => {
  return (
    <>
      <Link href="/" className="p-5 md:mr-5 md:p-0">
        Home
      </Link>
      <Link href="/posts" className="p-5 md:mr-5 md:p-0">
        Posts
      </Link>
      <Link href="/about" className="p-5 md:mr-5 md:p-0">
        About
      </Link>
      <Link href="/contact" className="p-5 md:p-0">
        Contact
      </Link>
    </>
  );
};

export default Links;