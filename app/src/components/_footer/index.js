import { AppBar, Typography, Divider, Box } from '@material-ui/core';
import React from 'react';
import './index.scss';

const Footer = () => {
    return (
        <footer>

            <AppBar align='center' color="default" position="bottom">
                <Box p="20px">
                    <Typography variant="body2">OpenAPI spec: <a href="/openapi.json">/openapi.json</a></Typography>

                    <Typography variant="body2">API Explorer: <a href="/explorer">/explorer</a></Typography>
                </Box>
            </AppBar>

        </footer>
    );
};

Footer.propTypes = {

};

export default Footer;
