import React from 'react';
import {
    Grid,
    Card
} from '@material-ui/core';
import underline from 'static/images/primary-underline.svg';
import secondUnderline from 'static/images/secondary-underline.svg';


const About = () => {
    return (
        <div className="about">
            <div className="main-title">
                <h1 className="title">About us</h1>
                <img src={underline} className="title-underline" alt="Underline" />
            </div>
            <p className="about-description">ELTRIK ENERGY INDIA is a newly formed company, based out of Mumbai. It is being managed by a group of Professionals with years of experience in their current and diversified field in marketing, manufacturing, and managing logistics in auto & industrial fuels locally and internationally. </p>
            <Grid container spacing={8}>
                <Grid item xs={12} md={6}>
                    <Card className="about-card">
                        <div className="main-title">
                            <h1 className="title">Mission</h1>
                            <img src={secondUnderline} className="subtitle-underline" alt="Underline" />
                        </div>
                        <p className="about-description">
                        The primary mission of the company is to provide clean, safe and affordable Last Mile Connectivity to commute and for goods.
                        The focus shall be on E-rickshaws:
                        <br/>
                        a) Passengers
                        <br/>
                        b) Goods
                         
                        </p>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className="about-card">
                        <div className="main-title">
                            <h1 className="title">Vision</h1>
                            <img src={secondUnderline} className="subtitle-underline" alt="Underline" />
                        </div>
                        <p className="about-description">
                        To be the first to introduce a chain of Electric Vehicle (EV) Battery Swapping Stations and offer end-to-end solutions to the EV owners to take up the government mission for greener environment in a well organized profitable way for all the stakeholders. 
                        </p>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;