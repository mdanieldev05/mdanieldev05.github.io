import React from "react";
import { Link } from "react-router-dom";
import portfolioData from "../portfolioData";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <div className="portfolio-row">
        {portfolioData.map((project, idx) => {
          return (
            <Link
              key={"portfolioCard" + idx}
              to={`/portfolio/${project.route}`}
              className="portfolio-card"
            >
              <img
                className="portfolio-image"
                src={project.img.src}
                alt={project.img.alt}
              />
              <p className="portfolio-title">{project.title}</p>
              <p className="gray">Click for more details</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
