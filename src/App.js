import React from 'react';
import './App.css';
import ProjectModal from './ProjectModal';
import BackgroundAnimation from './BackgroundAnimation';
import RollingBallsAnimation from './RollingBallsAnimation';

import logoDark from './assets/jli2_dark.svg';
import logoLight from './assets/jli2_light.svg';
import linkedin from './assets/linkedin.svg';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const handleCloseModal = () => setShowModal(false);
  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };
  const handleClick = () => {
    window.location.href = 'mailto:j.l@berkeley.edu';
  };
  function handleLinkedInClick() {
    window.open('https://www.linkedin.com/in/justin-l-300464123/', '_blank');
  }
  function handleResumeClick() {
    window.open('/resume.docx.pdf', '_blank');
  }
  return (
    <div className="App">
      <div className="background">

        <BackgroundAnimation /> {/* Add this line */}

      </div>
      <header className="App-header">
        <a href="https://www.imjustin.li"  rel="noopener noreferrer">
          <img src={isDarkMode ? logoDark : logoLight} alt="Logo" className="logo" style={{ width: '30px', height: '30px' }} />
        </a>

        <div className="nav-links">
          <button onClick={handleThemeChange} className="theme-toggle">
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <button onClick={handleResumeClick} className="theme-toggle">
            Resume
          </button>
          <button onClick={handleClick} className="theme-toggle">
            Contact
          </button>


        </div>

      </header>
      <main className="App-main">
        <div className="description-container">
          <div className="text-container">
            <p>
              <strong>Welcome! I'm Justin Li,</strong>  You can find my projects here. Enjoy your visit. 
            </p>
            <div className="infobar">
              <button onClick={handleClick} className="contact">
                <strong>Contact me</strong>
              </button>
              <button className="linkedin-button" onClick={handleLinkedInClick}>
                <img src={linkedin} alt="linkedin" style={{ width: '17px', height: '17px', }} />
              </button>
            </div>
          </div>
        </div>
        <div className="projects-container">
          <div className="project project-1" onClick={() => { setShowModal(true); setSelectedProject("Bello Coffee Kiosk"); }}>
            <h1 className="project-header">Bello Coffee Kiosk</h1>
            <p className="project-description">a self ordering kiosk ipad app made with react native.</p>
          </div>
          <div className="project project-2" onClick={() => { setShowModal(true); setSelectedProject("Hueshift.li"); }}>
            <h1 className="project-header">Hueshift.li</h1>
            <p className="project-description">a web based timed puzzle game made with react.</p>
          </div>
          <div className="project project-3" onClick={() => { setShowModal(true); setSelectedProject("Nonadox"); }}>
            <h1 className="project-header">Nonadox</h1>
            <p className="project-description">a challenging puzzle game made with spritekit.</p>
          </div>
        </div>
      </main>
      {showModal && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
