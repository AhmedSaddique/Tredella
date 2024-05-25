import React, { ReactNode } from 'react';



const Container = ({ children, className }) => {
  return (
    <div className={`max-w-screen-xl mx-auto px-2 sm:px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;