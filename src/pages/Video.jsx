import React from 'react';

import { AiOutlineSave } from 'react-icons/ai';

import { BiLike, BiDislike } from 'react-icons/bi';
import { IoIosShareAlt } from 'react-icons/io';
const Video = () => {
  return (
    <div className='flex text-white'>
      <div className='w-full p-5 md:flex-[5]   text-white'>
        <div className=''>
          <iframe
            width='560'
            height='315'
            className='w-full h-[320px] sm:h-[380px]  md:h-[520px]'
            src='https://www.youtube.com/embed/6JnGBs88sL0'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </div>

        <h1 className='font-normal text-lg text-white mt-5 mb-2'>
          Nelly Furtado - Say It Right (Official Music Video)
        </h1>
        <div className='flex flex-row justify-between items-center'>
          <p className='text-gray-400 '>759 042 439 . vues16 juin 2009</p>
          <div className='flex space-x-3 '>
            <button className='flex items-center justify-center space-x-1'>
              <BiLike /> <span>2 K</span>
            </button>
            <button className='flex items-center justify-center space-x-1'>
              <BiDislike /> <span>Dislike</span>
            </button>
            <button className='flex items-center justify-center space-x-1'>
              <IoIosShareAlt /> <span>Share</span>
            </button>
            <button className='flex items-center justify-center space-x-1'>
              <AiOutlineSave /> <span>Save</span>
            </button>
          </div>
        </div>
        <hr className='border border-borderColor my-3' />

        <div className='flex justify-between'>
          <div className='flex space-x-4'>
            <div className='w-12'>
              {' '}
              <img
                className='w-12 h-12 rounded-full'
                src='https://yt3.ggpht.com/ytc/AKedOLRWS-Hzc0EeSmtbyYGllfrfS2qAzrmIEUjod1TKVg=s48-c-k-c0x00ffffff-no-rj-mo'
                alt='Nelly Furtado
'
              />
            </div>
            <div className='w-[95%]'>
              <h1 className='text-md text-white font-medium'>Nelly Furtado</h1>
              <p className='text-gray-400'>2 M subscribers</p>
              <p className='text-white w-full  mt-8'>
                REMASTERED IN HD! Music video by Nelly Furtado performing Say It
                Right. (C) 2006 Geffen Records #NellyFurtado #SayItRight
                #Remastered #Pop #OfficialMusicVideo
              </p>{' '}
            </div>
          </div>
          <div>
            <button className='bg-[#f00]  py-2 px-4 text-white font-medium'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className='hidden md:inline md:flex-[2]  text-white'>
        recomendation
      </div>
    </div>
  );
};

export default Video;
