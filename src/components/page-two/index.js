import React from 'react';
import {style} from './index.scss';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';

const PageTwo = ({}) => {

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
