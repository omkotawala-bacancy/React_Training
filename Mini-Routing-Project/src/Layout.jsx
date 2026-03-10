import React from 'react'
import HeaderNav from './components/HeaderNav'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <HeaderNav />
        <Outlet />
    </>
  )
}

export default Layout