import { ThemeProvider } from '@material-ui/core';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import themes from './themes';

const AppRoot = document.getElementById('root');

function ReactEntry() {
  const
    [theme, changeTheme] = useState(unstable_createMuiStrictModeTheme(themes[0]));

  function updateTheme(value) {
    changeTheme(themes[value]);
  }

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App updateTheme={updateTheme} />
      </ThemeProvider>
    </React.StrictMode>
  );
}


ReactDOM.render(<ReactEntry />, AppRoot);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
