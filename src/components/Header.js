import React from "react"

import Navigation from "./Navigation"
import Banner from "./Banner"
import ScrollDown from "./ScrollDown"
import styled from "styled-components"
import bg from "../images/header-background.jpg"

const HeaderContainer = styled.header`
  position: relative;
  min-height: 500px;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${bg}) no-repeat top center;
  background-size: cover;
  -webkit-background-size: cover;
  text-align: center;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
`

const Header = () => (
  <HeaderContainer id="home">
    <Navigation />
    <Banner />
    <ScrollDown />
  </HeaderContainer>
)

export default Header
