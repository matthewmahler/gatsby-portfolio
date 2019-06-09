import React from "react"
import SocialLinks from "./SocialLinks"
import styled from "styled-components"

const BannerContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 25vh auto;
  width: 85%;
  position: relative;
  padding-bottom: 30px;
  text-align: center;
  h1 {
    font: 90px/1.1em "opensans-bold", sans-serif;
    color: #fff;
    letter-spacing: -2px;
    margin: 0 auto 18px auto;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
  }
  h3 {
    font: 20px/1.9em "librebaskerville-regular", serif;
    color: #c5c4c4;
    margin: 0 auto;
    width: 70%;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  }
  span {
    ${tw`text-white`};
  }
  h2 {
    display: block;
    margin: 0 auto;
    ${tw`text-themeColor`};
  }
  hr {
    width: 65%;
    margin: 18px auto 24px auto;
    border-color: #2f2d2e;
    border-color: rgba(150, 150, 150, 0.5);
  }
`

const Banner = () => (
  <BannerContainer>
    <h1 className="responsive-headline">Hi, I'm Matt.</h1>
    <h3>
      I am a <span>music producer</span>,<span> audio engineer</span>,
      <span> and multi-instrumentalist </span>
      turned
      <h2> Full Stack Web Developer. </h2>
      I'm bringing creative solutions to the modern web.
    </h3>
    <hr />
    <SocialLinks />
  </BannerContainer>
)

export default Banner
