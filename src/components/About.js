import React from "react"

import profilePic from "../images/profilepic.jpg"
import profilePic2 from "../images/profilepic2.jpg"
import profilePic3 from "../images/profilepic3.jpg"
import profilePic4 from "../images/profilepic4.jpg"

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
        <img className="profile-pic" src={profilePic2} alt="" />
        <img className="profile-pic" src={profilePic3} alt="" />
        <img className="profile-pic" src={profilePic4} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
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
              <span>
                56 Laidlaw Ave
                <br /> Jersey City, NJ 07306 US
              </span>
              <br />
              <span>(908)-217-1194</span>
              <br />
              <span>matthewjamesmahler@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
