"use client"
import React, { useState } from 'react'
import { Drawer } from 'antd';


const DrawerMenu= ({title,content,className,width}) => {
const [open, setOpen] = useState(false);
const showDrawer = () => {
  
  setOpen(true);
};

const onClose = () => {
  setOpen(false);
};

  return (
    <>
    <div className={`${className}`} onClick={showDrawer}>
    {title}
    </div>
      <Drawer  onClose={onClose} open={open} width={width}>
        {content}
      </Drawer>
    </>
  )
}

export default DrawerMenu