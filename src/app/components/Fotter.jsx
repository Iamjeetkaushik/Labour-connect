import React from 'react';

const Fotter = () => {
  return (
    <div className='container max-w-full bg-zinc-200 p-10'>
      <div className='grid grid-cols-4 w-5/6 mt-20 text-black'>
        <div className='flex flex-col gap-1'>
          <p className='text-xl font-bold my-4'>Features</p>
          <p className='text-xl font-normal'>Facebook Ads</p>
          <p className='text-xl font-normal'>Landing Page Tool</p>
          <p className='text-xl font-normal'>Google Ads</p>
          <p className='text-xl font-normal'>Cover Letter</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-xl font-bold my-4'>Resources</p>
          <p className='text-xl font-normal'>Facebook Ads</p>
          <p className='text-xl font-normal'>Landing Page Tool</p>
          <p className='text-xl font-normal'>Cover Letter</p>
          <p className='text-xl font-normal'>Landing Page Tool</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-xl font-bold my-4'>Policies</p>
          <p className='text-xl font-normal'>Facebook Ads</p>
          <p className='text-xl font-normal'>Landing Page Tool</p>
          <p className='text-xl font-normal'>Google Ads</p>
        </div>
        <div>
          <p className='text-xl font-bold my-4'>Email</p>
          <div className='flex gap-0'>
            <input
              className='rounded-l-md pl-4'
              type='text'
              placeholder='Enter your Email'
            />
            <button className='bg-orange-500 text-white p-2 w-32 rounded-r-md'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
