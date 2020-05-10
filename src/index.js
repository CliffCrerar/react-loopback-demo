import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import * as serviceWorker from './serviceWorker';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles'
import themes from './themes';

const AppRoot = document.getElementById('root');

function Main() {
  const 
    [theme,changeTheme] = useState(unstable_createMuiStrictModeTheme(themes[0]));

    function updateTheme(value){
      changeTheme(themes[value]);
    }

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App updateTheme={updateTheme}/>
      </ThemeProvider>
    </React.StrictMode>
  );
}


ReactDOM.render(<Main/>,AppRoot);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
