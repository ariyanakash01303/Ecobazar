import React from 'react'
import Container from './latouts/Container'
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";


const TopBer = () => {
  return (
   <>
   <div className='border-b border-2-b border-gry font-pop text-sm text-[#666666]  py-3.25'>
     <Container>
        <div className='flex justify-between '>
            <div className='flex items-center gap-1 font-pop text-[#666666]'> <CiLocationOn /> Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
            <div className='flex gap-x-5'>
              <div className='flex items-center gap-1'>ENG <FaAngleDown/></div>
              <div className='flex items-center gap-1'>USD <FaAngleUp/></div>
              <div className='topbar'>Sing In / Sing Up</div>
            </div>
        </div>   
    </Container>
   </div>
   </>
  )
}

export default TopBer