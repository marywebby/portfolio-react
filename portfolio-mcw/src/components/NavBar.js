// NavBar.js
import React from "react";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const NavBar = () => {
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max list-none pl-0">
        <li>
          <a
            className="group flex items-center py-3 active"
            onClick={() => scrollToSection('about')}
            aria-label="#about"
            href="#about" // keep the href for accessibility
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
          </a>
        </li>
        <li>
          <a
            className="group flex items-center py-3 active"
            onClick={() => scrollToSection('experience')}
            aria-label="#experience"
            href="#experience" // keep the href for accessibility
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
          </a>
        </li>
        <li>
          <a
            className="group flex items-center py-3 active"
            onClick={() => scrollToSection('projects')}
            aria-label="#projects"
            href="#projects" // keep the href for accessibility
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

