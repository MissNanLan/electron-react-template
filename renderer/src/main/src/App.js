import React from 'react';
import logo from './logo.svg';
import './App.css';
// const { ipcRender } = window.require('electron')
import { ipcRender } from 'electron';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Hello Electron
        </a>
      </header>
    </div>
  );
}

export default App;
