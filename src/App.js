import './App.css';
import AboutMe from './Components/AboutMe.jsx';
import Introduce from './Components/Introduce.jsx';
import Projects from './Components/Projects.jsx';
import Skills from './Components/Skills.jsx';
import Contact from './Components/Contact.jsx';

function App() {
  return (
    <div className="container">
      <Introduce />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
