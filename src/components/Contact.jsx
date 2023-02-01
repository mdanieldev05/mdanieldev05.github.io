import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import LoadingEmail from "./LoadingEmail";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (isLoading) {
  //     setIsLoading(false);
  //   }
  //   // eslint-disable-next-line
  // }, [window.location]);

  const { REACT_APP_API_KEY } = process.env;
  const form = useRef();
  const [submitError, setSubmitError] = useState("");
  let navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_sp5ytxd",
        "template_sgpuewk",
        form.current,
        REACT_APP_API_KEY
      )
      .then(
        (result) => {
          setSubmitError("");
          setIsLoading(false);
          navigate("/contact/success");
        },
        (error) => {
          setIsLoading(false);
          setSubmitError(error.text);
        }
      );
  };

  return (
    <>
      {isLoading ? <LoadingEmail /> : null}
      <div className="contact-page">
        {submitError ? (
          <p className="error">Unable to send! : {submitError}</p>
        ) : (
            <p className="contact-title">
              Let me know how I can help and I will get back with you as
              soon as I can!
            </p>
        )}
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            name="user_name"
            placeholder="Mr. John Smith"
            required
          />
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            name="user_email"
            placeholder="johnsmith@email.com"
            required
          />
          <label className="label">Message</label>
          <textarea
            className="message-input"
            name="message"
            placeholder="Let me know how I can help!"
            required
          />
          <input className="submit" type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default Contact;
