"use client"
import Image from "next/image";
import React from "react";
import { HoverEffect } from "@/components/ui/Aceturnity/card-hover-effect";
import { Services, projects } from "@/components/constant";
import teamhero1 from '../../../public/images/teamhero1.png'
import teamhero2 from '../../../public/images/teamhero2.jpg'
import teamhero3 from '../../../public/images/teamhero3.png'
import aboutm1 from '../../../public/images/aboutm1.jpg'
import teamhero5 from '../../../public/images/teamhero5.jpg'
import teamhero6 from '../../../public/images/teamhero6.png'
import { motion } from "framer-motion";
import Container from "@/components/Layout/Container/Container";


const About = () => {
  return (
    <>
      <div className={` bg-teamCircle bg-no-repeat`}>
      <div className='grid grid-cols-1 sm:grid-cols-2 items-center p-2 gap-10'>
        <div className=' space-y-4 p-2 sm:p-3 md:p-6 lg:p-14'>
          <h1 className="text-lg lg:text-2xl font-semibold">Customers Love Our Creative Team, and So Will You</h1>
          <p className="text-base md:text-lg">Highly recommend Iori Agency! They guide us on marketing initiatives and develop great strategies to increase our return on investment. The agency is excellent at being cooperative and responding quickly.</p>
        </div>
        <div>
        <div className='grid grid-cols-3 gap-5 '>
        <div className='space-y-5'>
          <Image className='rounded-md' src={teamhero1} alt='teamhero1'/>
        </div>
        <div className='space-y-5 '>
          <Image className='rounded-md ' src={teamhero2} alt='teamhero2'/>
          <div className='border-4 border-primary-gray300 h-auto  flex items-center justify-end'>
          <Image className='relative rounded-md bottom-3 left-3' src={teamhero3} alt='teamhero3'/>
          </div>
        </div>
        <div className='space-y-5'>
        <div className='border-4 border-primary-gray300 h-auto  flex items-center justify-end'>
          <Image src={aboutm1} alt='teamhero4' className='relative rounded-md top-3 right-2' />
        </div>
          <Image className='rounded-md' src={teamhero5} alt='aboutm1'/>
          <Image className='rounded-md' src={teamhero6} alt='teamhero6'/>
        </div>
        </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:mt-32">
        <motion.div className="bg-about h-full min-h-[300px] md:min-h-[600px] w-full  bg-cover bg-top relative" initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0, // Slide in to its original position
                transition: {
                  duration: 1 // Animation duration
                }
              }}
              viewport={{ once: false }}>
        </motion.div>
        <motion.div
        className="relative pt-0 sm:pt-[20px] md:pt-[70px] pr-0 md:pr-[50px] pb-[50px] md:pl-8 md:-ml-[70px] "
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1.4 // Animation duration
          }
        }}
        viewport={{ once: false }}
        >
            <div className=" bg-white p-3 rounded-md shadow-md pt-[70px] pl-7 md:pl-[15%] md:pr-[15%] pb-[70px] space-y-3">
            <h1 className="text-xl font-bold">Lorem Ipsum is simply dummy text</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </motion.div>
        </div>

      <Container className=" mt-20">
        <div className="mt-20">
            <div className="">
                <h2 className="text-3xl font-semibold font-mono border-b-4 border-primary  w-60">About Tredella</h2>
        </div>
        <HoverEffect items={Services} />
        </div>


      </Container>
    </>
  );
};

export default About;
