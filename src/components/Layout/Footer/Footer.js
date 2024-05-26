import React from 'react'
import logo from "../../../../public/images/logo.webp"
import visa from "../../../../public/images/visa.svg"
import master from "../../../../public/images/master.svg"
import apple from "../../../../public/images/apple.png"
import gpay from "../../../../public/images/gpay.svg"
import getgoogle from "../../../../public/images/getgoggle.png"
import getapple from "../../../../public/images/getapple.png"
import Image from 'next/image'
import Link from 'next/link'
import { FaSuitcase } from 'react-icons/fa'
import { LuBadgeHelp } from "react-icons/lu";
import Container from '../Container/Container'


const Footers = () => {
  return (
    <Container className={" mt-10 md:mt-20 lg:mt-32 border-t-2 mb-14 md:mb-0"}>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center'>
      <div className='w-full mt-5 space-y-3'>
            <Image width={150} height={150} src={logo} alt={"Logo"} />
            <h3 className=''>Tredella offers fashion and essentials tailored specifically for your lifestyle - an online marketplace providing convenient shopping.</h3>
            <div className='space-y-3 mt-5'>
            <h1 className='font-bold'>Accepted Payments</h1> 
            <div className='flex flex-wrap md:flex-nowrap gap-2'>
                <Image width={60} height={60} className='border rounded-md px-2' src={visa} alt='card'/>
                <Image width={60} height={60} className='border rounded-md px-2' src={master} alt='card'/>
                <Image width={60} height={60} className='border rounded-md px-2' src={apple} alt='card'/>
            </div>
            </div>
            </div>
            <div className='w-full mt-5 space-y-3  '>
                <h4 className='font-bold mb-4'>Department</h4>
                <ul>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/"}>Fashion</Link></li>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/"}>Education Product</Link></li>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/"}>Frozen Food</Link></li>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/"}>Beverages</Link></li>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/"}>Books</Link></li>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/"}>Fashion</Link></li>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/"}>Education Product</Link></li>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/"}>Frozen Food</Link></li>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/"}>Beverages</Link></li>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/"}>Books</Link></li>
                </ul>
            </div>
            <div className='w-full mt-5 space-y-3  '>
                <h4 className='font-bold mb-4'>About Us</h4>
                <ul>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/about"}>About Tredella</Link></li>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/career"}>Careers</Link></li>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/blog"}>News & Blog</Link></li>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/idea-guides"}>Ideas & Guides</Link></li>
                </ul>
            </div>
            <div className='w-full mt-5 space-y-3  '>
                <h4 className='font-bold mb-4'>Help</h4>
                <ul>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/"}>Tredella Help</Link></li>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/return-refund"}>Returns</Link></li>
                <li><Link className='hover:px-2 hover:underline hover:font-medium transition duration-300' href={"/security"}>Securities</Link></li>
                </ul>
            </div>
      </div>
    <div className='border-t-2 py-4 mt-5 flex flex-wrap md:flex-nowrap'>
            <div className='w-full md:w-2/6 mt-3'>
                <div className='flex flex-wrap gap-4'>
                    <Link className='flex items-center gap-2 font-bold  underline hover:no-underline'  href={"/"}> <FaSuitcase size={25} /> Become Seller</Link>
                    <Link className='flex items-center gap-2 font-bold  underline hover:no-underline'  href={"/help-center"}> <LuBadgeHelp size={25} /> Help Center</Link>
                </div>
            </div>
            <div className='w-full md:w-2/6 mt-3 mb-3'>
                <div className='flex text-center gap-4'>
                    <Link className='flex items-center gap-2 font-bold   hover:underline'  href={"/terms-condition"}> Terms of Service</Link>
                    <Link className='flex items-center gap-2 font-bold  hover:underline'  href={"/privacy-policy"}> Privacy & Policy</Link>
                </div>
            </div>
            <div className='w-full md:w-2/6 '>
               <div className='flex justify-center items-center md:flex-nowrap'>
               <Image width={150} height={150} src={getgoogle} alt='google'/>
               <Image width={150} height={150} src={getapple} alt='google'/>
               </div>
            </div>
    </div>
    </Container>
    
  )
}

export default Footers