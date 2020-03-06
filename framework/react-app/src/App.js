import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="App-banner">
              <img src={logo} className="App-logo" alt="logo" />
              <h3>React</h3>
          </div>
          <h3>Basic component</h3>
          <pre>&lt;HelloWorld /&gt;</pre>
          <HelloWorld />
      </header>
    </div>
  );
}

export default App;
