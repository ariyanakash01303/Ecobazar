import React from 'react'
import { Outlet } from 'react-router'
import TopBer from '../layouts/TopBer'
import SearchBar from './SearchBar'
import Modal from './Modal'


const MainLayouts = () => {
  return (
    <>
    <TopBer/>
    <SearchBar/>
    <Modal/>
    <Outlet/>
    </>
    
  )
}

export default MainLayouts