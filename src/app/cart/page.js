"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import t1 from "../../../public/images/t1.jpg";
import Image from 'next/image';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import Container from '@/components/Layout/Container/Container';

const Cart = () => {
    const [counts, setCounts] = useState([1, 1]); // Initialize counts array with initial quantities
    const pricePerItem = 89.00; // Set the price per item
    const shippingCost = 49.00; // Set the shipping cost

    const totalPrice = (index) => {
        return (pricePerItem * counts[index]).toFixed(2);
    };

    // Calculate subtotal
    const subtotal = counts.reduce((acc, count, index) => {
        return acc + parseFloat(totalPrice(index));
    }, 0);

    // Calculate total
    const total = subtotal + shippingCost;

    const increment = (index) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
    };

    const decrement = (index) => {
        if (counts[index] > 1) {
            const newCounts = [...counts];
            newCounts[index] -= 1;
            setCounts(newCounts);
        }
    };

    return (
        <Container className=' mt-10'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-lg'>Your cart</h1>
                <Link className='underline' href={"/products"}>Continue shopping</Link>
            </div>

            <div className='p-2 rounded-md mt-5 bg-white shadow block md:hidden'>
                {counts.map((count, index) => (
                    <div className='flex flex-wrap pt-2 mb-4 bg-white shadow p-2' key={index}>
                        <div className='flex gap-3'>
                            <Image width={100} height={100} className='rounded-md h-24' src={t1} alt='test' />
                            <div className='space-y-1'>
                                <h6 className='text-sm font-medium'>ARTIST TRAVEL BOTTLE (OUTDOORS)</h6>
                                <h2 className='text-sm font-medium'>Dhs. <span>{pricePerItem.toFixed(2)}</span>.00 AED</h2>
                                <h2 className='text-sm font-medium'>Color <span>DEEP PINK</span></h2>
                                <div className='flex gap-2 items-center'>
                                    <div className='border-2 p-2 flex justify-center items-center gap-1 w-20'>
                                        <FiMinus className='cursor-pointer' size={20} onClick={() => decrement(index)} />
                                        <input className='w-5 hover:border hover:scale-105 text-center' type="text" value={count} readOnly />
                                        <FiPlus className='cursor-pointer' size={20} onClick={() => increment(index)} />
                                    </div>
                                    <MdDeleteOutline className='cursor-pointer' size={20} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6 className='font-bold'>Total</h6>
                            <p className='text-12 font-medium'>Dhs. <span>{totalPrice(index)}</span>.00 AED</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className=" flex-col mt-10 md:mt-20">
                <div className="-m-1.5  hidden md:block">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-[12px] font-normal text-gray-500 uppercase">PRODUCT</th>
                                        <th scope="col" className="px-6 py-3 text-start text-[12px] font-normal text-gray-500 uppercase">QUANTITY</th>
                                        <th scope="col" className="px-6 py-3 text-start text-[12px] font-normal text-gray-500 uppercase">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {counts.map((count, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <div className='flex items-center gap-2 sm:gap-3 md:gap-4'>
                                                    <Image className='rounded-md' src={t1} width={150} height={150} alt='cart image'/>
                                                    <div className='space-y-2'>
                                                        <p className='text-lg hover:underline transition duration-200'>ARTIST TRAVEL BOTTLE (OUTDOORS)</p>
                                                        <p className='text-lg'><span>AED </span> {pricePerItem.toFixed(2)}</p>
                                                        <p className='text-lg'><span>Color: </span>DEEP PINK</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <div className='flex gap-2 justify-center items-center'>
                                                    <div className='border-2 p-2 flex justify-center items-center gap-1 w-28'>
                                                        <FiMinus className='cursor-pointer' size={20} onClick={() => decrement(index)} />
                                                        <input className='w-14 hover:border hover:scale-105 text-center' type="text" value={count} readOnly />
                                                        <FiPlus className='cursor-pointer' size={20} onClick={() => increment(index)} />
                                                    </div>
                                                    <MdDeleteOutline className='cursor-pointer' size={20} />
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <p className='text-lg'><span>AED </span> {totalPrice(index)}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className='text-end border-t-2 mt-10 pt-5 space-y-3'>
                    <div className='flex gap-5 justify-end items-center'>
                        <p className='text-base'>Subtotal</p>
                        <p className='text-base'><span>AED </span>{subtotal.toFixed(2)}</p>
                    </div>
                    <div className='flex gap-5 justify-end items-center'>
                        <p className='text-base'>Shipping</p>
                        <p className='text-base'><span>AED </span>{shippingCost.toFixed(2)}</p>
                    </div>
                    <div className='flex gap-5 justify-end items-center'>
                        <p className='text-base'>Total</p>
                        <p className='text-base'><span>AED </span>{total.toFixed(2)}</p>
                    </div>
                    <div className='pt-3'>
                    <Link href={"/checkout"} className='bg-primary rounded-md text-white  w-80 p-3'>
                        Process to Checkout
                    </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Cart;
