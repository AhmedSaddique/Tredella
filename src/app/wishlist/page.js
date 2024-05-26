import Container from '@/components/Layout/Container/Container'
import Link from 'next/link'
import React from 'react'
import t1 from "../../../public/images/t1.jpg";
import Image from 'next/image';
import { MdDeleteOutline } from 'react-icons/md';
import Button from '@/components/ui/Button/Button';


const Wishlist = () => {
  return (
    <>
          <Container className=' mt-10'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-lg'>Your Wishlist</h1>
                <Link className='underline' href={"/products"}>Continue shopping</Link>
            </div>

            <div className='p-2 rounded-md mt-5 bg-white shadow block md:hidden'>
                    <div className='flex flex-wrap pt-2 mb-4 bg-white shadow p-2'>
                        <div className='flex gap-3'>
                            <Image width={100} height={100} className='rounded-md h-24' src={t1} alt='test' />
                            <div className='space-y-2'>
                                <h6 className='text-sm font-medium'>ARTIST TRAVEL BOTTLE (OUTDOORS)</h6>
                                <h2 className='text-sm font-medium'>Dhs. <span>20</span>.00 AED</h2>
                                <h2 className='text-sm font-medium'>Color <span>DEEP PINK</span></h2>
                                <div className='flex items-center gap-4'>

                                <div className='flex gap-2 items-center justify-center bg-white shadow rounded-full w-10 h-10'>
                                    <MdDeleteOutline className='cursor-pointer' size={20} />
                                </div>
                                    <Button className={"rounded-md"} title={"Add To Cart"}/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className=" flex-col mt-10 md:mt-20">
                <div className="-m-1.5  hidden md:block">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-[12px] font-normal text-gray-500 uppercase"></th>
                                        <th scope="col" className="px-6 py-3 text-start text-[12px] font-normal text-gray-500 uppercase">PRODUCT</th>
                                        <th scope="col" className="px-6 py-3 text-start text-[12px] font-normal text-gray-500 uppercase">QUANTITY</th>
                                        <th scope="col" className="px-6 py-3 text-start text-[12px] font-normal text-gray-500 uppercase"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    
                                        <tr>
                                        <td className="">
                                                <div className='flex justify-center items-center bg-white shadow rounded-full w-10 h-10'>
                                                    <MdDeleteOutline className='cursor-pointer' size={20} />
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <div className='flex items-center gap-2 sm:gap-3 md:gap-4'>
                                                    <Image className='rounded-md' src={t1} width={150} height={150} alt='cart image'/>
                                                    <div className='space-y-2'>
                                                        <p className='text-lg hover:underline transition duration-200'>ARTIST TRAVEL BOTTLE (OUTDOORS)</p>
                                                        <p className='text-lg'><span>Color: </span>DEEP PINK</p>
                                                    </div>
                                                </div>
                                            </td>
                                            
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <p className='text-lg'><span>AED </span>20</p>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <Button className={"rounded-md"} title={"Add To Cart"}/>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    </>
  )
}

export default Wishlist