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
        title:'One-time registration fee for uninterrupted battery swapping'
    },
    {
        id:2,
        icon:'',
        title:'Instant SWAP, NO QUEUE'
    },
    {
        id:3,
        icon:'',
        title:'Swap-charge stations conveniently located (Near Stations, Bus Stands, Malls, Schools/Colleges & Bazaars)'
    },
    {
        id:4,
        icon:'',
        title:'Longer mileage of Eltrik L-ion Batteries'
    },
    {
        id:5,
        icon:'',
        title:'The company will ensure supply of fully-charged batteries on a daily basis'
    },
    {
        id:6,
        icon:'',
        title:'Eltrik L-ion battery enables E-Rickshaws to work in multiple shifts a day'
    }
]
const Benefits = () => {
    return (
        <div className="benefits">
            <div className="main-title">
                <h2 className="title">Benefits</h2>
                <img src={underline} className="title-underline" alt="Underline" />
            </div>
            <Grid container spacing={6}>
                {benefits.map((benefit)=>{
                    return(
                        <Grid className="benefit" key={benefit.id} item xs={12} sm={6} lg={4}>
                        <Card className="benefit-card" variant="outlined">
                        <h4>{benefit.title}</h4>
                        </Card>
                        </Grid>
                    );
                })
                }
                <Grid className="benefit" item xs={12}>
                <Card className="benefit-card" variant="outlined">
                <h4>The company will ensure supply of fully-charged batteries on a daily basis
                </h4>
                </Card>
                </Grid>
                </Grid>
        </div>
    );
}

export default Benefits;