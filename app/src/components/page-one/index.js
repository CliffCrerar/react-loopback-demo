import React from 'react';
import {style} from './index.scss';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const PageOne = ({}) => {

    return (
        <Container className={style}>
            <Typography component="h1" variant="h1">
                Page One
            </Typography>
        </Container>
    );
};

PageOne.propTypes = {

};

export default PageOne;
