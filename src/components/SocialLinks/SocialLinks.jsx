import "./SocialLinks.css";

import LinkedInIcon from "../../images/Linkedin-icon.png";
import TwitterIcon from "../../images/Twitter-icon.png";
import GithubIcon from "../../images/Github-icon.png";
import GmailIcon from "../../images/Gmail-icon.png";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href="mailto:marktowey1@gmail.com">
        <img className="socials-icon" src={GmailIcon}></img>
      </a>
      <a href="https://www.linkedin.com/in/mark-towey-88231914a/">
        <img className="socials-icon" src={LinkedInIcon}></img>
      </a>
      <a href="https://x.com/toweym3">
        <img className="socials-icon" src={TwitterIcon}></img>
      </a>
      <a href="https://github.com/marktowey1">
        <img className="socials-icon" src={GithubIcon}></img>
      </a>
    </div>
  );
}
