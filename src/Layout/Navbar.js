import React, { useEffect, useState } from 'react';

import {
    IconButton,
    AppBar,
    Toolbar,
    Button,
    Drawer,
    useScrollTrigger,
    Slide,
    // Zoom,
    // Fab
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { Link, Events } from 'react-scroll';

const HideonScroll = (props) => {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    });

    const trigger2 = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      };
    return (
        <Slide appear={false} direction="down" in={!trigger} elevation={trigger2 ? 4 : 0}>
            {children}
        </Slide>
    )
}

const NavMenu = () => {
    return (
        <ul className="nav-menu">
            <li><Button color="inherit">Home</Button></li>
            <li><Button color="inherit">Benefits</Button></li>
            <li><Button color="inherit">About</Button></li>
            <li><Button color="inherit">Eltrik Avenue</Button></li>
            <li><Button color="inherit" className="download-button">Download Form</Button></li>
        </ul>
    );
}
const Navbar = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
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
        <HideonScroll {...props}>
            <AppBar
                position="fixed"
                id="navbar"
                style={{ backgroundColor: 'white' }}
            >
                <Toolbar>
                    <IconButton onClick={toggleDrawer(true)} edge="start" className="menu-button" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Drawer className="menu-drawer" open={drawerOpen} onClose={toggleDrawer(false)}>
                        <NavMenu />
                    </Drawer>
                    <Button className="logo"><h2>Eltrik Energy</h2></Button>
                    <div className="grow" />
                    <div className="section-desktop">
                        <NavMenu />
                    </div>
                    <Button className="mobile-button">Download</Button>
                </Toolbar>
            </AppBar>
        </HideonScroll>
    );
}
export default Navbar;