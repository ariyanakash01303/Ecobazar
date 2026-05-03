import React, { useRef, useState } from 'react'
import useOutsiteClick from '../../hooks/outsideClick';
import { IoMdClose } from "react-icons/io";


const Modal = () => {
    let [open, setOpen] =useState(false);
    let modalRef = useRef(null);
    useOutsiteClick(modalRef,()=>setOpen(false),open);
  return (

   <>
   <button onClick={()=>setOpen(!open)} className='bg-primry px-5 py-3 flex ml-10 rounded-[10px] text-white cursor-pointer'>Modal</button>

   { open &&
    <div className='w-100 h-100 bg-green-500 mx-auto  items-center justify-center text-white font-pop flex'ref={modalRef}>
    Modal
    
     <div className='relative -top-[190px] -right-[170px] text-white cursor-pointer'>
        <IoMdClose size={24} onClick={()=>setOpen(false)} />
     </div>
   </div>}
   </>
  )
}

export default Modal