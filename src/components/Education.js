import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h2>Rutgers University: Department of Continuing Studies</h2>
          <p className="info">
            <h3>
              Certification in Full Stack Web Development
              <span>&bull;</span>
              <em className="date">2018</em>
            </h3>
          </p>

          <p>
            Computer Science applied to web development:
            <ul>
              <li>MERN stack (MongoDB, Express, Node, React)</li>
              <li>GraphQL, Apollo, RESTful APIs, JWT Authentication</li>
              <li>Jest, Enzyme, Prisma</li>
              <li>MySQL, Next.js, SEO, Semantic HTML</li>
              <li>Styled Components, CSS Modules</li>
              <li>HTML5, CSS3, ES5, ES6, jQuery, and AJAX</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h2>Ramapo College of New Jersey</h2>
          <p className="info">
            <h3>
              B.A. in Music Production and Audio Engineering
              <span>&bull;</span>
              <em className="date">May 2015</em>
            </h3>
            <h4>Minor: Digital Filmmaking</h4>
          </p>

          <p>
            Key Courses:
            <ul>
              <li>Recording Arts 1-3</li>
              <li>Electronic and Computer Music</li>
              <li>Live Audio Engineering and Recording</li>
              <li>Fundamentals of Digital Filmmaking</li>
              <li>Digital Post Production</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
