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
      <a className="link" href="" 
      target="_blank">
      Resume
        
      </a>
    </nav>
  );
}
