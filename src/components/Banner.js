import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Hi, I'm Matt Mahler.</h1>
      <h3>
        I am a <span>music producer, </span>
        <span>audio engineer, </span> <span>and multi-istrumentalist </span>
        turned
        <span className="job-title"> Full Stack Web Developer. </span>
        I'm making awesome sites and apps for the modern web with creative tech.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
