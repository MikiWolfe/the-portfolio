import React, { useState } from "react";
import { RiStarFill,  } from "react-icons/ri";
import { CgArrowRightR } from "react-icons/cg";
import "../../styles/style.css";

const FORM_ENDPOINT = "";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="thank-you">
          {" "}
          <RiStarFill /> Thank you!
        </div>
      </>
    );
  }
  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <h2 className="contactHeader"> Want to get in touch? Send me message:</h2>

      <div>
        <div className="textbox">
          <textarea placeholder="Your message" name="message" required />
        </div>

        <div>
          <label for="fname"> Name: </label>
          <input
            className="input"
            type="text"
            placeholder="Your name"
            name="name"
            required
          />
        </div>

        <div className="textbox">
          <label for="email"> Email: </label>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            className="input"
            required
          />
        </div>
        <label for="button"> Full send: </label>
        <button className="subbtn" type="submit">
           <CgArrowRightR />{" "}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
