import React from "react"
import icon1 from "../images/svg-react-5.png"
import icon2 from "../images/nodejs-png-part-4-node-js-execution-time-800.png"
import icon3 from "../images/expressjslogo.png"
import icon4 from "../images/mongodb.png"

const photos = [icon1, icon2, icon3, icon4]

const Skills = () => (
  <div className="row skill">
    <div className="four columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
      <p>
        I am primarily a MERN stack Developer. Although I have built projects in
        backend languages like PHP and done frontend projects with vanilla
        javascript/jQuery, I excel in projects built with React, Express, Node,
        and MongoDB. I also recently picked up GraphQL as my API of choice.
      </p>
      <div className="lang">
        {photos.map((pic, i) => {
          return <img src={pic} alt="" width="100%" key={i} />
        })}
      </div>
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
            <em>PHP</em>
          </li>
          <li>
            <span className="bar-expand good" />
            <em>jQuery/AJAX</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Skills
