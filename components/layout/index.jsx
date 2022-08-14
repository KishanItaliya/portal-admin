import React from 'react'
import NavigationBar from '../navigationBar'
import Sidebar from '../sidebar'

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <NavigationBar />
        {children}
      </div>
    </div>
  )
}

export default Layout