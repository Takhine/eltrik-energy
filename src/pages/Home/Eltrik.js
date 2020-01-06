import React from 'react';
import {
    Grid,
    Button
} from '@material-ui/core';
import underline from 'static/images/secondary-underline.svg';
import avenue from 'static/images/eltrik-avenue.png'
const Eltrik = () => {
    return (
        <div className="eltrik">
            <div className="main-title">
                <h1 className="title">Eltrik Avenue</h1>
                <img src={underline} className="title-underline" alt="Underline" />
            </div>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4} lg={6}>
                <div className="image-container">
                <img src={avenue} className="avenue-image" alt="Eltrik Avenue Battery Outlet" />
                </div>
                </Grid>
                <Grid item xs={12} sm={8} lg={6}>
                    <div className="avenue-description">
                    <p>
                    “ELTRIK AVENUE”, a pay per use Battery Swap service, which gives access to high-performance “ELTRIK LI-ON” lithium-ion batteries to electric-rickshaw drivers and helps them overcome issues of long charging time, battery maintenance & less mileage. Through “ELTRIK AVENUE”, battery swapping service outlets, we aims to increase the income of e-rickshaw driver by lowering the idle time and providing better mileage per charge compared to the lead-acid battery.
                    </p>
                    <h3 className="subtitle">Join our network</h3>
                    <p style={{display:'inline'}}>ELTRIK ENERGY INDIA, proposes to set up “ELTRIK AVENUE” Battery Swapping Service for E-Rickshaw, every few kilometers in metros, class I and class II towns across the country. </p>
                    <a href="#" className="requirements-link">Requirements</a>
                    <h3 className="subtitle">Download Dealership Form</h3>
                    <Button>Download</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Eltrik;