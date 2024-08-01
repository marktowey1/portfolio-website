import "./App.css";
import "./components/Header/Header.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Work from "./components/Work/Work.jsx";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <div className="App">
      <Header toggleDarkMode={toggleDarkMode} dark={dark} />
      <About />
      <Projects dark={dark} />
      <Skills />
      <Work dark={dark} />
      <Contact />
    </div>
  );
}

export default App;
