import HeroHeader from '@/components/Layout/HeroHeader'
import Service from '@/components/widgets/Service'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaBox } from 'react-icons/fa'
import { GiReturnArrow } from 'react-icons/gi'
import { IoBagCheck } from 'react-icons/io5'
import { MdOutlineLockReset } from 'react-icons/md'

const HelpCenter = () => {
  return (
    <>
        <HeroHeader pageName={"Help & Support"} />
        <Service Heading={"Self Service"}
        serviceinfo={[
            {link:"profile",icon:<CgProfile size={30} />,title:"Profile"},
            {link:"profile",icon:<MdOutlineLockReset size={30} />,title:"Reset Password"},
            {link:"",icon:<FaBox size={30} />,title:"Track My Order"},
            {link:"",icon:<GiReturnArrow size={30} />,title:"Return My Order"},
            {link:"profile",icon:<IoBagCheck size={30} />,title:"Order"},
        ]}
        /> 
        <Service Heading={"Chat With Us"}
        serviceinfo={[
            {link:"profile",icon:<CgProfile size={30} />,title:"Profile"},
            {link:"profile",icon:<MdOutlineLockReset size={30} />,title:"Reset Password"},
            {link:"",icon:<FaBox size={30} />,title:"Track My Order"},
            {link:"",icon:<GiReturnArrow size={30} />,title:"Return My Order"},
            {link:"profile",icon:<IoBagCheck size={30} />,title:"Order"},
        ]}
        /> 
         <Service Heading={"Still looking for answers? Ask Daz anytime, day or night, Click on 'Chat Now' to connect with us 24/7"}
        serviceinfo={[
            {link:"profile",icon:<CgProfile size={30} />,title:"Chat Now"},
            {link:"profile",icon:<MdOutlineLockReset size={30} />,title:"Seller help Center"},
        ]}
        /> 
    </>
  )
}

export default HelpCenter