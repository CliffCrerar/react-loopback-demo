import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { style } from './index.scss';

const PageTwo = () => {

    return (
        <Container maxWidth="lg" className={style}>
            <Typography component="h1" variant="h1">Page Two</Typography>
        </Container>
    );
};

PageTwo.propTypes = {

};

export default PageTwo;
