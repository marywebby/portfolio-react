// src/App.js
import React from "react";
import "./App.css";
import StarrySky from "./components/StarryNight"; // Import the StarrySky component

function App() {
  return (
    <div className="Portfolio">
      <header className="Portfolio-header">
        <h1>Portfolio</h1>
        <StarrySky /> {/* Use the StarrySky component */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
