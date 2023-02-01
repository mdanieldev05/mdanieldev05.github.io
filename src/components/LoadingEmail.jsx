import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LoadingEmail = () => {
  const email = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: email.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottie-email.json"),
    });
  }, []);

  return (
    <div className="loading-screen">
          <div className="loading-animation" ref={email} />
    </div>
  );
};

export default LoadingEmail;
