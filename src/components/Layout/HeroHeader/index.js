import Link from 'next/link'
import React from 'react'
import { Breadcrumb } from 'antd';

const HeroHeader = ({pageName}) => {
  return (
    <div className='bg-gradient-to-r from-gray-200 to-gray-300 p-2 pb-20 space-y-3 '>
        <h1 className='text-3xl leading-loose font-semibold font-mono text-center pt-20  '>
            {pageName}
        </h1>
        <Breadcrumb
        className='flex justify-center text-lg'
          items={[
            {
              title: <Link href={"/"}>Home</Link>,
            },
            {
              title: pageName,
            },
          ]}
        />
    </div>
  )
}

export default HeroHeader