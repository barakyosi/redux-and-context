import React, { useState } from 'react';
import logo from './logo.svg';
import ReduxCounter from './features/redux/ReduxCounter';
import ContextCounter from './features/context/ContextCounter';
import ContextBottomCounter from './features/context/BottomCounter';
import ReduxBottomCounter from './features/redux/BottomCounter';
import './App.css';

function App() {
  const [type, setType] = useState('redux');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{fontSize: 20}}>
          Using: {type === 'redux' ? 'Redux' : 'Context'}
        </p>
        <button
            onClick={() => setType(prev => prev === 'redux' ? 'context' : 'redux')}
        >
          {type === 'redux' ? 'Use Context' : 'Use Redux'}
        </button>
        {type === 'redux' ? <ReduxCounter /> : <ContextCounter/>}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
        {type === 'redux' ? <ReduxBottomCounter /> : <ContextBottomCounter/>}
      </header>
    </div>
  );
}

export default App;
