import React from "react"
import styled from "styled-components"
import bg from "../images/about-background2.jpg"
import profilePic from "../images/profilepic.jpg"
import profilePic2 from "../images/profilepic2.jpg"
import profilePic3 from "../images/profilepic3.jpg"
import profilePic4 from "../images/profilepic4.jpg"

const AboutContainer = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url(${bg}) no-repeat top center;
  background-size: cover !important;
  padding-top: 96px;
  padding-bottom: 66px;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  a,
  a:visited {
    color: #fff;
  }

  a:hover,
  a:focus {
    color: #11abb0;
  }
  h1 {
    font: 30/38px "opensans-bold", sans-serif;
    color: #39b1ff;
  }
  h2 {
    font: 22px/30px "opensans-bold", sans-serif;
    color: #39b1ff;
    margin-bottom: 12px;
  }

  p {
    line-height: 30px;
    color: #afafaf;
  }

  .profile-pic {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 100%;
    margin-bottom: 10px;
  }

  .contact-details {
    width: 50%;
  }

  .main-col {
    padding-right: 5%;
  }
`

const About = () => (
  <AboutContainer id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
        <img className="profile-pic" src={profilePic2} alt="" />
        <img className="profile-pic" src={profilePic3} alt="" />
        <img className="profile-pic" src={profilePic4} alt="" />
      </div>
      <div className="nine columns main-col">
        <h1>About Me</h1>
        <p>
          For the last 15 years I've eaten, slept and breathed music, from
          playing in multiple bands to being an all around concert addict and
          everything in between. Ultimately, this led me to Ramapo College of
          New Jersey where I graduated in 2015 with a B.A. in Music Production
          and Audio Engineering. After a few years of freelancing around New
          Jersey it was time for a new challenge.
        </p>
        <p>
          Realizing my passion for web development, I pivoted career paths,
          enrolled in the Rutgers Coding Bootcamp for Full Stack Development,
          and haven’t looked back. My current pet project is a music streaming
          service geared towards unknown and unsigned local bands built in
          modern javascript (MongoDB, Express, React, Node, and GraphQL) but
          when I’m not working on websites and web apps, you can usually find me
          in the pit singing along to every word of my favorite songs.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Matt Mahler</span>
              <br />
              <span>Jersey City, NJ </span>
              <br />
              <span>Phone: (908)-217-1194</span>
              <br />
              <span>Email: matthewjamesmahler@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </AboutContainer>
)

export default About
