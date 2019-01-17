import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import SickFits from "../assets/images/portfolio/sickfits.png";
import Overwatch from "../assets/images/portfolio/ow.png";
import Spotify from "../assets/images/portfolio/play.png";
import Here from "../assets/images/portfolio/here.png";

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a
                href="https://github.com/matthewmahler/sick-fits"
                target="_blank"
              >
                <img alt="" src={SickFits} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Sick-Fits</h5>
                    <p>React / GraphQL / Prisma</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a
                href="https://github.com/matthewmahler/Overlynics"
                target="_blank"
              >
                <img alt="" src={Overwatch} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Overlynics</h5>
                    <p>React / Node / MongoDB</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a
                href="https://github.com/matthewmahler/spotify-clone"
                target="_blank"
              >
                <img alt="" src={Spotify} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Slotify</h5>
                    <p>PhP / MySQL / jQuery</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a
                href="https://github.com/matthewmahler/gatsby-portfolio"
                target="_blank"
              >
                <img alt="" src={Here} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>This Portfolio</h5>
                    <p>React / Gatsby / Netlify</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
