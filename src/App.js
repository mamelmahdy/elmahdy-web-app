import React from 'react';
import logo from './img/Mohamed Bio Photo.jpg';
import Projects from './pages/projects';
import Bio from './pages/bio';
import './App.css';

function App() {
  const [rotate, setRotate] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={rotate ? "App-logo-animated" : "App-logo" }
          alt="logo"/>
        <p>
          Mohamed Elmahdy
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() => setRotate(!rotate)}>
          Rotate!
        </button>
      </header>
      <div className="ProjectsContainer">
        <h className="ProjectsTitle">Projects</h>
        <Projects />
      </div>
    </div>
  );
}

export default App;
