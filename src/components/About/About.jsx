import "./About.css";
import SocialLinks from "../SocialLinks/SocialLinks.jsx";

import WebDevImage from "../../images/WebDev-image.jpg";

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
        <SocialLinks />
      </div>
    </div>
  );
}
