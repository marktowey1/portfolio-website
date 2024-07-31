import "./Project.css";

export default function Project({
  title,
  description,
  screenshot,
  demoUrl,
  githubUrl,
}) {
  return (
    <div className="project-card">
      <div className="project-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="project-links">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <button>Demo</button>
          </a>
          <a href={githubUrl} target="_blank">
            <button>Github</button>
          </a>
        </div>
      </div>
      <img src={screenshot} alt={`Screenshot of ${title}`} />
    </div>
  );
}
