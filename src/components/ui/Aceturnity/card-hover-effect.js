"use client"
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Meteors } from "./meteors";

export const HoverEffect = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
    <div className="container p-2 ">

    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
        )}
        >
        
      {items.map((item, index) => (
          <div
          
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
            <CardIcon>{item.icon}</CardIcon>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.dec}</CardDescription>
            <Meteors number={10} />
          </Card>
        </div>
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
    <motion.div
      className={cn( "rounded-2xl h-full w-full p-4 overflow-hidden border-t-primary border-t-4  bg-white  shadow group-hover:border-primary relative z-10",
        className
      )}
      initial={{
        overflow: "hidden",
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
      viewport={{ once: false }}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </motion.div>
  );
};
export const CardIcon = ({
    className,
    children,
  }) => {
    return (
        <div className={cn("w-16 h-16 rounded-full flex justify-center items-center transition duration-200 border-primary group-hover:bg-primary border-2", className)}>
          {children}
          </div>
     
    );
  };
export const CardTitle = ({
  className,
  children,
}) => {
  return (
    <motion.h4 className={cn("text-black font-bold tracking-wide mt-4", className)} 
    initial={{
      overflow: "hidden",
      opacity: 0,
      y: 100,
    }}
    whileInView={{
      opacity: 1,
      y: 0, // Slide in to its original position
      transition: {
        duration: 1.3 // Animation duration
      }
    }}
    viewport={{ once: false }}
    >
      {children}
    </motion.h4>
  );
};
export const CardDescription = ({
  className,
  children,
}) => {
  return (
    <motion.p
      className={cn(
        "mt-4 text-black tracking-wide leading-relaxed text-sm",
        className
      )}
      initial={{
        overflow: "hidden",
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0, // Slide in to its original position
        transition: {
          duration: 1.5 // Animation duration
        }
      }}
      viewport={{ once: false }}
    >
      {children}
    </motion.p>
  );
};
