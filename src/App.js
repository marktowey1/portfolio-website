import "./App.css";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Work from "./components/Work/Work.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
