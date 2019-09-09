/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Navbar from './Navbar'
import Footer from './Footer'

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <div className="site">
      <Navbar />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
