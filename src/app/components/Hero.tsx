import React from 'react';

const Hero = () => {
  return (
    <div className='container bg-black border-2 border-cyan-400 max-w-full h-screen'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col w-96 h-2/3'>
          <p className='text-orange-500'>For Job Seekers</p>
          <div className='flex flex-col text-white'>
            <p className='text-4xl'>We have best solutions for you</p>
            <p className='text-xl'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              libero quaerat, pariatur eum doloribus sequi enim est sed, eveniet
              accusantium hic adipisci repellendus praesentium ipsa possimus
              veniam optio beatae laudantium.
            </p>
          </div>
        </div>
        <img src='../Resources/hero-pic.png' alt='' />
      </div>
    </div>
  );
};

export default Hero;
