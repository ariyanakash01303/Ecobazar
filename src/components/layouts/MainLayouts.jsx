import React from 'react'
import { Outlet } from 'react-router'
import TopBer from '../layouts/TopBer'
import SearchBar from './SearchBar'
import Modal from './Modal'
import NavBer from '../NavBer'
import Footer from '../Footer'


const MainLayouts = () => {
  return (
    <>
    <TopBer/>
    <SearchBar/>
    <NavBer/>
    <Modal/>
    <Footer/>
    <Outlet/>
    </>
    
  )
}

export default MainLayouts