import * as React from 'react';
import logo from './logo.svg';
import './DaymoirApp.css';
import { strings } from './res/strings';
import AppBar from '@mui/material/AppBar'; // minimizing bundle size by importing just what we need
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const resource = strings.landing;

const DaymoirApp = () => {
  return (
    <div className="DaymoirApp">
      <header className="DaymoirApp-header">
        <AppBar color="transparent">
          <div className="DaymoirApp-appBar">
            <span>
              <Typography>{resource.title}</Typography>
            </span>
            <span className="DaymoirApp-link">
              <Button variant="text">{resource.about}</Button>
              <Button variant="text">{resource.login}</Button>
              <Button variant="text">{resource.signUp}</Button>
            </span>
          </div>
        </AppBar>
      </header>
      <div className="DaymoirApp-content">
        <div>
          <Typography variant="h1">{resource.heading}</Typography>
          <Typography paragraph={true}>{resource.description}</Typography>
          <Button variant="contained">{resource.startWriting}</Button>
        </div>
        <div>
          <img src={logo} className="DaymoirApp-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default DaymoirApp;
