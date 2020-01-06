import React, { useEffect,useState } from 'react';
import {
    IconButton,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Drawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Link, Events } from 'react-scroll';

const NavMenu = () => {
    return (
        <ul className="nav-menu">
            <li><Button color="inherit">Home</Button></li>
            <li><Button color="inherit">Dealership</Button></li>
            <li><Button color="inherit">Benefits</Button></li>
            <li><Button color="inherit">Eltrik Avenue</Button></li>
            <li><Button color="inherit">About</Button></li>
            <li><Button color="inherit" className="download-button">Download</Button></li>
        </ul>
    );
}
const Navbar = () => {
    const [drawerOpen,setDrawerOpen]=useState(false);
    useEffect(() => {
        Events.scrollEvent.register('begin', function (to, element) {
        });

        Events.scrollEvent.register('end', function (to, element) {
        });

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        }
    }, [])
    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawerOpen(open);
      };
    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                id="navbar"
                style={{backgroundColor:'white'}}
            >
                <Toolbar>
                    <IconButton onClick={toggleDrawer(true)} edge="start" className="menu-button" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Drawer className="menu-drawer" open={drawerOpen} onClose={toggleDrawer( false)}>
                        <NavMenu />
                    </Drawer>
                    <h2>Eltrik Energy</h2>
                    <div className="grow" />
                    <div className="section-desktop">
                    <NavMenu />
                    </div>
                    <Button className="mobile-button">Download</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
export default Navbar;