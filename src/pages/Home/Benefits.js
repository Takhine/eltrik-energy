import React from 'react';
import {
    Grid,
    Card 
} from '@material-ui/core';
import underline from 'static/images/primary-underline.svg';

const benefits=[
    {
        id:1,
        icon:'',
        description:'One-time registration fee for uninterrupted battery swapping'
    },
    {
        id:2,
        icon:'',
        description:'Instant SWAP, NO QUEUE'
    },
    {
        id:3,
        icon:'',
        description:'Swap-charge stations conveniently located (Near Stations, Bus Stands, Malls, Schools/Colleges & Bazaars)'
    },
    {
        id:4,
        icon:'',
        description:'Longer mileage of Eltrik Li-on Batteries'
    },
    {
        id:5,
        icon:'',
        description:'Nil Maintenance cost of the battery for the E-rickshaw owner'
    },
    {
        id:6,
        icon:'',
        description:'Eltrik Li-on battery enables E-Rickshaws to work in multiple shifts a day'
    }
]
const Benefits = () => {
    return (
        <div className="benefits">
            <div className="main-title">
                <h1 className="title">Benefits</h1>
                <img src={underline} className="title-underline" alt="Underline" />
            </div>
            <Grid container spacing={4}>
                {benefits.map((benefit)=>{
                    return(
                        <Grid className="benefit" key={benefit.id} item xs={12} md={6}>
                        <Card className="benefit-card" variant="outlined">
                        <p>{benefit.description}</p>
                        </Card>
                        </Grid>
                    );
                })
                }
                <Grid className="benefit" item xs={12}>
                <Card className="benefit-card" variant="outlined">
                <p>The company will ensure supply of fully-charged batteries on a daily basis
                </p>
                </Card>
                </Grid>
                </Grid>
        </div>
    );
}

export default Benefits;