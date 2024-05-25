"use client"
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Meteors } from "./meteors";
import Image from "next/image";
import Link from "next/link";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...'; // Truncate text and add ellipsis
  }
  return text;
};
export const BlogCard = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
    <div className="container-lg p-2 ">

    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
        )}
        >
        
      {items.map((item, index) => (
          <Link href={"bloginfo"}
          
          key={index}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
              className="absolute inset-0 h-full w-full   bg-gradient-to-r from-[#000000] via-[#C73659] to-[#A91D3A] block  rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                }}
                />
                )}
          </AnimatePresence>
          <Card>
            <CardIcon>
            <Image width={500} height={500} className="bg-contain rounded-md" src={item.image} alt="image"/>
            </CardIcon>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{truncateText(item.dec, 160)}</CardDescription>
            <Meteors number={10} />
          </Card>
        </Link>
      ))}
    </div>
    </div>

</>
  );
};

export const Card = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn( "rounded-2xl h-full w-full  overflow-hidden   bg-white shadow  relative z-10",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};
export const CardIcon = ({
    className,
    children,
  }) => {
    return (
        <div className={cn(" ", className)}>
          {children}
          </div>
     
    );
  };
export const CardTitle = ({
  className,
  children,
}) => {
  return (
    <h4 className={cn("text-black text-lg font-bold tracking-wide mt-2", className)} 
   
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}) => {
  return (
    <p
      className={cn(
        "mt-1 text-black tracking-wide leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};
