import React from "react";
import "../styles/style.css";

export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="bar">
      <a
        href="#About"
        onClick={() => handlePageChange("Bio")}
        className={[currentPage === "Bio" ? "active" : "", "link"].join(" ")}
      >
        About Me
      </a>
      <a
        href="#Work"
        onClick={() => handlePageChange("Work")}
        className={[currentPage, "link"].join(" ")}
      >
        Work
      </a>
      <a href="#Contact"
      onClick={() => handlePageChange("Contact")}
      className={[currentPage, "link"].join(" ")}
      
      >
        Contact Me
      </a>
      <a className="link" href="https://docs.google.com/document/d/1aGO7XTU-Wce-esx6r0PhH95StUoGH82Ow_VP2UHrYH4/edit?usp=sharing" 
      target="_blank">
      Resume
        
      </a>
    </nav>
  );
}
