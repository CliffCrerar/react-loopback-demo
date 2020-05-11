import { Box, Fab, Menu, MenuItem } from '@material-ui/core';
import { ColorLensIcon } from '@material-ui/icons/ColorLens';
import React from 'react';
import { style } from './index.scss';
function ThemeChanger() {
    let anchorEl;
    let handleClose;
    return (
        <div className={style}>
            <Box mr="30px" style={{ transform: 'translatey(50%)' }}>
                <Fab>
                    <ColorLensIcon />
                </Fab>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Box>
        </div>
    );
}


ThemeChanger.propTypes = {

};

export default ThemeChanger;
