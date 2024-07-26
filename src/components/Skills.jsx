import Skill from "./Skill.jsx";
import "./Skills.css";

export default function Skills() {
  const frontendSkills = [
    { name: "ReactJS" },
    { name: "NextJS" },
    { name: "Javascript" },
    { name: "Typescript" },
  ];
  const backendSkills = [{ name: "NodeJS" }, { name: "ExpressJs" }];
  const databaseSkills = [{ name: "MongoDB" }];

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
