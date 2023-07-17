import React, { FC } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchInput: FC = () => {
  return (
    <div className="relative">
      <input
        type="search"
        className="w-full h-full border border-zinc-300 rounded focus:outline-none appearance-none p-1"
      />
      <div className="absolute top-0 right-0 h-full flex items-center px-3 hover:cursor-pointer">
        <BsSearch className="icon" />
      </div>
    </div>
  );
};

export default SearchInput;
