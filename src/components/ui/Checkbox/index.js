import React from 'react'

const Checkbox = ({quantity,title}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className="flex items-center space-x-2">
        <input id="checkbox" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-primary rounded"/>
        <label for="checkbox" className="font-base">{title}</label>
    </div>
    <p>(<span>{quantity}</span>)</p>
    </div>
  )
}

export default Checkbox