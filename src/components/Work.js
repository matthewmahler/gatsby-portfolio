import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h2>Achim Importing</h2>
          <p className="info">
            <h3>
              Junior Developer
              <span> &bull; </span>
              <em className="date">2017 - Present</em>
            </h3>
          </p>

          <p>
            <ul>
              <li>
                Built Web GUI to track inventory changes in real time using
                React (16.6), Express, and Node
              </li>
              <li>
                Developed an enterprise-level SQL Server-based application
              </li>
              <li>Wrote and maintained ad hoc SQL queries </li>
              <li>Executed data validation and data conversion</li>
              <li>
                Workstation setup, networking and technical infrastructure
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h2>Headset Inc</h2>
          <p className="info">
            <h3>
              Data Expert
              <span> &bull; </span>
              <em className="date">2016 - 2017</em>
            </h3>
          </p>

          <p>
            <ul>
              <li>
                Linked thousands of products sold in retail locations to an
                overarching NoSQL database (MongoDB)
              </li>
              <li>
                Q/A tested React.js frontend and filed bug reports/user stories
              </li>
              <li>
                Tracked sales, optimal price points and other data mining
                analysis
              </li>
              <li>
                Managed quality control of new products created for the database
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
