import React from 'react';

const Button = ({ title, className, onClick }) => {
  return (
    <button className={`bg-primary text-white p-2 ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
