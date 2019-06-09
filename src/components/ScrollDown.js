import React from "react"
import { FaChevronCircleDown } from "react-icons/lib/fa"
import styled from "styled-components"

const ScrollDownContainer = styled.p`
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -29px;
  color: #fff;
  display: block;
  height: 42px;
  width: 42px;
  font-size: 42px;
  line-height: 42px;
  color: #fff;
  border-radius: 100%;

  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  a:hover {
    color: #39b1ff;
  }
`

const ScrollDown = () => (
  <ScrollDownContainer className="scrolldown">
    <a className="smoothscroll" href="#about">
      <FaChevronCircleDown />
    </a>
  </ScrollDownContainer>
)

export default ScrollDown
