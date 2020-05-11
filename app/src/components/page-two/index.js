import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { style } from './index.scss';

const PageTwo = () => {

    return (
        <Container className={style}>
            <Typography component="h1" variant="h1">
                Page One
            </Typography>
        </Container>
    );
};

PageTwo.propTypes = {

};

export default PageTwo;
