import React from "react"
import {
  FaSpotify,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/lib/fa"
import styled from "styled-components"

const SocialLinksList = styled.ul`
  margin: 24px 0;
  padding: 0;
  font-size: 30px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);
  li {
    display: inline-block;
    margin: 0 15px;
    padding: 0;
  }
  li a:hover {
    color: #39b1ff;
  }
`

const SocialLinks = () => (
  <SocialLinksList className="social">
    <li>
      <a href="https://open.spotify.com/artist/4TWQJppHQYlY4FlzuvEDUc?si=ua9v2DLsRQ-S1fekDCsUvA">
        <FaSpotify />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/matthew-mahler-09003a163/">
        <FaLinkedin />
      </a>
    </li>

    <li>
      <a href="https://www.instagram.com/matthewmahler/">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/matthewmahler">
        <FaGithub />
      </a>
    </li>
  </SocialLinksList>
)

export default SocialLinks
