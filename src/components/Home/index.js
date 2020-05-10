import React from 'react';
import {style} from './index.scss';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const Home = () => {

    return (
        <Container className={style}>
            <Typography component="h1" variant="h1">
            Home
            </Typography>
        </Container>
    );
};

Home.propTypes = {

};

export default Home;
