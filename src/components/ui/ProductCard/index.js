"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { GiHearts } from "react-icons/gi";
export function ProductCard({ totalStars = 5,productdetail }) {
  const [rating, setRating] = useState(totalStars);

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 5);
  };
   // Check if productdetail exists and has at least one item
   if (!productdetail || productdetail.length === 0) {
    return null; // Return null if productdetail is not provided or empty
  }
  return (
    <>
    {productdetail.map((array, index) => (
        <CardContainer  
        containerClassName={"py-2"} className="inter-var"  key={index}>
      <CardBody className="bg-gray-50 relative group/card   border-black/[0.1] w-36 h-auto md:w-full md:h-full rounded-xl px-1 md:px-6 py-1 md:py-3 border  ">
        <CardItem translateZ="100" className="w-full ">
            <Link href={"/detail"}>
             <div className="relative">
            <Image
              src={array.image}
              height="1000"
              width="1000"
              className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          
          </div>
          <div className="px-2">
            <h1 className="text-sm md:text-lg font-medium md:font-semibold">{array.title}</h1>
            <div className="flex items-center">
              {[...Array(totalStars)].map((_, index) => (
                  <span
                  key={index}
                  className={
                    index < rating
                    ? "star filled md:text-lg text-yellow-500"
                    : "star"
                }
                onClick={() => handleStarClick(index)}
                >
                  &#9733;
                </span>
              ))}
              <h1 className="pt-1 px-2">
                (<span>{array.review}</span>)
              </h1>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-2 ">
              <h1 className="text-[13px] md:text-lg font-medium">
                AED <span>{array.price}</span>{" "}
              </h1>
              {array.oldPrice && ( 
                  <h1 className="text-[13px] md:text-lg font-medium  line-through">
                AED <span>{array.oldPrice}</span>
              </h1>
               )}
            </div>
          </div>
            </Link>
         
        </CardItem>
      </CardBody>
    </CardContainer>
        ))}
        </>
  );
}
