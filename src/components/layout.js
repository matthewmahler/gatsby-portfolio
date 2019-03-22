import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "../css/main.css"
import Header from "./Header"
import About from "./About"
import Resume from "./Resume"
import Portfolio from "./Portfolio"
import Music from "./Music"
import Footer from "./Footer"
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <About />
        <Portfolio />
        <Resume />
        <Music />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
