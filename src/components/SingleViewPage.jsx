import React, { useState, Fragment, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LoadingHeroku from "./LoadingHeroku";

const SingleViewPage = ({ project }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setIsLoading(true);
    }
  }, [location.hash]);

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === project.carousel.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? project.carousel.length - 1 : current - 1);
  };

  const setSlide = (idx) => {
    setCurrent(idx);
  };

  return (
    <>
      {isLoading ? <LoadingHeroku siteUrl={project.siteUrl} /> : null}
      <div className="single-view-page">
        <ul className="carousel">
          <button
            className="carousel-btn left"
            onClick={() => {
              prevSlide();
            }}
          >
            &#8678;
          </button>
          <button
            className="carousel-btn right"
            onClick={() => {
              nextSlide();
            }}
          >
            &#8680;
          </button>
          <p className="count">
            {current + 1}/{project.carousel.length}
          </p>
          {project.carousel.map((pic, idx) => {
            return (
              <Fragment key={"carousel" + idx}>
                <div className={idx === current ? "slide active" : "slide"}>
                  <img className="carousel-img" alt={pic.alt} src={pic.src} />
                </div>
                <button className="dot" onClick={() => setSlide(idx)}>
                  <div
                    className={idx === current ? "white highlight" : "white"}
                  ></div>
                </button>
              </Fragment>
            );
          })}
        </ul>
        <h1 className="single-title">{project.title}</h1>
        <div className="a-ctn">
          {project.siteUrl.includes("herokuapp.com") ? (
            <Link
              className="single-link"
              to="#loading"
              // Because IOS devices don't fire useEffects upon navigating back, I added a URL hash which renders the loading component.
              // Then once in the LoadingHeroku component, the current URL is replaced with the live site URL, so the #loading route is erased from the location history.
            >
              See live site
            </Link>
          ) : (
            <a className="single-link" href={project.siteUrl}>
              See live site
            </a>
          )}
          <a className="single-link" href={project.codeUrl}>
            See source code
          </a>
        </div>
        <div className="description-ctn">
          {project.description?.map((paragraph, idx) => {
            return (
              <p key={"description" + idx} className="description">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SingleViewPage;
