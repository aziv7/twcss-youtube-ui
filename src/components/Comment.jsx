import React from 'react';

const Comment = () => {
  return (
    <div className='flex flex-col py-3'>
      <div className='flex space-x-4'>
        {' '}
        <img
          className='w-12 h-12 rounded-full'
          src='https://yt3.ggpht.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s88-c-k-c0x00ffffff-no-rj'
          alt=''
        />
        <div className='flex flex-col space-y-4'>
          <h3 className='font-medium text-base space-x-3 text-white'>
            <span>Jack leem</span>
            <span className='text-gray-500 text-sm font-normal'>
              2 days ago
            </span>
          </h3>

          <p className='text-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            ducimus corporis tenetur amet unde eius ullam! Sit architecto aut
            quis, aliquam blanditiis optio? Incidunt voluptas natus soluta nisi
            quae accusamus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
