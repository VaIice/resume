import './App.css';
import AboutMe from './Components/AboutMe.jsx';
import Introduce from './Components/Introduce.jsx';
import Projects from './Components/Projects.jsx';
import Skills from './Components/Skills.jsx';
import Cannel from './Components/Channel.jsx';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';



function App() {

  let now = 80;
  let label = 50;

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;

      // 스크롤 가능한 전체 높이 계산
      const totalScroll = fullHeight - windowHeight;

      // 스크롤 위치의 백분율 계산
      const scrollPercentage = (scrollTop / totalScroll) * 100;
      
      // 0 이상 100 이하로 제한
      const boundedScrollPercentage = Math.min(100, Math.max(0, scrollPercentage));

      setScrollPercentage(boundedScrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    
  return (
    <>
      <ProgressBar className="progressBar" now={scrollPercentage} visuallyHidden style={{ '--bs-progress-bar-bg': 'var(--color-highlight)', '--bs-progress-bg': 'transparent' }} />
      <div className="container">
        <Introduce />
        <AboutMe />
        <Cannel />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
