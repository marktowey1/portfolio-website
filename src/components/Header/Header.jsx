import React from "react";
import "./Header.css";
import ProjectsIcon from "../../images/Projects-icon.png";
import SkillsIcon from "../../images/Skills-icon.png";
import BriefcaseIcon from "../../images/Briefcase-icon.jpg";
import PersonIcon from "../../images/Person-icon.jpg";
import CircleIcon from "../../images/Circle-icon.jpg";

export default function Header({ toggleDarkMode, dark }) {
  const smoothScroll = (e, targetId) => {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`header ${dark ? "dark-mode" : ""}`}>
      <h1>Mark Towey</h1>
      <div className="header-menu">
        <a onClick={(e) => smoothScroll(e, ".projects-container")}>
          <img className="header-icon" src={ProjectsIcon}></img>
          <h2>Projects</h2>
        </a>
        <a onClick={(e) => smoothScroll(e, ".skills-container")}>
          <img className="header-icon" src={SkillsIcon}></img>
          <h2>Skills</h2>
        </a>
        <a onClick={(e) => smoothScroll(e, ".work-container")}>
          <img className="header-icon" src={BriefcaseIcon}></img>
          <h2>Work</h2>
        </a>
        <a onClick={(e) => smoothScroll(e, ".contact-container")}>
          <img className="header-icon" src={PersonIcon}></img>
          <h2>Contact</h2>
        </a>
        <a onClick={toggleDarkMode}>
          <img className="header-icon" src={CircleIcon}></img>
          <h2>Dark/Light</h2>
        </a>
      </div>
    </div>
  );
}
