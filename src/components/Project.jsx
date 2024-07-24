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
        <div className="project-links">
          <a href={demoUrl}>
            <button>Demo</button>
          </a>
          <a href={githubUrl}>
            <button>Github</button>
          </a>
          <p>{description}</p>
        </div>
      </div>
      <img src={screenshot} />
    </div>
  );
}
