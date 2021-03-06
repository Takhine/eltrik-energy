import React from 'react';
import {
    Grid,
    Button
} from '@material-ui/core';
import underline from 'static/images/secondary-underline.svg';
import avenue from 'static/images/eltrik-avenue.png'
import lion from 'static/images/eltrik-lion.png'

const Eltrik = () => {
    return (
        <div className="eltrik" name="eltrik">
            <div className="main-title">
                <h2 className="title">Eltrik Avenue</h2>
                <img src={underline} className="title-underline" alt="Underline" />
            </div>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4} lg={6}>
                    <div className="image-container">
                        <img src={avenue} className="avenue-image" alt="Eltrik Avenue Battery Outlet" />
                    </div>
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <div className="avenue-description">
                        <p>
                            <b>“ELTRIK AVENUE”</b>, a pay per use Battery Swap service, which gives access to high-performance <b>'Eltrik Energy'</b> Lithium LiFePo4 batteries to electric-rickshaw drivers and helps them overcome issues of long charging time, battery maintenance & less mileage. Through “ELTRIK AVENUE”, battery swapping stations, we aims to increase the income of e-rickshaw driver by lowering the idle time and providing better mileage per charge compared to the lead-acid battery.
                    </p>
                        <h3 className="subtitle">Join our network</h3>
                        <p style={{ display: 'inline' }}><b>ELTRIK ENERGY INDIA</b>, proposes to set up “ELTRIK AVENUE” Battery Swapping Stations for E-Rickshaw, every few kilometers in metros, class I and class II towns across the country. </p>
                        { /*<a href="#" className="requirements-link">Requirements</a>*/}
                        <h3 className="subtitle">Download Dealership Form</h3>
                        <a style={{ textDecoration: 'none', marginTop: '5px', display: 'block', marginRight: '5px' }} target="_blank" rel="noopener noreferrer" href="https://pay.eltrik.in/index.aspx"><Button style={{ marginTop: '5px',backgroundColor:'#0087C2' }} className="mobile-button" id="download-button">Download Form</Button></a>
                    </div>
                </Grid>
            </Grid>
            <div className="main-title lion">
                <h2 className="title">Eltrik "Energy" Battery</h2>
                <img src={underline} className="title-underline" alt="Underline" />
            </div>
            <Grid className="eltrik-lion" container spacing={4}>
                <Grid item xs={12} md={4} lg={6}>
                    <div className="image-container">
                        <img src={lion} className="avenue-image" alt="Eltrik Avenue Battery" />
                    </div>
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <div className="lion-description">
                        <p>
                            <b>Eltrik Energy</b> India presents the most advance Lithium Ferro Phosphate battery (LiFePO4 battery). The batteries are monitored and tracked 24x7 by company developed software for uninterrupted and smooth running.
                        </p>
                        <ul>
                            <li>Smart LiFePO4 Battery</li>
                            <li>Well-defined performance</li>
                            <li>Swap Compatible</li>
                            <li>Indigenously Developed Battery Management System</li>
                            <li>Long-term stability</li>
                            <li>Delivers full power until it is discharged</li>
                            <li>Energy Efficiency</li>
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Eltrik;