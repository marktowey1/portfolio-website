import SocialLinks from "./SocialLinks.jsx";

export default function Contact() {
  return (
    <div classname="contact-container">
      <h1>Contact</h1>
      <p>Want to get in touch? Contact me on any of the following platforms:</p>
      <SocialLinks />
      <a>
        <button>Download Resume</button>
      </a>
    </div>
  );
}
