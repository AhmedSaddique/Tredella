
import Checkbox from '@/components/ui/Checkbox'
import Collapse from '@/components/ui/Collapse/Collapse'
import FloatInput from '@/components/ui/FloatInput'
import React from 'react'

const Filters = () => {
  return (
    <div className='border rounded-md shadow'>
      <Collapse title={"FILTER BY CATEGORIES"}>
      <FloatInput type={"search"} label={"Search Category"} placeholder={"Search Category"} />
                 <div className='mt-3 space-y-1'>
                 <Checkbox title={"Mobile"} quantity={"20"}/>
                 <Checkbox title={"Laptop"} quantity={"30"}/>
                 <Checkbox title={"Accessories"} quantity={"25"}/>
                 <Checkbox title={"Home Apllience"} quantity={"18"}/>
                 <Checkbox title={"Books"} quantity={"20"}/>
                 </div>
      </Collapse>
      <Collapse title={"FILTER BY PRICE"}>
      <div className='flex gap-2'>
                <FloatInput type={"number"} label={"To"} placeholder={"To"} />
                 <FloatInput type={"number"} label={"From"} placeholder={"From"} />
                </div>
      </Collapse>
      <Collapse title={"PRODUCT STATUS"}>
      <div className=' space-y-1'>
                 <Checkbox title={"In Stock"} quantity={"20"}/>
                 <Checkbox title={"Out of Stock"} quantity={"30"}/>
                 <Checkbox title={"On Salw"} quantity={"25"}/>
                 </div>
      </Collapse>
      <Collapse title={"Brands"}>
      <FloatInput type={"search"} label={"Search Category"} placeholder={"Search Category"} />
                 <div className='mt-3 space-y-1'>
                 <Checkbox title={"Mobile"} quantity={"20"}/>
                 <Checkbox title={"Laptop"} quantity={"30"}/>
                 <Checkbox title={"Accessories"} quantity={"25"}/>
                 <Checkbox title={"Home Apllience"} quantity={"18"}/>
                 <Checkbox title={"Books"} quantity={"20"}/>
                 </div>
      </Collapse>

    </div>
  )
}

export default Filters