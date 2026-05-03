import React, { useRef, useState } from 'react';
import Container from './Container';
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import useOutsiteClick from '../../hooks/outsideClick';
import { Link } from 'react-router';
const TopBer = () => {
  let [open, setOpen] = useState(false);
  let [opentwo, setOpenTwo] = useState(false);
  const dropDownLanRef = useRef(null);
  const dropDownUsdRef = useRef(null);
  useOutsiteClick(dropDownLanRef,()=>setOpen(false),open)
  useOutsiteClick(dropDownLanRef,()=>setOpenTwo(false),opentwo)
  return (
   <>
   <div className='border-b border-2-b border-gry font-pop text-sm text-[#666666]  py-3.25'>
     <Container>
        <div className='flex justify-between cursor-pointer'>
            <div className='flex items-center gap-1 font-pop text-[#666666]'> <CiLocationOn /> Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
            <div className='flex gap-x-5'>
              <div onClick={()=>setOpen(!open)} className='flex items-center gap-1' ref={dropDownLanRef}>ENG <FaAngleDown/>
                { open &&
                <div className='absolute top-8.75 bg-gry p-3'>
                <ul>
                  <li>EN</li>
                  <li>BN</li>
                  <li>AFG</li>
                </ul>
              </div>}
              </div>
              <div  onClick={()=>setOpenTwo(!opentwo)} ref={dropDownUsdRef} className='flex items-center gap-1'>USD <FaAngleUp/>
               { opentwo &&
                <div className='absolute top-8.75 bg-gry p-3'>
                <ul>
                  <li>BDT</li>
                  <li>UDT</li>
                  <li>AFG</li>
                </ul>
              </div>}
              </div>
              <div className='topbar'>
                <Link to="/Login">Sing In</Link> 
                <Link to="/Registration">/ Sing Up</Link>
              </div>
            </div>
        </div>   
    </Container>
   </div>
   </>
  )
}
export default TopBer