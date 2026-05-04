import React, { useRef, useState } from 'react'
import useOutsiteClick from '../../hooks/outsideClick';
import { IoMdClose } from "react-icons/io";

const Modal = () => {
  let [open, setOpen] = useState(false);
  let modalRef = useRef(null);

  useOutsiteClick(modalRef, () => setOpen(false), open);

  return (
    <>
      <div className='mt-100'>
        <button 
          onClick={() => setOpen(!open)} 
          className='bg-primry px-5 py-3 ml-10 rounded text-white cursor-pointer mt-12'
        >
          Modal
        </button>

        {open && (
          <div className='w-full h-full fixed top-0 left-0'>
            
            <div 
              ref={modalRef}
              className='w-80 h-60 bg-green-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            >
              
              <p className='text-white text-center pt-20'>
                Modal Content
              </p>

              <IoMdClose 
                size={22} 
                onClick={() => setOpen(false)} 
                className='absolute top-2 right-2 cursor-pointer text-white'
              />

            </div>

          </div>
        )}

      </div>
    </>
  )
}

export default Modal