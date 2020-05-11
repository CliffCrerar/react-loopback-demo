import { AppBar, Box, Paper, Tab, Tabs, Typography, withTheme } from '@material-ui/core';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import HomeIcon from '@material-ui/icons/Home';
import React, { useState } from 'react';
import './App.scss';
import Home from './components/Home';
import PageOne from './components/page-one';
import PageTwo from './components/page-two';

function App(props) {
  console.log('props: ', props);
  const
    mainComponents = [Home, PageOne, PageTwo],
    [Page, chanagePage] = useState(mainComponents[0]),
    [selected, changeSelected] = useState(0),
    onNavTabClick = (event, value) => {
      changeSelected(value)
      chanagePage(mainComponents[value]);
    };

  return (

    <div className="App">

      {/* App header */}
      <header>
        <AppBar position="relative" component="div">
          <Box
            p="30px">
            <Paper color="secondary">
              <Box
                styles={{ background: props.theme.palette.secondary.main }}
                display="flex"
                component="div"
                justifyContent="space-between"
                alignItems="center">
                <Typography
                  p="10px"
                  variant="h5"
                  component="div">
                  Silex Consulting Demo
                </Typography>
                <Typography
                  variant="p"
                  component="div"
                  color="text.secondary"><Time /></Typography>
              </Box>
            </Paper>
          </Box>
        </AppBar>
      </header>

      {/* App Nav */}
      <nav>

        <Box
          boxShadow={2}
          component="div"
          color="text.secondary"
          display="flex"
          justifyContent="space-between"
          alignItems="center">

          <Tabs
            value={selected}
            onChange={onNavTabClick}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="secondary"
            aria-label="scrollable force tabs example"
          >
            <Tab index={0} label={'Home'} icon={<HomeIcon />} />
            <Tab index={1} label={'Page One'} icon={<FolderOpenIcon />} />
            <Tab index={2} label={'Page Two'} icon={<FolderOpenIcon />} />
          </Tabs>
          <Box mr="30px" style={{ transform: 'translatey(50%)' }}>
            {/* <Fab>
              <ColorLensIcon />
            </Fab>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu> */}
          </Box>
        </Box>

      </nav>

      {/* Main content */}
      <main>
        {Page}
      </main>

      {/* Footer */}
      <footer>
        <AppBar color="defualt" position="bottom">
          Footer
        </AppBar>
      </footer>

    </div>
  );
}

function Time() {
  const [time, changeTime] = useState(new Date())
  setInterval(() => changeTime(new Date()), 1000);
  return (
    <div>{time.toString()}</div>
  )
}


export default withTheme(App);

