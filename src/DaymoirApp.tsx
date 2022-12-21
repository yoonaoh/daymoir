import * as React from 'react';
import logo from './logo.svg';
import './DaymoirApp.css';

const DaymoirApp = () => {
  return (
    <div className="DaymoirApp">
      <header className="DaymoirApp-header">
        <img src={logo} className="DaymoirApp-logo" alt="logo" />
        <p>
          Edit <code>src/DaymoirApp.tsx</code> and save to reload.
        </p>
        <a
          className="DaymoirApp-link"
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

export default DaymoirApp;
