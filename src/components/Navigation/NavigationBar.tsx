import React, { FC } from 'react';
import Link from 'next/link';
import { BsSearch, BsLinkedin, BsGithub } from 'react-icons/bs';

const NavigationBar: FC = () => {
  return (
    <nav className="w-full h-16 bg-white flex justify-between items-center px-5">
      <div className="relative">
        <input
          type="search"
          className="border border-zinc-300 rounded focus:outline-none appearance-none p-1"
        />
        <div className="absolute top-0 right-0 h-full flex items-center px-3 hover:cursor-pointer">
          <BsSearch className="icon" />
        </div>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <Link href="/" className="mr-5">
          Home
        </Link>
        <Link href="/" className="mr-5">
          About
        </Link>
        <Link href="/" className="mr-10">
          Contact
        </Link>
        <div className="flex items-center border border-zinc-300 rounded-xl px-3 py-1">
          <h4 className="mr-3">Socials:</h4>
          <Link href="/">
            <BsLinkedin className="mr-5" size={24} color="blue" />
          </Link>
          <Link href="/">
            <BsGithub size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
