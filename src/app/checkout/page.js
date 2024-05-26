import Image from 'next/image'
import React from 'react'
import t1 from "../../../public/images/t1.jpg"
import t2 from "../../../public/images/t2.jpg"
import t3 from "../../../public/images/t3.jpg"
import ModalView from '@/components/ui/Modal'
import Container from '@/components/Layout/Container/Container'

const Checkout = () => {
  return (
    <>
          <Container className=' p-4'>
            <div className='flex flex-col md:flex-row gap-4'>
                <div className='w-full md:w-2/3 p-2 space-y-3 mt-10'>
                    <div className='space-y-3 shadow rounded-md p-4'>
                        <div className='space-y-3'>
                            <p className='text-sm'><span className='font-medium'>Deliver to: </span>Muhammad Ahmad</p>
                            <div className='flex flex-wrap md:flex-nowrap items-center gap-2'>
                                <div className='border font-medium rounded-md bg-gray-300 p-2 text-sm'>
                                    Home
                                </div>
                                <p className='border-r-2 px-2 text-sm'>03157127794</p>
                                <p className='text-sm'><span>House 181 x block</span> <span>Farid Town</span> <span>Sahiwal</span> <span>Punjab</span></p>
                                <ModalView className={"underline text-sm"} title={"Edit"} />
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <p className='text-sm'><span className='font-medium'>Billing Address: </span>Muhammad Ahmad</p>
                            <div className='flex flex-wrap md:flex-nowrap items-center gap-2'>
                                <div className='border font-medium rounded-md bg-gray-300 p-2 text-sm'>
                                    Home
                                </div>
                                <p className='border-r-2 px-2 text-sm'>03157127794</p>
                                <p className='text-sm'><span>House 181 x block</span> <span>Farid Town</span> <span>Sahiwal</span> <span>Punjab</span></p>
                                <ModalView className={"underline text-sm"} title={"Edit"} />
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className='text-sm'><span className='font-medium'>Email to: </span>ahmed.saddique12@gmail.com</p>
                            <ModalView className={"underline text-sm"} title={"Edit"} />
                        </div>
                    </div>

                    <div className='space-y-3 shadow rounded-md p-4'>
                        <p className='text-sm'><span className='font-medium'>Store Name: </span>Electro Gamers</p>
                        <div className='flex gap-2 border-b-2 pb-2'>
                            <Image width={100} height={100} className='bg-contain rounded-md h-24' src={t1} alt='cart' />
                            <div className='space-y-1 text-sm'>
                                <h6 className='font-medium '>PUBG Mobile Controller Phone Game Joystick Trigger Four Fingers, Su</h6>
                                <p><span className='font-medium'>Quantity: </span>2</p>
                                <p><span className='font-medium'>Color: </span>white</p>
                                <div className='flex gap-2'>
                                    <p><span className='font-medium'>AED: </span>200<span>.00</span></p>
                                    <p className='line-through'><span className='font-medium'>AED: </span>400<span>.00</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2 border-b-2 pb-2'>
                            <Image width={100} height={100} className='bg-contain rounded-md h-24' src={t2} alt='cart' />
                            <div className='space-y-1 text-sm'>
                                <h6 className='font-medium '>PUBG Mobile Controller Phone Game Joystick Trigger Four Fingers, Su</h6>
                                <p><span className='font-medium'>Quantity: </span>2</p>
                                <p><span className='font-medium'>Color: </span>white</p>
                                <div className='flex gap-2'>
                                    <p><span className='font-medium'>AED: </span>200<span>.00</span></p>
                                    <p className='line-through'><span className='font-medium'>AED: </span>400<span>.00</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-3 shadow rounded-md p-4'>
                        <p className='text-sm'><span className='font-medium'>Store Name: </span>Ahmed Hub</p>
                        <div className='flex gap-2 border-b-2 pb-2'>
                            <Image width={100} height={100} className='bg-contain rounded-md h-24' src={t3} alt='cart' />
                            <div className='space-y-1 text-sm'>
                                <h6 className='font-medium '>PUBG Mobile Controller Phone Game Joystick Trigger Four Fingers, Su</h6>
                                <p><span className='font-medium'>Quantity: </span>2</p>
                                <p><span className='font-medium'>Color: </span>white</p>
                                <div className='flex gap-2'>
                                    <p><span className='font-medium'>AED: </span>200<span>.00</span></p>
                                    <p className='line-through'><span className='font-medium'>AED: </span>400<span>.00</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-56 md:w-1/3 border rounded-md shadow bg-gray-300 p-4 space-y-3 mt-10 md:mt-0 sticky top-4'>
                    <h5 className='font-semibold'>Order Summary</h5>
                    <div className='flex justify-between'>
                        <p className='font-medium'>Items Total</p>
                        <p><span>AED: </span>160<span>.00</span></p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-medium'>Delivery Fee</p>
                        <p><span>AED: </span>10<span>.00</span></p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-medium'>Total Payment</p>
                        <p><span>AED: </span>170<span>.00</span></p>
                    </div>
                    <button className='border w-full rounded-md p-3 bg-black text-white'>
                        Place Order
                    </button>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Checkout