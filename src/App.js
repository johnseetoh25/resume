import './App.css';
import Footer from './components/footer/footer';
import AboutSection from './sections/about-section';
import ResumeSection from './sections/resume-section';
import HeaderSection from './sections/header-section';
import ProjectsSection from './sections/projects-section';
import ContactSection from './sections/contact-section';

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <AboutSection/>
      <ResumeSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
