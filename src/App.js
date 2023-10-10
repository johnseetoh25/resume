import './App.css';
import AboutSection from './sections/about-section';
import HeaderSection from './sections/header-section';
import SkillsSection from './sections/skills-section';

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <AboutSection/>
      <SkillsSection/>
      <div>projects</div>
      <div>contact</div>
    </div>
  );
}

export default App;
