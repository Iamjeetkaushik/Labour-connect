import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import card1 from '../Resources/card1.png';
import card2 from '../Resources/card2.png';
import card3 from '../Resources/card3.png';

const Jobs = () => {
  return (
    <div className='container text-black mb-40 max-w-full '>
      <div className='flex flex-col w-5/6 gap-30'>
        <div className='flex flex-col mb-40 gap-4'>
          <p className='text-orange-500 text-xl font-bold'>Job Openings</p>
          <div className='flex items-center justify-between'>
            <p className='text-4xl font-semibold'>
              20,000+ job opening waiting for you
            </p>
            <div className='flex gap-8'>
              <BsArrowLeft size={50} />
              <BsArrowRight size={50} />
            </div>
          </div>
        </div>
        <div className='flex gap-44 items-center'>
          <div className='relative mt-96 flex items-center'>
            <div className='flex flex-col p-4'>
              <p className='text-2xl text-white font-bold'>Truck Drivers</p>
              <p className='text-lg text-zinc-400'>300K+ Job Openings</p>
            </div>
            <button className='text-black text-lg font-semibold flex items-center justify-center gap-4 mr-4 bg-white w-48 p-2 h-16 rounded-full'>
              Apply Now <BsArrowRight size={30} />
            </button>
            <Image
              className='absolute left-0 bottom-0 -z-10 max-w-full'
              src={card1}
            />
          </div>
          <div className='relative mt-96 flex items-center'>
            <div className='flex flex-col p-4'>
              <p className='text-2xl text-white font-bold'>Truck Drivers</p>
              <p className='text-lg text-zinc-400'>300K+ Job Openings</p>
            </div>
            <button className='text-black text-lg font-semibold flex items-center justify-center gap-4 mr-4 bg-white w-48 p-2 h-16 rounded-full'>
              Apply Now <BsArrowRight size={30} />
            </button>
            <Image
              className='absolute left-0 bottom-0 -z-10 max-w-full'
              src={card1}
            />
          </div>
          <div className='relative mt-96 flex items-center'>
            <div className='flex flex-col p-4'>
              <p className='text-2xl text-white font-bold'>Truck Drivers</p>
              <p className='text-lg text-zinc-400'>300K+ Job Openings</p>
            </div>
            <button className='text-black text-lg font-semibold flex items-center justify-center gap-4 mr-4 bg-white w-48 p-2 h-16 rounded-full'>
              Apply Now <BsArrowRight size={30} />
            </button>
            <Image
              className='absolute left-0 bottom-0 -z-10 max-w-full'
              src={card1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
