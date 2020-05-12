import { AppBar, Box, Paper, Typography, withTheme, TextField } from '@material-ui/core';
import React from 'react';
import { style } from './index.scss';
import CustomSearchElement from '../_custom-search';

const AppHeader = ({ Time, theme }) => {

    return (
        <div className={style}>
            <header>
                <AppBar position="relative" component="div">
                    <Box
                        display="flex"
                        flexDirection="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                        p="30px">
                        {/* <Paper color="secondary"> */}
                            <Box
                                styles={{ background: theme.palette.secondary.main }}
                                display="flex"
                                component="div"
                                justifyContent="space-between"
                                alignItems="center">
                                <Typography
                                    variant="h5"
                                    component="div">
                                    React - Material UI - Loopback
                                    <br />
                                    {/* <Time /> */}
                                </Typography>
                            </Box>
                        {/* </Paper> */}
                        <Box><CustomSearchElement/></Box>
                    </Box>
                </AppBar>
            </header>
        </div>
    );
};

AppHeader.propTypes = {

};

export default withTheme(AppHeader);
