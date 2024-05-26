"use client"
import React, { useState } from 'react'
import Thumbnail from '@/components/Carousel/Thumbnail'
import RadioButton from '@/components/ui/RadioButton'
import { FaMinus, FaPlus } from 'react-icons/fa'
// import Tabs from '@/components/ui/Tabs'
import Image from 'next/image'
import { reviewData } from '@/components/constant'
import t1 from "../../../public/images/t1.jpg"
import t2 from "../../../public/images/t2.jpg"
import t3 from "../../../public/images/t3.jpg"
import Container from '@/components/Layout/Container/Container'
import Link from 'next/link'
import Tabs from '@/components/ui/Tabs/Tabs'
import ProductSlider from '@/components/Carousel/ProductSlider'

const Detail = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(totalStars);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  return (
    <Container className='mt-10'>
      <div className='flex flex-col md:flex-row gap-4 justify-between'>
        <div className='md:w-1/2'>
          <Thumbnail
            ThumbImage={[
              { image: t1 },
              { image: t2 },
              { image: t3 },
              { image: t2 },
              { image: t1 },
            ]}
          />
        </div>
        <div className='md:w-1/2 space-y-3 mt-2 md:mt-0'>
          <div>
            <h1 className='text-lg md:text-2xl font-medium'>Makeup Sponges Pack of 6 Beauty Blending Sponges Cosmetic Powder Puff</h1>
            <div className="flex items-center">
              {[...Array(totalStars)].map((_, index) => (
                <span
                  key={index}
                  className={`text-2xl ${index < rating ? 'text-yellow-500' : ''}`}
                  onClick={() => handleStarClick(index)}
                >
                  &#9733;
                </span>
              ))}
              <h1 className="pt-1 px-2">(<span>10</span>)</h1>
            </div>
          </div>
          <p className='font-medium'>Brand: <span>Nike</span></p>
          <div className='flex gap-2'>
            <h2 className='font-medium text-xl'>AED: <span>120</span></h2>
            <h2 className='font-medium text-xl line-through'>AED: <span>150</span></h2>
          </div>
          <h2 className='font-medium'>Quantity Available: <span>20</span></h2>
          <div>
            <h3 className='font-medium text-lg'>Delivery Time:</h3>
            <p className='font-medium'><span className='px-2 rounded-md bg-black text-white'>3</span> to <span className='px-2 rounded-md bg-black text-white'>6</span> Business Days</p>
          </div>
          <div className='space-x-3 space-y-3'>
            <h3 className='font-medium text-lg'>Size:</h3>
            <RadioButton className={"border-gray-300 peer-checked:bg-primary"} name={"size"} title={"XS"} id={"XS"} />
            <RadioButton className={"border-gray-300 peer-checked:bg-primary"} name={"size"} title={"S"} id={"S"} />
            <RadioButton className={"border-gray-300 peer-checked:bg-primary"} name={"size"} title={"MD"} id={"MD"} />
            <RadioButton className={"border-gray-300 peer-checked:bg-primary"} name={"size"} title={"XL"} id={"XL"} />
          </div>
          <div className='space-x-3 space-y-3'>
            <h3 className='font-medium text-lg'>Color:</h3>
            <RadioButton className={"border-red-500 peer-checked:bg-primary2"} name={"color"} title={"Red"} id={"Red"} />
            <RadioButton className={"border-black peer-checked:bg-black"} name={"color"} title={"Black"} id={"Black"} />
            <RadioButton className={"border-blue-500 peer-checked:bg-blue-500"} name={"color"} title={"Blue"} id={"Blue"} />
            <RadioButton className={"border-yellow-500 peer-checked:bg-yellow-500"} name={"color"} title={"Yellow"} id={"Yellow"} />
          </div>
          <div className='space-x-3 space-y-3'>
            <h3 className='font-medium text-lg'>Quantity:</h3>
            <div className='flex items-center space-x-2'>
              <button className='p-2 rounded-full border hover:bg-black transition duration-300 ease-in-out group' onClick={decrement}><FaMinus className='group-hover:text-white' size={15} /></button>
              <input className='w-10 text-center border-2 rounded-md py-1' type="number" value={quantity} readOnly />
              <button className='p-2 rounded-full border hover:bg-black transition duration-300 ease-in-out group' onClick={increment}><FaPlus className='group-hover:text-white' size={15} /></button>
            </div>
          </div>
          <div className='flex flex-col space-y-3'>
          <Link className='bg-primary font-semibold text-center p-3 rounded-md text-white hover:bg-white border-2 border-primary hover:text-primary' href={"/checkout"}>Checkout Now</Link>
          <Link className='bg-white font-semibold text-center p-3 rounded-md text-primary hover:bg-primary border-2 border-primary hover:text-white' href={"/cart"}>Add to Cart</Link>

          </div>
        </div>
      </div>
      <div className='bg-gray-100 mt-10 rounded-md px-3 py-1'>
        <Tabs tabs={[
          {
            
            label: 'Details',
            content: (
              <p>These TWS M10 Earbuds Bluetooth 5.1 Earphones by Oks Traders are the perfect choice for sports enthusiasts and music lovers alike. With a 3500mAh charging box, you can enjoy wireless stereo headphones for hours on end. These earbuds are compatible with Apple devices and have a built-in mic.</p>
            ),
          },
          {
            label: 'Review',
            content: (
              reviewData.map((array, index) => (
                <div className='bg-white p-4 rounded-md mt-2' key={index}>
                  <div className='flex items-center gap-2'>
                    <div className='w-14 h-14 rounded-full '>
                      <Image src={array.profile} width={50} height={50} className='bg-contain rounded-full w-14 h-14' alt='review' />
                    </div>
                    <div>
                      <h3 className='font-semibold'>{array.name}</h3>
                      <p className='font-medium text-gray-400'><span>@</span>{array.username}</p>
                    </div>
                  </div>
                  <p className='p-2'>{array.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {array.images.map((item, innerIndex) => (
                      <div className='w-28 h-28 md:w-32 md:h-32 rounded-md border' key={innerIndex}>
                        <Image src={item.userImage} width={200} height={200} className='object-cover w-full h-full' alt='review' />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ),
          },
        ]} />
      </div>

      <ProductSlider
  Heading={"Related Product"}
  ProductItem={[
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t2,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t3,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t2,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
  ]}
  />
    </Container>
  )
}

export default Detail
