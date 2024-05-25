"use client"
import React from 'react';
import { Select } from 'antd';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};


const SelectList = ({ options,className,defaultValue }) => {
  return (
    <Select
    className={`${className}`}
      defaultValue={defaultValue}
      onChange={handleChange}
      options={options}
    />
  );
};

export default SelectList;
