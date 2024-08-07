import './App.css';
import Footer from './components/footer/footer';
import AboutSection from './sections/about-section';
import ResumeSection from './sections/resume-section';
import HeaderSection from './sections/header-section';
import ProjectsSection from './sections/projects-section';
import ContactSection from './sections/contact-section';
import FeatureSection from './sections/feature-section';
import SkillSection from './sections/skill-section';

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <AboutSection/>
      <FeatureSection/>
      <ResumeSection/>
      <SkillSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
