import React from "react";
import {
  FaSpotify,
  FaGithub,
  FaInstagram,
  FaLinkedin
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
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
  </ul>
);

export default SocialLinks;
