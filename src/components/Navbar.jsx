import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { MdAccountCircle } from 'react-icons/md';
const Navbar = () => {
  return (
    <div className='sticky top-0 p-3 bg-sidebarmenu'>
      <div className='flex h-full items-center justify-between'>
        <div className='border h-[30px] rounded-sm border-solid border-[#ccc] w-[50%] md:w-[40%] lg:w-[30%] py-2 ml-5 flex items-center text-white'>
          <input
            className='w-full m-2 ml-1 bg-transparent outline-none '
            type='text'
            placeholder='Search'
          />
          <AiOutlineSearch
            className=' m-2 cursor-pointer transition-all duration-150 active:scale-110'
            size={28}
          />{' '}
        </div>

        <button className='bg-transparent flex items-center justify-center space-x-2 border-solid border rounded-sm text-buttonborder  border-buttonborder text-sm font-medium  px-2 py-1'>
          <MdAccountCircle /> <span>Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
