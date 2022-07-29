import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdOutlineExplore,
  MdLiveTv,
  MdOutlineVideoLibrary,
  MdSubscriptions,
  MdOutlineLibraryMusic,
  MdOutlineSportsBasketball,
  MdOutlineSettingsBrightness,
  MdAccountCircle,
} from 'react-icons/md';

import { FiFlag } from 'react-icons/fi';

import { FaHistory, FaRegNewspaper } from 'react-icons/fa';

import { BiMovie, BiHelpCircle } from 'react-icons/bi';

import { AiFillHome, AiOutlineSetting } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';

import youtubeLogo from '../imgs/logo.png';
const LeftSideMenu = () => {
  return (
    <div className=' transition-all duration-150 sticky left-0 top-0  flex-[1] lg:flex-[1.2] h-screen max-h-screen overflow-y-visible text-white bg-sidebarmenu'>
      <div className='overflow-y-visible'>
        <Link className='decoration-transparent' to={'/'}>
          <div className='flex space-x-2  p-3 pb-0 px-7 cursor-pointer items-center justify-start'>
            <img src={youtubeLogo} className='h-7' alt='Youtube logo' />{' '}
            <h1 className='font-bold text-lg'>Youtube</h1>
          </div>
        </Link>
        <div className='py-[8px] px-[26px]  flex flex-col'>
          <Link className='decoration-transparent' to={'/'}>
            {' '}
            <div className='flex cursor-pointer items-center space-x-4 rounded-sm hover:bg-gray-800 px-1 py-2'>
              <AiFillHome /> <span>Home</span>
            </div>
          </Link>
          <div className='flex cursor-pointer items-center space-x-4 rounded-sm hover:bg-gray-800 px-1 py-2'>
            <MdOutlineExplore /> <span>Explore</span>
          </div>
          <div className='flex cursor-pointer items-center space-x-4 rounded-sm hover:bg-gray-800 px-1 py-2'>
            <MdSubscriptions /> <span>Subscriptions</span>
          </div>
          <hr className='mx-4 my-1 border-[0.5px] border-solid border-borderColor ' />
          <div className='flex cursor-pointer items-center space-x-4 rounded-sm hover:bg-gray-800 px-1 py-2'>
            <MdOutlineVideoLibrary /> <span>Library</span>
          </div>

          <div className='flex cursor-pointer items-center space-x-4 rounded-sm hover:bg-gray-800 px-1 py-2'>
            <FaHistory /> <span>History</span>
          </div>
          <hr className='mx-4 my-1 border-[0.5px] border-solid border-borderColor ' />
          <div className='space-y-1 my-1'>
            <p className='text-sm'>
              Sign in to like videos, comment and subscribe.
            </p>
            <button className='bg-transparent flex items-center justify-center space-x-2 border-solid border rounded-sm text-buttonborder  border-buttonborder text-sm font-medium  px-2 py-1'>
              <MdAccountCircle /> <span>Sign in</span>
            </button>
          </div>

          <div className='flex cursor-pointer items-center space-x-4 rounded-sm hover:bg-gray-800 px-1 py-2'>
            <MdOutlineLibraryMusic /> <span>Music</span>
          </div>
          <div className='flex cursor-pointer items-center space-x-4 rounded-sm hover:bg-gray-800 px-1 py-2'>
            <MdOutlineSportsBasketball /> <span>Sports</span>
          </div>
          <div className='flex cursor-pointer items-center space-x-4 rounded-sm hover:bg-gray-800 px-1 py-2'>
            <IoGameControllerOutline /> <span>Gaming</span>
          </div>
          <div className='flex cursor-pointer items-center space-x-4 rounded-sm hover:bg-gray-800 px-1 py-2'>
            <BiMovie /> <span>Movies</span>
          </div>
          <div className='flex cursor-pointer items-center space-x-4 rounded-sm hover:bg-gray-800 px-1 py-2'>
            <FaRegNewspaper /> <span>News</span>
          </div>
          <div className='flex cursor-pointer items-center space-x-4 rounded-sm hover:bg-gray-800 px-1 py-2'>
            <MdLiveTv /> <span>Live</span>
          </div>
          <hr className='mx-4 my-1 border-[0.5px] border-solid border-borderColor ' />
          <div className='flex cursor-pointer items-center space-x-4 rounded-sm hover:bg-gray-800 px-1 py-2'>
            <AiOutlineSetting /> <span>Settings</span>
          </div>
          <div className='flex cursor-pointer items-center space-x-4  rounded-sm hover:bg-gray-800 px-1 py-2'>
            <FiFlag /> <span>Reports</span>
          </div>
          {/* <div className='flex cursor-pointer items-center space-x-4 rounded-sm hover:bg-gray-800 px-1 py-2'>
            <BiHelpCircle size='24px' /> <span>Help</span>
          </div>

          <div className='flex cursor-pointer items-center rounded-sm hover:bg-gray-800 px-1 py-2 space-x-4'>
            <MdOutlineSettingsBrightness size='24px' /> <span>Light Mode</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LeftSideMenu;
