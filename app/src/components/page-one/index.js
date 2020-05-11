import { Container, Typography } from '@material-ui/core';
import React from 'react';
import Login from '../login';
import { style } from './index.scss';

const PageOne = () => {

    return (
        <Container className={style}>
            <Typography component="h1" variant="h1">
                Page One
            </Typography>
            <Login />
        </Container>
    );
};

PageOne.propTypes = {

};

export default PageOne;
