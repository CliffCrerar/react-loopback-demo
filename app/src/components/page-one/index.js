import { Container, Typography, Box, Divider } from '@material-ui/core';
import React from 'react';
import Login from '../login';
import { style } from './index.scss';
import UserTable from '../_table';

const PageOne = () => {
    return (
        <Container maxWidth="lg" className={style}>

        
            <Typography component="h2" variant="h2">Form Demo</Typography>

            <Divider variant="fullWidth" />

            <Box display="flex" flexWrap="wrap" pt="30px" component="div">
                <div>
                    <Login />
                </div>
                <div>
                    <UserTable />
                </div>
            </Box>

        </Container>
    );
};

PageOne.propTypes = {

};

export default PageOne;
