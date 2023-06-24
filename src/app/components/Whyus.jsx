import React from 'react';

const Whyus = () => {
  return (
    <div className='max-w-full container text-black my-40'>
      <div className='container gap-10 flex-col w-2/3'>
        <p className='text-orange-500 text-xl font-bold'>Why choose us</p>
        <p className='text-6xl font-semibold'>
          We will help you get your dream Job
        </p>
        <div className='flex md:flex-row flex-col justify-between my-10 gap-10'>
          <card className='flex flex-col gap-6 m:w-1/3 drop-shadow-lg bg-gray-200 rounded-xl p-8'>
            <p className='text-xl font-semibold'>Excellent Services</p>
            <p>
              Lorem ipsum dolor sit amet. 33 pariatur asperiores cum aliquam
              quia rem recusandae esse. Sit adipisci quaerat sed exercitationem
              nisi rem voluptatem quas qui fugiat maiores ut itaque possimus sit
              officia assumenda sed magnam illo. Qui rerum nisi et pariatur
              omnis qui quia sequi ea voluptatem debitis qui delectus laboriosam
              et dolores suscipit et nulla veritatis. Id saepe pariaturs.
            </p>
          </card>
          <card className='flex flex-col gap-6 m:w-1/3 drop-shadow-xl border-2 border-gray-400 rounded-xl p-8'>
            <p className='text-xl font-semibold'>Excellent Services</p>
            <p>
              Lorem ipsum dolor sit amet. 33 pariatur asperiores cum aliquam
              quia rem recusandae esse. Sit adipisci quaerat sed exercitationem
              nisi rem voluptatem quas qui fugiat maiores ut itaque possimus sit
              officia assumenda sed magnam illo. Qui rerum nisi et pariatur
              omnis qui quia sequi ea voluptatem debitis qui delectus laboriosam
              et dolores suscipit et nulla veritatis. Id saepe pariaturs.
            </p>
          </card>
          <card className='flex flex-col gap-6 m:w-1/3 drop-shadow-lg bg-gray-200 rounded-xl p-8'>
            <p className='text-xl font-semibold'>Excellent Services</p>
            <p>
              Lorem ipsum dolor sit amet. 33 pariatur asperiores cum aliquam
              quia rem recusandae esse. Sit adipisci quaerat sed exercitationem
              nisi rem voluptatem quas qui fugiat maiores ut itaque possimus sit
              officia assumenda sed magnam illo. Qui rerum nisi et pariatur
              omnis qui quia sequi ea voluptatem debitis qui delectus laboriosam
              et dolores suscipit et nulla veritatis. Id saepe pariaturs.
            </p>
          </card>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
