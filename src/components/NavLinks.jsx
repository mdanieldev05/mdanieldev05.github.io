import React from "react";
import { Link, useLocation } from "react-router-dom";
import resume from "../assets/Daniel-Mueller.pdf";

const NavLinks = () => {
  const location = useLocation();
  const url = location.pathname;
  return (
    <>
      <Link className={url === "/" ? "underline" : null} to="/">
        Home
      </Link>
      <Link
        className={url.includes("/portfolio") ? "underline" : null}
        to="/portfolio"
      >
        Portfolio
      </Link>
      <Link className={url === "/contact" ? "underline" : null} to="/contact">
        Contact Me
      </Link>
      <a href={resume}>
            Resume
          </a>
    </>
  );
};

export default NavLinks;
