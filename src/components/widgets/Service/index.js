import Container from '@/components/Layout/Container/Container'
import Link from 'next/link'
import React from 'react'
import { CgProfile } from "react-icons/cg";

const Service = ({Heading,serviceinfo}) => {
  return(
    <Container className={"mt-10"}>
    <h2 className='border-b-2 font-semibold text-lg border-primary '>{Heading}</h2>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 gap-2' >
        {
            serviceinfo.map((array,index)=>(
                    <Link href={`/${array.link}`} className='border p-2 rounded-md bg-white hover:bg-gray-300 flex flex-col justify-center items-center space-y-3' key={index}>
                        <div className='bg-white shadow w-14 h-14 rounded-full flex justify-center items-center'>
                            {array.icon}
                        </div>
                        <h3 className='text-xl font-semibold text-gray-600'>{array.title}</h3>
                    </Link>
            ))
        }
        </div>
       
    </Container>
  )
}

export default Service