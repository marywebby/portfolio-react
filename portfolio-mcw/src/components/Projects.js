import React from 'react';

const Projects = () => {
  return (
    <section id='projects' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-gray-400 text-xl' aria-label='projects'>
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Projects</h2>
      </div>
      <div>
        <ul className='group/list'>
          <li className='mb-12'>
            <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
              <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'>
              </div>
              <div className='z-10 sm:order-2 sm:col-span-6'>
                <h3>
                  <a className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base' href='https://github.com/marywebby/lineup' target='_blank' rel='noreferrer noopener' aria-aria-label='Implement your own skincare products (opens in a new tab)'>
                    <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                    <span>
                      LineUp - Routine Generator
                    </span>
                  </a>
                </h3>
                <p className='mt-2 text-sm leading-normal'>
                  
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;