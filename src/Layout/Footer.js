import React from 'react';
import {
    Grid,
    Button
} from '@material-ui/core';
import underline from 'static/images/primary-underline.svg';

const Footer = () => {
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
                            <p>Presenting India's first EV battery swapping station. The Faster, Cheaper, Better way to Charge Electric Rickshaws</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className="footer-title">
                            <h2 className="title">Quick Links</h2>
                            <img src={underline} className="title-underline" alt="Underline" />
                        </div>
                        <div className="footer-section">
                            <ul>
                                <li><Button>Home</Button></li>
                                <li><Button>Dealership</Button></li>
                                <li><Button>Benefits</Button></li>
                                <li><Button>Eltrik Avenue</Button></li>
                                <li><Button>About us</Button></li>
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