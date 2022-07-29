import React from 'react';
import Comment from './Comment';

const Comments = () => {
  return (
    <div>
      <div className='flex flex-row items-center space-x-3'>
        <img
          className='w-12 h-12 rounded-full'
          src='https://yt3.ggpht.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s88-c-k-c0x00ffffff-no-rj'
          alt=''
        />
        <input
          className='text-white w-full p-3 border-b border-solid border-gray-500 outline-none bg-transparent'
          type='text'
          placeholder='Add a comment'
        />
      </div>
      <div className='space-y-7 mt-5'>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Comments;
