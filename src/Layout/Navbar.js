import React,{useEffect} from 'react';
import {
    Toolbar,
    AppBar,
} from '@material-ui/core';
import { Link, Events } from 'react-scroll';

const Navbar = () => {
    useEffect(() => {
        Events.scrollEvent.register('begin', function(to, element) {
          });
       
          Events.scrollEvent.register('end', function(to, element) {
          });
       
    
          return()=>{
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
          }
    }, [])
    return (
        <React.Fragment>
            <AppBar 
                position="fixed"
                style={{backgroundColor:'#ffffff'}}
                >
            <Toolbar>
            </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
export default Navbar;