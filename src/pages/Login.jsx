import React from 'react';

const Login = () => {
  return (
    <div className='p-6 h-[calc(100vh-56px)]  text-white  flex items-center justify-center'>
      <div className='flex text-center flex-col space-y-4  items-center px-20 py-6 bg-sidebarmenu border border-gray-400 rounded-md'>
        <label className='text-2xl' htmlFor='mail'>
          Sign In
        </label>
        <p className='font-light text-xl'>to continue to Youtube</p>
        <input
          id='mail'
          className='border rounded p-3 bg-transparent w-full border-gray-600 '
          placeholder='Your Email'
          type='email'
        />
        <input
          placeholder='Your Password'
          className='border rounded p-3 bg-transparent w-full border-gray-600 '
          type='password'
        />
        <button className='rounded border-none px-4 py-2 font-medium bg-gray-700'>
          Sign in
        </button>
        <p className='text-2xl'>Or</p>
        <input
          className='border rounded p-3 bg-transparent w-full border-gray-600 '
          placeholder='username'
        />
        <input
          className='border rounded p-3 bg-transparent w-full border-gray-600 '
          type='email'
          placeholder='email'
        />
        <input
          className='border rounded p-3 bg-transparent w-full border-gray-600 '
          type='password'
          placeholder='password'
        />
        <button className='rounded border-none px-4 py-2 font-medium bg-gray-700'>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
