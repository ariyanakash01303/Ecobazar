import React from 'react'
import Container from './Container'
import Logo from "../../assets/Logo.webp";
const SearchBar = () => {
  return (
   <>
   <Container>
    <div className='flex justify-between py-[27.5px]'>
        <div><img src={Logo} fetchpriority="high" alt="logo" /></div>
        <div>
          <input className='w-124.5 h-11.25 border border-[#E6E6E6] rounded-md placeholder:text-[#808080] placeholder:px-11 placeholder:font-pop ' type="text" placeholder='Search' />
        </div>
        <div>gdf</div>
    </div>
   </Container>
   </>
  )
}

export default SearchBar