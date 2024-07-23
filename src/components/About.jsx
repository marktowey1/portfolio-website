import "./About.css";
import LinkedInIcon from "../images/Linkedin-icon.png";
import TwitterIcon from "../images/Twitter-icon.png";
import GithubIcon from "../images/Github-icon.png";
import GmailIcon from "../images/Gmail-icon.png";
import WebDevImage from "../images/WebDev-image.jpg";

export default function About() {
  return (
    <div>
      <div className="about-top">
        <div className="about-info">
          <p>
            Hello, my name is <b>Mark Towey</b>. I am an expert at ReactJS.
          </p>
        </div>
        <div className="about-photo">
          <img src={WebDevImage} alt="Web Development Image" />
        </div>
      </div>
      <div className="about-bottom">
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
      </div>
    </div>
  );
}
