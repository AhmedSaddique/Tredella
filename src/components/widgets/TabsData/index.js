import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img1 from "../../../../public/images/t3.jpg"
import { ProductCard } from '@/components/ui/ProductCard'

const TabsData = ({items}) => {
  return (
    <>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center sm:gap-2 md:gap-4 mt-10 gap-2'>
        <div className='sm:col-span-2 bg-secondary p-2 w-full'>
            <div className='flex justify-center items-center'>
                <div className=' px-8'>
                    <h1 className='text-[30px] font-semibold md:text-[55px] md:font-bold'>23% off in All Product</h1>
                    <Link className='underline' href={"/"}>Shop Now</Link>
                </div>
                <div className='w-full'>
                    <Image className='w-full rounded-md hidden md:block' width={300} height={300} src={img1} alt='image'/>
                </div>
            </div>
        </div>
        <ProductCard productdetail={items} />
    
    </div>
    <div className=' text-center mt-10 mb-5'>
        <Link className='bg-primary rounded-md py-3 px-8 text-white' href={"/"}>View All</Link>
        </div>
    </>

  )
}

export default TabsData