import React from "react";
import Slider from "react-slick";

const settings = {
  // dots: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};

const Music = () => (
  <section id="music">
    <div className="text-container">
      <div className="row">
        <div className="ten columns">
          <h1>My Music</h1>
          <ul>
            <Slider {...settings}>
              <li>
                <iframe
                  title="Feeny"
                  src="https://open.spotify.com/embed/artist/4TWQJppHQYlY4FlzuvEDUc"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowTransparency="true"
                />
              </li>
              <li>
                <iframe
                  title="Guilty Spark"
                  src="https://open.spotify.com/embed/artist/6a0A3HMwpFmUJwZ39VfgO5"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowTransparency="true"
                />
              </li>
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Music;
