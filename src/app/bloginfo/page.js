import Image from 'next/image'
import React from 'react'
import t1 from "../../../public/images/t1.jpg"
import HeroHeader from '../../components/Layout/HeroHeader';
import Container from '@/components/Layout/Container/Container'
const Bloginfo = () => {
  return (
 <>
    <HeroHeader  pageName={"Blog Detail"}/>
    <Container>
    <div className=' mt-10'>
    <Image width={600} height={600}  className='w-full h-auto md:h-[600px] bg-contain  rounded-md' src={t1} alt='blogImage'/>
    <div className='space-y-3'>
        <h1 className='text-2xl font-semibold pt-5'>Wel illum qui dolorem eum fugiat?</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Intege
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum.
        </p>
        <h1 className='text-xl font-semibold pt-5'>Wel illum qui dolorem eum fugiat?</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Intege
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum.
        </p>
    </div>
    </div>
    </Container>
 </>
  )
}

export default Bloginfo