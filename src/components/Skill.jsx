import "./Skills/Skills.css";

export default function Skill({ skills }) {
  return (
    <div className="skills">
      {skills.map((skills) => (
        <div className="single-skill">
          <img src={skills.icon}></img>
          <p>{skills.name}</p>
        </div>
      ))}
    </div>
  );
}
