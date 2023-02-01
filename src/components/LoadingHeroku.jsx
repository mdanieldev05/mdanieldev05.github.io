import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LoadingHeroku = ({ siteUrl }) => {
  const building = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: building.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottie-heroku.json"),
    });
  }, []);
  
  window.location.replace(siteUrl)
  // Once this component is rendered, it will replace its URL with the live site URL. So if the user navigates back, they will skip past this loading screen.

  return (
    <>
    <div className="loading-screen">
        <div className="loading-container">
          <p className="loading-message">
            Giving Heroku.app a moment to wake up...
          </p>
          <div className="loading-animation heroku" ref={building} />
        </div>
    </div>
    </>
  );
};

export default LoadingHeroku;
