import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className='w-full bg-gradient-to-r from-[#FDE4E4] to-[#E4F0FD] h-[100vh]'>
        {/* <header>
            <Navbar/>
        </header> */}
        <main>
            <Outlet/>
        </main>
        <footer></footer>
    </div>
  )
}

export default MainLayout
