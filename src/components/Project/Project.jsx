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
          <a href={demoUrl}>
            <button>Demo</button>
          </a>
          <a href={githubUrl}>
            <button>Github</button>
          </a>
        </div>
      </div>
      <img src={screenshot} alt={`Screenshot of ${title}`} />
    </div>
  );
}
