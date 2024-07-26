import "./Skills.css";

export default function Skill({ skills }) {
  return (
    <div className="skills">
      {skills.map((skills) => (
        <p>{skills.name}</p>
      ))}
    </div>
  );
}
