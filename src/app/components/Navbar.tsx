import React from 'react';

const Navbar = () => {
  return (
    <div className='container max-w-full bg-white h-24'>
      <div className='flex w-2/3 justify-between items-center'>
        <img src='../Resources/nav-logo.png' alt='' />
        <div className='flex items-center justify-between w-64 text-black text-xl'>
          <a href=''>About</a>
          <a href=''>Features</a>
          <a href=''>Pricing</a>
        </div>
        <div className='w-96 flex justify-between'>
          <button className='h-14 w-40 rounded-full bg-black text-xl'>
            Sign Up
          </button>
          <button className='w-40 rounded-full bg-white text-black border-2 border-black text-xl'>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
