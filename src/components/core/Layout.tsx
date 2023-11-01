import { Outlet } from 'react-router-dom'
import { TopBar } from '../TopBar'
import { Footer } from './Footer'

export function Layout() {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  )
}
