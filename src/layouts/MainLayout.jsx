import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar/Sidebar'

export const MainLayout = () => {
  return (
    <div className='h-screen'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}
