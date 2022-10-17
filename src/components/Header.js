import React from "react";
import "../styles/style.css";
import profilePicture from '../images/profile2.jpg'

export default function Header() {
  return (
    <div id="h1" className="gradient">
    <img className="profile" src={profilePicture} alt="Profile picture of my face" />
    <h1 className="header-text">Mikayla Bruce, LVT</h1>
    <h3 className="header-text">Full Stack Web Developer</h3>
  </div>
  );
}
