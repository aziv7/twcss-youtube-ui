import React from 'react';
import { Link } from 'react-router-dom';
const Card = () => {
  return (
    <div className='flex flex-col  lg:w-[200px] mx-2   2xl:w-[317px]  md:w-[260px] xxl:w-[300px] cursor-pointer mb-11'>
      <Link className='decoration-transparent' to={'/video/id'}>
        {' '}
        <img
          src='https://www.animaker.com/blog/wp-content/uploads/2018/09/Picmaker-Custom-Thumbnail-banner-image.jpg'
          className='w-full bg-[#999] h-[202px] object-fill'
          alt=''
        />{' '}
      </Link>
      <div className='flex flex-row mt-4 space-x-6'>
        <img
          src='https://yt3.ggpht.com/zAvaS9rGqFLhEhp7lEYCAInxPHJSXQwmfFG6d3IC-ylF0wpyL5VbAOiZD8xrAjPVbMMsbCQU=s88-c-k-c0x00ffffff-no-rj'
          className='w-9 h-9 rounded-full bg-[#999]'
          alt=''
        />

        <div className='flex flex-col'>
          <Link className='decoration-transparent' to={'/video/id'}>
            <h1 className='text-white font-medium text-base'>Video Title</h1>
            <h2 className='text-gray-300 hover:text-gray-400'>
              Here we go again
            </h2>
          </Link>
          <p className='text-gray-300 text-sm'>60 Views . 1 day ago</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
