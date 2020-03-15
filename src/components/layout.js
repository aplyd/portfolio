/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { Link } from 'gatsby'
// import { useStaticQuery, graphql } from "gatsby"


import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      > */}
        <main>{children}</main>
        
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div> */}
      
      {/* <Link to="/" style={{ top: '0', left: '0' }} className="menu-item menu-item-left">Home</Link>
      <Link to="/blog" style={{ top: '0', right: '0'}} className="menu-item menu-item-right">Blog</Link>
      <Link to="/contact" style={{ bottom: '0', left: '0'}} className="menu-item menu-item-left">Contact</Link>
      <Link to="/" style={{ bottom: '0', right: '0'}} className="menu-item menu-item-right">Home</Link> */}

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
