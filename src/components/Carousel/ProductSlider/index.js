"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import { ProductCard } from '@/components/ui/ProductCard';

const ProductSlider = ({ ProductItem, Heading, className }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  // Check if ProductItem exists and has at least one item
  if (!ProductItem || ProductItem.length === 0) {
    return null; // Return null if ProductItem is not provided or empty
  }

  // Function to pause autoplay
  const pauseAutoplay = () => {
    if (swiperRef && swiperRef.autoplay) {
      swiperRef.autoplay.stop();
    }
  };

  // Function to resume autoplay
  const resumeAutoplay = () => {
    if (swiperRef && swiperRef.autoplay) {
      swiperRef.autoplay.start();
    }
  };

  return (
    <div className="container-lg mt-10 md:mt-20 lg:mt-32 space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">{Heading}</h1>
          <hr className={`w-16 ${className} mb-2 md:mb-3 border-4`} />
        </div>
        <div>
          <Link className="underline font-medium hover:no-underline" href={'/products'}>
            View All
          </Link>
        </div>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {ProductItem.map((array, index) => (
          <SwiperSlide key={index}>
            <div
              onMouseEnter={pauseAutoplay} // Pause autoplay on mouse enter
              onMouseLeave={resumeAutoplay} // Resume autoplay on mouse leave
            >
              <ProductCard
                productdetail={[
                  { image: array.image, title: array.title, price: array.price, review: array.review, oldPrice: array.oldPrice },
                ]}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
