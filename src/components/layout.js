import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'

const Layout = ({children}) => {
  return (
    <div>
      <Sidebar />
      <section id="content">
        <Navbar />
        {children}
      </section>
    </div>
  )
}

export default Layout
