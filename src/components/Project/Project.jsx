import "./Project.css";
import GithubIcon from "../../images/Github-icon.png";
import DemoIcon from "../../images/Demo-icon.png";

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
            <button>
              <img className="project-links-icon" src={DemoIcon}></img>Demo
            </button>
          </a>
          <a href={githubUrl} target="_blank">
            <button>
              <img className="project-links-icon" src={GithubIcon}></img>Github
            </button>
          </a>
        </div>
      </div>
      <img src={screenshot} alt={`Screenshot of ${title}`} />
    </div>
  );
}
