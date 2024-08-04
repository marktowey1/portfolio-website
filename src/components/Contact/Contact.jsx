import SocialLinks from "../SocialLinks/SocialLinks.jsx";
import "./Contact.css";

import DownloadIcon from "../../images/Download-Icon.png";

export default function Contact() {
  function downloadResume() {
    // Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
    const pdfUrl = "/MarkToweyCV.pdf";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = pdfUrl;

    // Set the download attribute with the desired file name
    link.download = "/MarkToweyCV.pdf";

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  }

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p>Want to get in touch? Contact me on any of the following platforms:</p>
      <SocialLinks />
      <a onClick={downloadResume}>
        <button className="download-btn">
          <img src={DownloadIcon} alt="Download Icon" />
          Download Resume
        </button>
      </a>
    </div>
  );
}
