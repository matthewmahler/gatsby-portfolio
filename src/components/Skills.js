import React from "react";
import icon1 from "../assets/images/icons/svg-react-5.png";
import icon2 from "../assets/images/icons/nodejs-png-part-4-node-js-execution-time-800.png";
import icon3 from "../assets/images/icons/expressjslogo.png";
import icon4 from "../assets/images/icons/mongodb.png";

const photos = [icon1, icon2, icon3, icon4];

const Skills = () => (
  <div className="row skill">
    <div className="four columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
      <p>
        I am primarily a MERN stack Developer. Although I have built projects in
        backend languages like PhP and done frontend projects with vanilla
        javascript/jQuery, I excel in projects built with React, Express, Node,
        and MongoDB. I also recently picked up GraphQL as my API of choice.
      </p>
      <ul>
        {photos.map((pic, i) => {
          return (
            <li key={i}>
              <img src={pic} alt="" height="100" width="100" />
            </li>
          );
        })}
      </ul>
    </div>

    <div className="eight columns main-col">
      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand good" />
            <em>React.js</em>
          </li>
          <li>
            <span className="bar-expand good" />
            <em>Node.js</em>
          </li>
          <li>
            <span className="bar-expand good" />
            <em>Express.js</em>
          </li>
          <li>
            <span className="bar-expand good" />
            <em>MongoDB</em>
          </li>
          <li>
            <span className="bar-expand decent" />
            <em>GraphQL</em>
          </li>
          <li>
            <span className="bar-expand good" />
            <em>HTML5 / CSS3</em>
          </li>
          <li>
            <span className="bar-expand meh" />
            <em>PhP</em>
          </li>
          <li>
            <span className="bar-expand good" />
            <em>jQuery/AJAX</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
