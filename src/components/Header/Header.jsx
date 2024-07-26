import React from "react";
import "./Header.css";
import ProjectsIcon from "../../images/Projects-icon.png";
import SkillsIcon from "../../images/Skills-icon.png";
import BriefcaseIcon from "../../images/Briefcase-icon.jpg";
import PersonIcon from "../../images/Person-icon.jpg";
import CircleIcon from "../../images/Circle-icon.jpg";

export default function Header() {
  return (
    <div className="header">
      <h1>Mark Towey</h1>
      <div className="header-menu">
        <img className="header-icon" src={ProjectsIcon}></img>
        <h2>Projects</h2>
        <img className="header-icon" src={SkillsIcon}></img>
        <h2>Skills</h2>
        <img className="header-icon" src={BriefcaseIcon}></img>
        <h2>Work</h2>
        <img className="header-icon" src={PersonIcon}></img>
        <h2>Contact</h2>
        <img className="header-icon" src={CircleIcon}></img>
        <h2>Dark/Light</h2>
      </div>
    </div>
  );
}
