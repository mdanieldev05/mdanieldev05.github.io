import React from "react";
import { Link } from "react-router-dom";

const ContactSuccess = () => {
  return (
    <div className="success-page">
      <p className="contact-title large">Thank you for contacting me!</p>
      <p className="contact-title">
        You should receive a confirmation email within a few minutes.
      </p>
      <Link to="/" className="single-link">
        Return to home page
      </Link>
    </div>
  );
};

export default ContactSuccess;
