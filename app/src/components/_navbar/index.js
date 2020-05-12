import { Box, Tab, Tabs } from '@material-ui/core';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import HomeIcon from '@material-ui/icons/Home';
import React, { useState } from 'react';
import { style } from './index.scss';

const Navbar = (props) => {

    const { changeMainComponent } = props
    const [selected, changeSelected] = useState(0);
    const onNavTabClick = (event, value) => { changeSelected(value); changeMainComponent(value); };

    return (
        <div className={style}>
            <nav>
                <Box
                    boxShadow={2}
                    component="div"
                    color="text.secondary"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center">
                    <Tabs
                        value={selected}
                        onChange={onNavTabClick}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="secondary"
                        aria-label="scrollable force tabs example">
                        <Tab 
                            index={0} 
                            label={'Home'} 
                            icon={<HomeIcon />} />
                        <Tab 
                            index={1} 
                            label={'Form Demo'} 
                            icon={<FolderOpenIcon />} />
                        <Tab 
                            index={2} 
                            label={'Page Two'} 
                            icon={<FolderOpenIcon />} />
                    </Tabs>
                </Box>
            </nav>
        </div>
    );
};

Navbar.propTypes = {};

export default Navbar;
