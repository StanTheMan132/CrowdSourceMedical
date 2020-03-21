import React, { useState, useMemo } from 'react';
import {navigate} from 'raviger';

import {AppBar, Avatar, Button, IconButton, Menu, MenuItem, Toolbar, Typography} from '@material-ui/core';

export const HeaderComponent = props => {
    const [menuAnchorEl, setMenuAchorEl] = useState();
    
    const isMenuOpen = useMemo( () => Boolean( menuAnchorEl ), [menuAnchorEl]);

    const handleMenu = ( e ) => {
        setMenuAchorEl( e.currentTarget );
    }

    const handleMenuClose = () => {
        setMenuAchorEl( undefined );
      };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={handleMenu}>
                    <Avatar alt="300" src="http://via.placeholder.com/300"/>
                </IconButton>
                <Typography variant="h6">Crowd Sourced Medical</Typography>
                <Menu open={isMenuOpen} onClose={handleMenuClose} anchorEl={menuAnchorEl} >
                    <MenuItem>Register</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}