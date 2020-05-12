import { Container, Typography, Box, Divider } from '@material-ui/core';
import React from 'react';
import { style } from './index.scss';
import ReactLogo from '../../assets/react-logo';
import MuiLogo from '../../assets/mui-logo';
import LoopBackLogo from '../../assets/loopback-logo'
// import CouchDbLogo from '../../assets/couchdb-logo'

const Home = () => {
    const logoHeight = '15vw';
    const maxWidth = '300px';
    return (
        <Container maxWidth="lg" className={style}>
            <Typography align="center" component="h1" variant="h1">Home</Typography>
            <Divider/>
            <Box display="flex" justifyContent="space-around" flex="1" py="50px" flexWrap="wrap">
                <div><ReactLogo logoHeight={logoHeight} maxWidth={maxWidth} /></div>
                <div><MuiLogo logoHeight={logoHeight} maxWidth={maxWidth} /></div>
                <div><LoopBackLogo logoHeight={logoHeight} maxWidth={maxWidth} /></div>
            </Box>
            {/* <CouchDbLogo logoHeight={logoHeight} maxWidth={maxWidth}/> */}

        </Container>
    );
};

Home.propTypes = {

};

export default Home;
