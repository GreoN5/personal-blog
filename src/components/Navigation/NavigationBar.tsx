import React, { JSX } from 'react';
import { BsSearch } from 'react-icons/bs';

const NavigationBar = (): JSX.Element => {
  return (
    <div className="w-full h-16 bg-white flex items-center px-5">
      <div className="relative">
        <input
          type="search"
          className="border border-zinc-300 rounded focus:outline-none appearance-none p-1"
        />
        <div className="absolute top-0 right-0 h-full flex items-center px-3 hover:cursor-pointer">
          <BsSearch className="icon" />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
