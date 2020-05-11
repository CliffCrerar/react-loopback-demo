import { AppBar } from '@material-ui/core';
import React from 'react';
import { style } from './index.scss';

const Footer = () => {
    return (
        <footer className={style}>
            <AppBar color="default" position="bottom">Footer</AppBar>
        </footer>
    );
};

Footer.propTypes = {

};

export default Footer;
