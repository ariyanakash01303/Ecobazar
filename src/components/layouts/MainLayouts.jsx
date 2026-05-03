import React from 'react'
import { Outlet } from 'react-router'
import TopBer from '../layouts/TopBer'
import SearchBar from './SearchBar'
import Modal from './Modal'
import NavBer from '../NavBer'


const MainLayouts = () => {
  return (
    <>
    <TopBer/>
    <SearchBar/>
    <NavBer/>
    <Modal/>
    <Outlet/>
    </>
    
  )
}

export default MainLayouts