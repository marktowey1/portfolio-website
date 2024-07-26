import SocialLinks from "../SocialLinks/SocialLinks.jsx";
import "./Contact.css";

import DownloadIcon from "../../images/Download-Icon.png";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p>Want to get in touch? Contact me on any of the following platforms:</p>
      <SocialLinks />
      <a>
        <button className="download-btn">
          <img src={DownloadIcon} alt="Download Icon" />
          Download Resume
        </button>
      </a>
    </div>
  );
}
