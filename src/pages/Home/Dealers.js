import React from 'react';
import { Grid } from '@material-ui/core';

import auto from 'static/images/auto.png';
const Dealers = () => {
    return (
        <div className="dealership">
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <h2>Introducing India's First <b>‘Pay-Per-Use’</b> Battery Swapping Model!</h2>
                    <p>Adopting the marketing model of Petrol Pumps the Company offers to supply fully charged L-ion batteries on “Pay-Per-Use” basis.
        Being a cash and carry model, the business involves low investment and high cash profit generation on a daily basis.</p>
                </Grid>
                <Grid item xs={12} md={6}>
                <div className="image-container">
                    <img src={auto} className="auto-image" alt="Electric Auto Rickshaw" />
                </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dealers;