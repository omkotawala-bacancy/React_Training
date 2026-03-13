import { Outlet } from 'react-router-dom'
import NAvHead from './pages/NavHead'
import NavHead from './pages/NavHead'

function Layout() {
  return (
    <>
        <NavHead />
        <Outlet />
    </>
  )
}

export default Layout