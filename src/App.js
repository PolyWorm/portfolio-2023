import React from 'react';
import './App.css';

// Import your logo image
import logo from './assets/jli2.svg';
import linkedin from './assets/linkedin.svg';

function App() {
  const handleClick = () => {
    window.location.href = 'mailto:j.l@berkeley.edu';
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="logo" style={{ width: '30px', height: '30px' }} />
        <div className="nav-links">
          <a href="#">Resume</a>
          <a href="#">Projects</a>
        </div>
      </header>
      <main className="App-main">
        <div className="description-container">
          <div className="text-container">
            <p>
              <strong>Hello, I'm Justin Li.</strong> It seems you've landed on my website. My goal is to turn interesting ideas into enjoyable experiences. You can find some of my projects here ⭢
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
          <div className="project project-1">
            <h1 className="project-header">Bello Coffee Kiosk</h1>
            <p className="project-description">a self ordering kiosk ipad app made with react native.</p>
          </div>
          <div className="project project-2">
            <h1 className="project-header">Hueshift.li</h1>
            <p className="project-description">a web based timed puzzle game made with react.</p>
          </div>
          <div className="project project-3">
            <h1 className="project-header">Nonadox</h1>
            <p className="project-description">a challenging puzzle game made with spritekit.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
