import React from 'react'
import { Outlet } from 'react-router'
import TopBer from '../TopBer'

const MainLayouts = () => {
  return (
    <>
    <TopBer/>
    <Outlet/>
    </>
    
  )
}

export default MainLayouts