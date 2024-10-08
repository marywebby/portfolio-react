// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
          Mary Webby
        </h1>
        <h2 className='mt-3 text-lg font-bold uppercase tracking-tight text-white-75 sm:text-xl'>
          Software Developer
        </h2>
        <p className='mt-4 max-w-sm leading-normal text-gray-400'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <nav className='nav hidden lg:block' aria-label='In-page jump links'>
        </nav>
      </div>
    </header>
  );
};

export default Header;
