'use client';

import React, { FC, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import SearchInput from './SearchInput';
import Links from './Links';

const NavigationBar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="w-full h-auto md:bg-white flex flex-col sm:flex-row justify-between items-center md:px-5 md:py-5 mb-5 md:mb-7 lg:mb-10 rounded-md">
      <div className="flex items-center">
        <div className="block absolute left-0 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <GiHamburgerMenu size={24} className={`fill-current ${isOpen ? 'hidden' : 'block'}`} />
            <MdClose size={24} className={`fill-current ${isOpen ? 'block' : 'hidden'}`} />
          </button>
        </div>
        <SearchInput />
      </div>
      <div
        className={`sm:w-auto md:w-full block flex-grow md:flex flex-1 md:justify-end bg-white ${
          isOpen
            ? 'absolute w-1/2 rounded-lg shadow-md shadow-stone-400 left-0 flex items-center flex-col mt-12 ml-4'
            : 'hidden'
        }`}
      >
        <Links />
      </div>
    </nav>
  );
};

export default NavigationBar;
