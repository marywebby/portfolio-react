import React from 'react';

export const HoveredLink = ({ children, href, ...rest }) => {
  return (
    <a href={href} {...rest} className="text-neutral-700 dark:text-neutral-200 hover:text-black">
      {children}
    </a>
  );
};

