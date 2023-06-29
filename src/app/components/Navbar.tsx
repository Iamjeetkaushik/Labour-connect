import React from 'react';
import Image from 'next/image';
import navLogo from '../Resources/nav-logo.png';

const Navbar = () => {
  return (
    <div className='container max-w-full bg-white h-24'>
      <div className='flex w-5/6 justify-between items-center'>
        <Image src={navLogo} alt='' />
        <div className='flex'>
          <div className='flex items-center justify-between w-64 text-black text-xl mx-16'>
            <a href=''>About</a>
            <a href=''>Process</a>
            <a href=''>Jobs</a>
          </div>
          <div className='w-1/2 flex justify-between'>
            <button className='h-14 w-40 rounded-full bg-black text-xl'>
              Sign Up
            </button>
            <button className='w-40 rounded-full bg-white text-black border-2 border-black text-xl'>
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
