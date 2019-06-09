import React from "react"
import styled from "styled-components"

const isCurrent = (anchor, pathname) =>
  pathname.endsWith(anchor) ? "current" : ""

const NavContainer = styled.nav`
  font: 12px "opensans-bold", sans-serif;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  margin: 0 auto;
  z-index: 100;
  position: absolute;
  left: 0;
  top: 0;

  ul,
  li,
  a {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }
  ul {
    min-height: 48px;
    width: auto;

    /* center align the menu */
    text-align: center;
  }
  ul li {
    position: relative;
    list-style: none;
    height: 48px;
    display: inline-block;
  }

  /* Links */
  ul li a {
    /* 8px padding top + 8px padding bottom + 32px line-height = 48px */

    display: inline-block;
    padding: 8px 13px;
    line-height: 32px;
    text-decoration: none;
    text-align: left;
    color: #fff;

    -webkit-transition: color 0.2s ease-in-out;
    -moz-transition: color 0.2s ease-in-out;
    -o-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
  }

  ul li a:active {
    background-color: transparent !important;
  }

  ul li.current a {
    color: #39b1ff;
    font-weight: 700;
  }
  #nav-wrap > a.mobile-btn {
    display: none;
  }
`

class Navigation extends React.Component {
  state = {
    pathname: "#home",
  }
  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({ pathname: window.location.href })
    })
  }
  render() {
    const { pathname = "" } = this.state
    return (
      <NavContainer id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" />
        <ul id="nav" className="nav">
          <li className={isCurrent("#home", pathname)}>
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li className={isCurrent("#about", pathname)}>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>

          <li className={isCurrent("#portfolio", pathname)}>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li className={isCurrent("#resume", pathname)}>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li className={isCurrent("#music", pathname)}>
            <a className="smoothscroll" href="#music">
              Music
            </a>
          </li>
        </ul>
      </NavContainer>
    )
  }
}

export default Navigation
