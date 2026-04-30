import React from 'react';
import Container from './Container';
import Logo from "../../assets/Logo.webp";
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";import { HiOutlineShoppingBag } from "react-icons/hi2";


const SearchBar = () => {
  return (
   <>
   <Container>
    <div className='flex justify-between py-[27.5px]'>
        <div><img src={Logo} fetchpriority="high" alt="logo" /></div>
        <div className='relative'>
          <input className='w-124.5 h-11.25 border border-[#E6E6E6] rounded-md placeholder:text-[#808080] px-11 py-3 placeholder:font-pop placeholder:text-sm outline-[#808080]' type="text" placeholder='Search' />
          <IoSearch className='relative -top-7.5 left-4 font-20px text-[#1A1A1A]' />
          <button className='absolute right-[1px] top-0 text-[#FFFFFF] bg-[#00B207] py-2.5 px-6 rounded-r-md'>
            Search
          </button>
        </div>
        <div className='flex'>
          <CiHeart className='text-[#1A1A1A] w-[30px] h-7.5' />
          <div className='w-[2px] h-4 bg-[#CCCCCC] ml-3.5 top-1.5 relative'></div>
          <HiOutlineShoppingBag className='ml-4 w-6.5 h-6.5'/>
          <div className='relative -top-[5px] ml-3'>
            <p className='font-pop text-sm text-[#4D4D4D]'>Shopping cart:</p>
            <p className='font-pop text-[#1A1A1A] text-md'>$57.00</p>
          </div>
        </div>
    </div>
   </Container>
   </>
  )
}

export default SearchBar