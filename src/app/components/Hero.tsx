import React from 'react';
import Image from 'next/image';
import heroImage from '../Resources/hero-picc.png';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className='container relative max-w-full bg-zinc-950 border-cyan-400 h-auto'>
      <div className='grid-cols-2 w-5/6 relative justify-between items-center border-orange-300'>
        <div className='flex flex-col gap-16 justify-between w-3/5 h-auto  border-red-700 my-40'>
          <p className='text-orange-500 text-2xl'>For Job Seekers</p>
          <div className='flex gap-14 flex-col text-white'>
            <p className='text-7xl font-semibold'>
              We have best solutions for you
            </p>
            <p className='text-xl leading-10'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              libero quaerat, pariatur eum doloribus sequi enim est sed, eveniet
              accusantium hic adipisci repellendus praesentium ipsa possimus
              veniam optio beatae laudantium.
            </p>
            <button className='flex items-center justify-center gap-6 text-xl left-0  w-64 h-14 rounded-full bg-orange-500 text-white'>
              Explore Jobs <BsArrowRight size={32} />
            </button>
          </div>
        </div>
      </div>
      <Image
        className='absolute w-2/5 right-0 bottom-0 '
        src={heroImage}
        alt=''
      />
    </div>
  );
};

export default Hero;
