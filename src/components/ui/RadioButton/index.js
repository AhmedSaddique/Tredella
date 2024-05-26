import React from 'react'

const RadioButton = ({ name, id, title, className }) => {
  return (
    <div className="inline-flex items-center">
      <input
        type="radio"
        name={name}
        id={id}
        className="hidden peer"
      />
      <label
        htmlFor={id}
        className={`cursor-pointer rounded-lg border-2 px-4 py-2  peer-checked:text-white peer-checked:border-transparent transition-colors ${className}`}
      >
        {title}
      </label>
    </div>
  )
}

export default RadioButton
