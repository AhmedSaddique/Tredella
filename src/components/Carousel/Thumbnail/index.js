"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

const Thumbnail = ({ThumbImage}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      loop={true}
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className=""
    >
        {
          ThumbImage.map((array,index)=>(
                <SwiperSlide key={index}>
                <Image width={1000} height={1000} src={array.image}  alt='thumbnail'  className='bg-contain rounded-md  w-full'/>
            </SwiperSlide> 
            ))
        }
      
      
    </Swiper>
    <Swiper
      onSwiper={setThumbsSwiper}
      loop={true}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mt-2"
    >
         {
            ThumbImage.map((array,index)=>(
                <SwiperSlide key={index} className='border-4 hover:border-black rounded-lg transition ease-in duration-300'>
            <Image width={300} height={300} src={array.image} alt='thumbnail'   className='bg-contain rounded-md h-full  w-full'/>
            </SwiperSlide>
            ))
        }
      
    </Swiper>
  </>
  )
}

export default Thumbnail