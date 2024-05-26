"use client"
import t1 from "../../../public/images/t1.jpg"
import t2 from "../../../public/images/t2.jpg"
import t3 from "../../../public/images/t3.jpg"
import React, { useState } from 'react'
import { ProductCard } from '@/components/ui/ProductCard'
import DrawerMenu from "@/components/ui/DrawerMenu/DrawerMenu"
import Container from "@/components/Layout/Container/Container"
import Filters from "@/components/widgets/Filters"
import Button from "@/components/ui/Button/Button"
import { HiOutlineFilter } from "react-icons/hi";


const Products = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    const closeToggle = () => {
      setIsVisible(false);
    };
  
  return (
    <>
    <Container className=" mt-10 md:mt-20">
    <div className="flex flex-wrap md:flex-nowrap gap-4">
        <div className="w-full mt-4 block md:hidden">
            <div className="flex justify-between items-center">
            <select class="py-3 px-4 pe-9 block max-w-screen-sm border rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none ">
            <option selected="">Open this select menu</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
                <DrawerMenu
                    title={
                    <div className="p-2 border shadow rounded-md  flex items-center gap-2">
                      <HiOutlineFilter   size={20}/> Filter
                    </div>
                  }
                    content={<>
                    <Filters/>
                    </>}
                />
            </div>
        </div>
        <div className="hidden md:block md:w-1/4 mt-2">
            <Filters/>
        </div>
        <div className="w-full md:w-3/4 mt-2">
        <select class="py-3 px-4 pe-9  md:block max-w-screen-sm border rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none hidden">
            <option selected="">Open this select menu</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
                <ProductCard
                    productdetail={[
                        {image:t1,title:"Snikers Good Products", review:"20" ,price:"120"},
                        {image:t2,title:"Snikers Good Products", review:"20" ,price:"120",oldPrice:"150" },
                        {image:t3,title:"Snikers Good Products", review:"20" ,price:"120" },
                        {image:t2,title:"Snikers Good Products", review:"20" ,price:"120", },
                        {image:t3,title:"Snikers Good Products", review:"20" ,price:"120", },
                        {image:t1,title:"Snikers Good Products", review:"20" ,price:"120", },
                        {image:t2,title:"Snikers Good Products", review:"20" ,price:"120",oldPrice:"150" },
                        {image:t3,title:"Snikers Good Products", review:"20" ,price:"120",oldPrice:"150" },
                        {image:t1,title:"Snikers Good Products", review:"20" ,price:"120",oldPrice:"150" },
                    ]}
                />
            </div>
            <div className="text-center mt-4">
              <Button className={"rounded-md px-3 py-3"} title={"Load More"}/>
            </div>
        </div>
    </div>
</Container>

    </>
  )
}

export default Products