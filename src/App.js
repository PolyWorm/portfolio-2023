import React from 'react';
import './App.css';
import ProjectModal from './ProjectModal';


// Import your logo image
import logo from './assets/jli2.svg';
import linkedin from './assets/linkedin.svg';

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const handleCloseModal = () => setShowModal(false);
  const handleClick = () => {
    window.location.href = 'mailto:j.l@berkeley.edu';
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="logo" style={{ width: '30px', height: '30px' }} />
        <div className="nav-links">
          <a href="#">Resume</a>

          <a href="#">Contact</a>
        </div>
      </header>
      <main className="App-main">
        <div className="description-container">
          <div className="text-container">
            <p>
              <strong>Hello, I'm Justin Li.</strong> It seems you've landed on my website. My goal is to turn interesting ideas into enjoyable experiences. You can find some of my projects here
            </p>
            <div className="infobar">
              <button onClick={handleClick} className="contact">
                <strong>Contact me</strong>
              </button>
              <button class="linkedin-button"><img src={linkedin} alt="linkedin" style={{ width: '17px', height: '17px', }} /></button>
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
