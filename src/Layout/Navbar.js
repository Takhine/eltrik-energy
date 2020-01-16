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
import logo from 'static/images/logo.png';
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


    return (
        <Slide appear={false} direction="down" in={!trigger} elevation={trigger2 ? 4 : 0}>
            {children}
        </Slide>
    )
}

const NavMenu = (props) => {
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
    return (
        <ul className="nav-menu">
            <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}><Button color="inherit" onClick={props.onClose}>Home</Button></Link></li>
            <li><Link activeClass="active" to="benefits" spy={true} smooth={true} duration={500}><Button color="inherit" onClick={props.onClose}>Benefits</Button></Link></li>
            <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}><Button color="inherit" onClick={props.onClose}>About</Button></Link></li>
            <li><Link activeClass="active" to="eltrik" spy={true} smooth={true} duration={500}><Button color="inherit" onClick={props.onClose}>Eltrik Avenue</Button></Link></li>
            <li><a style={{ textDecoration: 'none' }} type="application/octet-stream" download="enquiry-form.pdf" href={require('../static/download/enquiry-form.pdf')}><Button color="inherit" className="download-button">Download Form</Button></a></li>
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
                        <NavMenu onClose={toggleDrawer(false)} />
                    </Drawer>
                    <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}><Button><img className="logo" src={logo} alt="Eltrik Energy India" /></Button></Link>
                    <div className="grow" />
                    <div className="section-desktop">
                        <NavMenu />
                    </div>
                    <Button className="mobile-button">Download Form</Button>
                </Toolbar>
            </AppBar>
        </HideonScroll>
    );
}
export default Navbar;