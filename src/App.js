import './App.css';
import Header from './Components/Header.jsx';
import AboutMe from './Components/AboutMe.jsx';
import Introduce from './Components/Introduce.jsx';
import Projects from './Components/Projects.jsx';
import Skills from './Components/Skills.jsx';

function App() {
  return (
    <div className="container">
      <Header />
      <AboutMe />
      <Introduce />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
