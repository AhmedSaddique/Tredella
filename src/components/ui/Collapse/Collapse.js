"use client"
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';


const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='border-b-2'>
      <button
        className="w-full px-4 py-2 text-left  focus:outline-none transition ease-out duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center uppercase space-y-3">
          <span className='font-medium'>{title}</span>
          <span>{isOpen ? <MdKeyboardArrowUp size={25} /> : <MdKeyboardArrowDown size={25} />}</span>
        </div>
      </button>
        {isOpen && (
        <div className="px-4 py-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;