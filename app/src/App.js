import { withTheme, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Home from './components/home';
import PageOne from './components/page-one';
import PageTwo from './components/page-two';
import Footer from './components/_footer';
import AppHeader from './components/_header';
import Main from './components/_main';
import Navbar from './components/_navbar';
import './App.scss';

function App() {

  const
    mainComponents = [Home, PageOne, PageTwo],
    [Page, changePage] = useState(mainComponents[0]),
    changeMainComponent = (index) => changePage(mainComponents[index]);

  return (

    <div className="App">

      <AppHeader Time={Time} />

      <Navbar changeMainComponent={changeMainComponent} />

      <Main Page={Page} />

      <Footer />

    </div>
  );
}

function Time() {
  const [time, changeTime] = useState(new Date());
  setInterval(() => changeTime(new Date()), 1000);
  return (<Typography variant="caption">{time.toString()}</Typography>)
}


export default withTheme(App);

