import React from 'react'

const FloatingInput = ({type,placeholder,label}) => {
  return (
    <div className="relative w-full max-w-xs">
    <input type={type} id="floatingInput" placeholder={placeholder} className="floating-label-input peer block w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white placeholder-transparent"/>
    <label for="floatingInput" className="floating-label absolute left-4 top-4 px-1  pointer-events-none transform scale-100 transition-all duration-200 origin-top-left">{label}</label>
  </div>
  )
}

export default FloatingInput