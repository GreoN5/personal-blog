import React from 'react';
import Link from 'next/link';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="container mx-auto w-3/4 pt-10">
      <div className="border border-zinc-300 rounded" />
      <div className="flex justify-between items-center py-7">
        <div>
          <p className="text-slate-500">© 2023 Georgi Dimitrov</p>
        </div>
        <div className="flex items-center">
          <Link href="/">
            <BsLinkedin className="mr-5 rounded" size={24} color="blue" />
          </Link>
          <Link href="/">
            <BsGithub className="mr-5" size={24} color="black" />
          </Link>
          <Link href="/">
            <BsInstagram size={24} color="purple" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
