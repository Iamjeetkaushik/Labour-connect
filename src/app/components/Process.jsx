import React from 'react';
import Image from 'next/image';
import WorksImage from '../Resources/howitworks.png';

const Process = () => {
  return (
    <div className='relative max-w-full container text-black my-40'>
      <div className='relative w-5/6 flex flex-col'>
        <div className='flex flex-col items-center gap-8'>
          <p className='text-orange-500 text-xl font-bold'>How it works</p>
          <p className='text-6xl font-semibold'>Get Hired in 3 simple steps</p>
        </div>
        <div className='grid grid-flow-row grid-cols-2 items-center justify-between w-full'>
          <div className='flex flex-col gap-20 my-60'>
            <div className='flex gap-4 flex-col w-full p-6 rounded-xl shadow-lg'>
              <p className='text-xl font-semibold'>
                Step 1 : Create Your Profile
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Suscipit adipiscing bibendum est ultricies integer quis. A lacus
                vestibulum sed.
              </p>
            </div>
            <div className='flex gap-4 flex-col w-full p-6 rounded-xl'>
              <p className='text-xl font-semibold'>
                Step 2 : Create Your Profile
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Suscipit adipiscing bibendum est ultricies integer quis. A lacus
                vestibulum sed.
              </p>
            </div>
            <div className='flex gap-4 flex-col w-full p-6 rounded-xl'>
              <p className='text-xl font-semibold'>
                Step 3 : Create Your Profile
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Suscipit adipiscing bibendum est ultricies integer quis. A lacus
                vestibulum sed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image className='absolute bottom-60 right-0' src={WorksImage} />
    </div>
  );
};

export default Process;
