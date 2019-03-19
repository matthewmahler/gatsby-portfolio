import React from "react";

const Music = () => (
  <section id="music">
    <div className="text-container">
      <div className="row">
        <div className="ten columns">
          <h1>My Music</h1>
          <div className="caro-container">
            <div>
              <iframe
                title="Feeny"
                src="https://open.spotify.com/embed/artist/4TWQJppHQYlY4FlzuvEDUc"
                width="100%"
                height="400"
                frameBorder="0"
                allowTransparency="true"
              />
            </div>
            <div>
              <iframe
                title="Guilty Spark"
                src="https://open.spotify.com/embed/artist/6a0A3HMwpFmUJwZ39VfgO5"
                width="100%"
                height="400"
                frameBorder="0"
                allowTransparency="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Music;
