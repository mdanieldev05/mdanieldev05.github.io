import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
import resume from "../assets/Daniel-Mueller.pdf";

const Home = () => {
  return (
    <div className="home-page">
      {/* <p>This is the home page 4.0</p> */}
      <div className="HB-ctn">
        <div className="circle" />
        <p className="initial H">D</p>
        <p className="initial B">M</p>
      </div>
      <div className="routes-ctn">
        <Link className="routes-link portfolio" to="/portfolio">
          Portfolio
        </Link>
        <Link className="routes-link contact" to="/contact">
          Contact Me
        </Link>
        <a className="routes-link resume" href={resume}>
          Resume
        </a>
      </div>
      <div className="bio-ctn">
      <p className="bio-title">Hi, I'm Daniel</p>
        <p className="bio">I'm a software developer, proficient in React/Redux, Node.js, PHP, Python, and SQL. 
        Equally enjoy client-side/server-side and generally tech agnostic. </p>
      </div>
    </div>
  );
};

export default Home;
