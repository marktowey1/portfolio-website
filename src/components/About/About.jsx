import "./About.css";
import SocialLinks from "../SocialLinks/SocialLinks.jsx";

import WebDevImage from "../../images/WebDev-image.jpg";

export default function About() {
  return (
    <div className="About">
      <div className="about-top">
        <div className="about-info">
          <p>
            Hello, my name is{" "}
            <span>
              <b>Mark Towey</b>
            </span>
            . <br></br> I am an expert at ReactJS.
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
