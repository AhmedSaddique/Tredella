"use client";
import Container from "@/components/Layout/Container/Container";
import Link from "next/link";
import React, { useState } from "react";
import { PiDotsNineBold } from "react-icons/pi";

const Info = ({ items }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
<Container className="mt-10">
  <div className="flex flex-wrap md:flex-nowrap gap-4">
    <div className="w-full mt-4 block md:hidden">
      <button
        className="p-2 float-right bg-black text-white rounded-md"
        onClick={toggleVisibility}
      >
        <PiDotsNineBold size={20} />
      </button>
    </div>
    <div className={`w-full md:w-1/3 mt-5 ${isVisible ? '' : 'hidden md:block'}`}>
      <div className="p-2 rounded-md bg-gray-300 shadow-md h-auto sticky top-5">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index}>
              <Link className="underline hover:no-underline" href={`#${item.title}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="w-full md:w-2/3 space-y-3 mt-5">
      {items.map((item, index) => (
        <div key={index} id={item.title} className="space-y-2">
          <h1 className="font-semibold underline text-sm md:text-base">{item.title}</h1>
          <p className="text-sm md:text-base">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</Container>

  );
};

export default Info;
