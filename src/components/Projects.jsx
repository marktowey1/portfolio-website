import Project from "./Project/Project.jsx";
import "./Project/Project.css";
import PortfolioWebsiteScreenshot from "../images/Portfolio-Website.png";
import CalculatorImage from "../images/Calculator-Image.png";
import WeatherApp from "../images/Weather-App.png";

const projects = [
  {
    title: "Calculator App",
    description: " A simple calculator app",
    screenshot: CalculatorImage,
    demoUrl: "https://calculator-iota-ten-35.vercel.app/",
    githubUrl: "https://github.com/marktowey1/Calculator-JavaScript",
  },
  {
    title: "Portfolio Website",
    description:
      "It is a simple Portfolio website made on ReactJS and CSS3. It contains different sections and each section contains different parts. It covers my education, experience, portfolio and many more.",
    screenshot: PortfolioWebsiteScreenshot,
    demoUrl: "",
    githubUrl: "https://github.com/marktowey1/portfolio-website",
  },
  {
    title: "Weather App",
    description:
      "Simple weather app where you can search by location to get the current temperature and weather type.",
    screenshot: WeatherApp,
    demoUrl: "",
    githubUrl: "https://github.com/marktowey1/weather-app",
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  );
}
