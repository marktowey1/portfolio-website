import "./SocialLinks.css";

import LinkedInIcon from "../../images/Linkedin-icon.png";
import TwitterIcon from "../../images/Twitter-icon.png";
import GithubIcon from "../../images/Github-icon.png";
import GmailIcon from "../../images/Gmail-icon.png";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=marktowey1@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="socials-icon" src={GmailIcon}></img>
      </a>
      <a
        href="https://www.linkedin.com/in/mark-towey-88231914a/"
        target="_blank"
      >
        <img className="socials-icon" src={LinkedInIcon}></img>
      </a>
      <a href="https://x.com/toweym3" target="_blank">
        <img className="socials-icon" src={TwitterIcon}></img>
      </a>
      <a href="https://github.com/marktowey1" target="_blank">
        <img className="socials-icon" src={GithubIcon}></img>
      </a>
    </div>
  );
}
