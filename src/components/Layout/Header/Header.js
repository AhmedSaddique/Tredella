import React from 'react'
import Container from '../Container/Container'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import Link from 'next/link';
import { IoMailOutline, IoSearch, IoSettingsOutline } from "react-icons/io5";
import { CiGlobe } from 'react-icons/ci';
import Image from 'next/image';
import logo from "../../../../public/images/logo.webp"
import { IoMdHeartEmpty, IoMdNotificationsOutline } from 'react-icons/io';
import {  TbCategoryMinus } from 'react-icons/tb';
import { PiBag } from 'react-icons/pi';
import { FaRegUser, FaSuitcase } from 'react-icons/fa';
import { RiMenuFold3Fill } from 'react-icons/ri';
import { MdOutlineHome } from 'react-icons/md';
import DrawerMenu from '@/components/ui/DrawerMenu/DrawerMenu';
import SelectList from '@/components/ui/Select/Select';
import Button from '@/components/ui/Button/Button';
import { Popover } from 'antd';
import img from "../../../../public/images/t3.jpg"
import ModalView from '@/components/ui/Modal';

const content = (
  <>
  <Link href={"/"} className='flex items-center gap-2 mt-2 border-b-2 pb-2 hover:text-black'>
      <div className='w-2/12'>
        <Image className='w-16 h-16 rounded-full bg-contain' src={img} alt='image' />
      </div>
      <div className='w-9/12'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

  </Link>
  <Link href={"/"} className='flex items-center gap-2 mt-2 border-b-2 pb-2 hover:text-black'>
      <div className='w-2/12'>
        <Image className='w-16 h-16 rounded-full bg-contain' src={img} alt='image' />
      </div>
      <div className='w-9/12'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

  </Link>

  </>
);

const setting = (
  <div className='flex flex-col space-y-2 text-lg '>
    <ModalView title={"Change Language"} content={<div className='pt-10'>
      <select class="py-3 px-4 pe-9 block w-full border-2  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
      <option selected="">Open this select menu</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    </div>}/>
    <Link className='hover:text-primary' href={"/profile"}>Profile</Link>
    <Link className='hover:text-primary' href={"/about"}>About Us</Link>
    <Link className='hover:text-primary' href={"/help-center"}>Help Center</Link>
    <Link className='hover:text-primary' href={"/"}>Log out</Link>
  </div>
);


const Header = () => {
  return (
    <>
    <div className=' bg-secondary border-b w-full'>
        <Container >
          <div className='flex justify-end flex-wrap lg:flex-nowrap gap-2 p-2 items-center'>
          
            <div className='flex gap-4 items-center mx-auto md:mx-0 ' >
         
                <div className='flex gap-2 items-center text-sm md:text-base lg:text-lg '>
                <CiGlobe size={20} className='text-primary'  />
                <Link className='text-sm md:text-base' href={"/login"}>Login/Register</Link>
                </div>
                <div className='flex items-center gap-1 text-xs md:text-base lg:text-lg  hover:underline'>
                  <FaSuitcase size={20} className='text-primary' />
                  <Link  className='text-sm md:text-base' href={"/"}>Become a Seller</Link>
                  </div>
            </div>
            </div>
        </Container>
    </div>
    <div className='bg-secondary border-b w-full py-3'>
      <Container >
          <div className='flex justify-between flex-wrap lg:flex-nowrap gap-0 md:gap-2 items-center' >
            <Link href={"/"}>
            <Image className='w-24 lg:w-40' src={logo} alt="logo" width={150} height={150} />
            </Link>
              <DrawerMenu
              width={250}
                title={<><div className='p-1 rounded-md block lg:hidden text-white bg-primary'>
              <TbCategoryMinus  size={20} />
              </div></>}
              content={<>
              <ul className='space-y-2'>
                <li><Link className='text-base font-semibold text-black hover:text-black' href={"/"}>Dinnig</Link></li>
                <li><Link className='text-base font-semibold text-black hover:text-black' href={"/"}>Bedrrom</Link></li>
                <li><Link className='text-base font-semibold text-black hover:text-black' href={"/"}>Kitchen</Link></li>
              </ul>
              </>}
              />
              <div className='border w-3/6 lg:w-full max-w-screen-md flex'>
              <SelectList 
                className=' w-40 h-12 borderless-select border-r hidden lg:block'
                defaultValue="All Categories"
                options={[
                  { value: 'Dining', label: 'Dining' },
                  { value: 'Living', label: 'Living' },
                  { value: 'Bedroom', label: 'Bedroom' },
                ]}
                />
                
                <input className='w-full px-4 focus:outline-none active:border-none focus:border-none border-white ' type="text" placeholder='Search Product Here...'/>
                <Button className='rounded-l-md px-2 md:px-4' title={<IoSearch size={25} />}/>
              </div>
               <DrawerMenu
               width={250}
                title={<><div className='p-1 rounded-md block lg:hidden text-white bg-primary'>
                <RiMenuFold3Fill  size={20} />
                </div></>}
              content={<>
              <ul className='space-y-2'>
                <li><Link className='text-base font-semibold text-black hover:text-black' href={"/"}>Retail</Link></li>
                <li><Link className='text-base font-semibold text-black hover:text-black' href={"/"}>Wholesale</Link></li>
                <li><Link className='text-base font-semibold text-black hover:text-black' href={"/"}>Royal View</Link></li>
              </ul>
              </>}
              />
              <div className='hidden lg:flex gap-2 md:gap-4 lg:gap-6 '>
              <Popover content={content} title="" trigger="click" placement="bottom">
              <IoMdNotificationsOutline className='text-primary group-hover:text-dark transition duration-200 ease-in' size={30} />
              </Popover>
                <Link className='relative group ' href={"/wishlist"}>
                  <div className='rounded-full text-white w-6 h-6 bg-dark group-hover:bg-primary absolute bottom-3 left-4 flex justify-center items-center transition duration-200 ease-in'>
                    1
                  </div>
                <IoMdHeartEmpty className='text-primary group-hover:text-dark transition duration-200 ease-in' size={30} />
                </Link>
                <Link className='relative group' href={"/cart"}>
                  <div className='rounded-full text-white w-6 h-6 bg-dark group-hover:bg-primary absolute bottom-3 left-4 flex justify-center items-center transition duration-200 ease-in'>
                    1
                  </div>
                  <PiBag   className='text-primary group-hover:text-dark transition duration-200 ease-in' size={30} />
                </Link>
                <Popover content={setting} title="" trigger="click" placement="bottom">
              <IoSettingsOutline className='text-primary group-hover:text-dark transition duration-200 ease-in' size={30} />
              </Popover>
              </div>
            </div>
      </Container>
    </div>
    <div className='bg-primary py-4 hidden lg:block '>
        <ul className='flex justify-center gap-12 text-white'>
          <li><Link className='hover:underline' href={"/"}>Retail</Link></li>
          <li><Link className='hover:underline' href={"/"}>Wholesale</Link></li>
          <li><Link className='hover:underline' href={"/"}>Royal View</Link></li>
        </ul>
        
      </div>

      <div className='bg-primary p-3 fixed w-full bottom-0 block lg:hidden z-50'>
      <div className='flex justify-evenly gap-1 '>
              <Link className='text-base lg:text-lg ' href={"/"}><MdOutlineHome  size={30}  className= 'text-white' /></Link>

                <Link className='relative group ' href={"/wishlist"}>
                  <div className='rounded-full text-dark w-6 h-6 bg-white  absolute bottom-3 left-4 flex justify-center items-center transition duration-200 ease-in'>
                    1
                  </div>
                <IoMdHeartEmpty className='text-white  transition duration-200 ease-in' size={30} />
                </Link>
                <Popover content={content} title="" trigger="click" placement="top">
                <IoMdNotificationsOutline className='text-white  transition duration-200 ease-in' size={30} />
                </Popover>
                <Link className='relative group' href={"/cart"}>
                  <div className='rounded-full text-dark w-6 h-6 bg-white  absolute bottom-3 left-4 flex justify-center items-center transition duration-200 ease-in'>
                    1
                  </div>
                  <PiBag   className='text-white  transition duration-200 ease-in' size={30} />
                </Link>
                <Popover content={setting} title="" trigger="click" placement="topRight">
                <IoSettingsOutline className='text-white  transition duration-200 ease-in' size={30} />
                </Popover>
              </div>
      </div>
    </>
  )
}

export default Header