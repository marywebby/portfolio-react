import React from 'react';

const Body = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <h1 className='text-4xl font-bold tracking-tight text-white-75 sm:text-5xl'>
            Mary Webby
          </h1>
          <h2 className='mt-3 text-lg font-bold uppercase tracking-tight text-white-75 sm:text-xl'>
            Software Developer
          </h2>
          <p className='mt-4 max-w-xs leading-normal text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </header>
        <div className='pt-24 lg:w-1/2 lg:py-24'>
          <div className="text-sm font-bold uppercase tracking-widest text-white-75 lg:sr-only">
            about me
          </div>
          <div id='about-me'>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu
            </p>
            <p className='mb-4'>

            </p>
            <p className='mb-4'>

            </p>
          </div>
          <div className="text-sm font-bold uppercase tracking-widest text-white-75 lg:sr-only">
            work history
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
