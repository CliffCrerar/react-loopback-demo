import { AppBar, Box, Paper, Typography, withTheme } from '@material-ui/core';
import React from 'react';
import { style } from './index.scss';

const AppHeader = ({ Time, theme }) => {

    return (
        <div className={style}>
            <header>
                <AppBar position="relative" component="div">
                    <Box
                        p="30px">
                        <Paper color="secondary">
                            <Box
                                styles={{ background: theme.palette.secondary.main }}
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
        </div>
    );
};

AppHeader.propTypes = {

};

export default withTheme(AppHeader);
