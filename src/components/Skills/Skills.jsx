import Skill from "../Skill.jsx";
import "./Skills.css";

import ReactIcon from "../../images/React-icon.png";
import NextIcon from "../../images/NextJS-icon.png";
import JavascriptIcon from "../../images/JavaScript-icon.png";
import TypescriptIcon from "../../images/Typescript-icon.png";
import NodeIcon from "../../images/NodeJS-icon.png";
import ExpressIcon from "../../images/Express-icon.png";
import MongoIcon from "../../images/Mongo-icon.png";

export default function Skills() {
  const frontendSkills = [
    { name: "ReactJS", icon: ReactIcon },
    { name: "NextJS", icon: NextIcon },
    { name: "Javascript", icon: JavascriptIcon },
    { name: "Typescript", icon: TypescriptIcon },
  ];
  const backendSkills = [
    { name: "NodeJS", icon: NodeIcon },
    { name: "ExpressJs", icon: ExpressIcon },
  ];
  const databaseSkills = [{ name: "MongoDB", icon: MongoIcon }];

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div>
        <h2>Frontend</h2>
        <Skill skills={frontendSkills} />
      </div>
      <div>
        <h2>Backend</h2>
        <Skill skills={backendSkills} />
      </div>
      <div>
        <h2>Database</h2>
        <Skill skills={databaseSkills} />
      </div>
    </div>
  );
}
