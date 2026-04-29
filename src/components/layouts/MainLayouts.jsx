import React from 'react'
import { Outlet } from 'react-router'
import TopBer from '../layouts/TopBer'
import SearchBar from './SearchBar'

const MainLayouts = () => {
  return (
    <>
    <TopBer/>
    <SearchBar/>
    <Outlet/>
    </>
    
  )
}

export default MainLayouts