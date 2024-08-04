import './App.css';
import AboutSection from './sections/about-section';
import HeaderSection from './sections/header-section';

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <AboutSection/>
      
      <div>projects</div>
      <div>contact</div>
    </div>
  );
}

export default App;
