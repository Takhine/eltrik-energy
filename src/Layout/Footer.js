import React,{useEffect} from 'react';
import {
    Grid,
    Button
} from '@material-ui/core';
import underline from 'static/images/primary-underline.svg';
import { Link, Events } from 'react-scroll';

const Footer = () => {
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
            <div className="footer">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className="footer-title">
                            <h2 className="title">Eltrik Energy India</h2>
                            <img src={underline} className="title-underline" alt="Underline" />
                        </div>
                        <div className="footer-section">
                        <a style={{color:'white',textTransform:'capitalize', textDecoration:'none'}} type="application/octet-stream" download="government-policy-paper.pdf" href={require('../static/download/government-policy-paper.pdf')}><Button style={{textTransform:'capitalize'}} color="inherit" className="download-button">Goveernment Policy Paper</Button></a>
                        <br/>
                        <a style={{color:'white',textTransform:'capitalize', textDecoration:'none'}} type="application/octet-stream" download="media-speaks.pdf" href={require('../static/download/media-speaks.pdf')}><Button style={{textTransform:'capitalize'}} color="inherit" className="download-button">Media Speaks</Button></a>
                        <br/>
                        <a style={{color:'white',textTransform:'capitalize', textDecoration:'none'}} type="application/octet-stream" download="t-and-c.pdf" href={require('../static/download/t-and-c.pdf')}><Button style={{textTransform:'capitalize'}} color="inherit" className="download-button">Terms &amp; Conditions</Button></a>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className="footer-title">
                            <h2 className="title">Quick Links</h2>
                            <img src={underline} className="title-underline" alt="Underline" />
                        </div>
                        <div className="footer-section">
                            <ul>
                                <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}><Button>Home</Button></Link></li>
                                <li><Link activeClass="active" to="benefits" spy={true} smooth={true} duration={500}><Button>Benefits</Button></Link></li>
                                <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}><Button>About Us</Button></Link></li>
                                <li><Link activeClass="active" to="eltrik" spy={true} smooth={true} duration={500}><Button>Eltrik Avenue</Button></Link></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="footer-title">
                            <h2 className="title">Find us</h2>
                            <img src={underline} className="title-underline" alt="Underline" />
                        </div>
                        <div className="footer-section">

                            <p>4, Harihar Niwas, Plot No.31-B,<br />
                                Poddar Street, off SV Road<br />
                                Santacruz (West), Mumbai - 400 054.</p>

                            <br/>
                            <br/>
                            <a style={{color:'white',textDecoration:'none'}} href="mailto:gm@eltrik.in"><Button style={{color:'white',textTransform:'lowercase'}}>gm@eltrik.in</Button></a>
                        </div>
                    </Grid>
                </Grid>
                <hr />
                <div className="copyright">
                    <small>Copyright © 2019 Eltrik Energy India Private Limited</small>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Footer;