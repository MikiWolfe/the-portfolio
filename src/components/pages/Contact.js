import React from "react";
import ContactForm from "./ContactForm";
import {
  RiTwitterFill,
  RiInstagramLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import "../../styles/style.css";
export default function Contact() {
  return (
    <div className="backImage">

      <ContactForm />
      <div className="contactFooter">
        <h3 className="contactHeader"> You can also find me on:</h3>
        
          <a className="contactIcon"
          title="Twitter"
          href="https://twitter.com/MikiiWolf" 
          target="_blank">
            {<RiTwitterFill />}
          </a>
          <a className="contactIcon"
          title="GitHub"
          href="https://github.com/MikiWolfe" 
          target="_blank">
            {<RiGithubFill />}
          </a>

          <a className="contactIcon"
          title="Linked In"
            href="https://www.linkedin.com/in/mikayla-bruce-b50676221/"
            target="_blank"
          >
            {<RiLinkedinBoxFill />}
          </a>
          <a className="contactIcon"
          title="Instagram"
          href="https://www.instagram.com/mikiwolfe/?hl=en" target="_blank">
            {<RiInstagramLine />}
          </a>
     
      </div>

    </div>
  );
}
