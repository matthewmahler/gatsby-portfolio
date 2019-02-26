import React from "react";

const PortfolioCard = props => {
  return (
    <a href={props.url}>
      <div className="portfolio-item">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <span>
          Primary Language: <span className="language">{props.language}</span>
        </span>
        <span>
          Last Pushed: {new Date(props.pushedAt).toLocaleDateString()}
        </span>
      </div>
    </a>
  );
};

export default PortfolioCard;
