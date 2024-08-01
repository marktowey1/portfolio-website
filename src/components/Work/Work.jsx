import GenesysLogo from "../../images/Genesys-Logo.png";
import SAPLogo from "../../images/SAP-Logo.png";

import "./Work.css";

const workExperience = [
  {
    company: "Genesys",
    companyLogo: GenesysLogo,
    startDate: "April 2024",
    endDate: "Present",
    jobTitle: "Software Implementation Consultant",
  },
  {
    company: "SAP",
    companyLogo: SAPLogo,
    startDate: "June 2021",
    endDate: "March 2024",
    jobTitle: "Cloud Support Engineer",
  },
];

export default function Work({ dark }) {
  return (
    <div className="work-container">
      <h1>Work</h1>
      {workExperience.map((work) => (
        <div
          className={`workInfo ${dark ? "dark-mode" : ""}`}
          key={work.company}
        >
          <div className="work-left">
            <h2>{work.company}</h2>
            <h3>{`${work.startDate} - ${work.endDate}`}</h3>
            <p>{work.jobTitle}</p>
          </div>
          <img
            className="work-right"
            src={work.companyLogo}
            alt="Company Logo"
          ></img>
        </div>
      ))}
    </div>
  );
}
