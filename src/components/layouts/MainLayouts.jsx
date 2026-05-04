import React from 'react'
import { Outlet } from 'react-router'
import TopBer from '../layouts/TopBer'
import SearchBar from './SearchBar'
import Modal from './Modal'
import NavBer from '../NavBer'
import Footer from '../Footer'
import Subcribe from '../Subcribe'


const MainLayouts = () => {
  return (
    <>
    <TopBer/>
    <SearchBar/>
    <NavBer/>
    <Modal/>
    <Subcribe/>
    <Footer/>
    <Outlet/>
    </>
    
  )
}

export default MainLayouts