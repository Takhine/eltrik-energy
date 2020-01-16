import React from 'react';
import {
    Grid,
    Card
} from '@material-ui/core';
// Images
import underline from 'static/images/primary-underline.svg';
import icon1 from 'static/images/icon1.png';
import icon2 from 'static/images/icon2.png';
import icon3 from 'static/images/icon3.png';
import icon4 from 'static/images/icon4.png';
import icon5 from 'static/images/icon5.png';
import icon6 from 'static/images/icon6.png';
import icon7 from 'static/images/icon7.png';

const benefits = [
    {
        id: 1,
        icon: icon1,
        title: 'One-time registration fee for uninterrupted battery swapping',
        description: "The comany's unique marketing strategy 'pay per use' will insure that the burden of investing in a battery is taken off from the e-rickshaw driver/owner. Therefore making it very attractive fo them to shift to 'Eltrik Energy' batteries (Lithium LiFePo4) from Sealed Lead Acid Batteries and encourage new users."
    },
    {
        id: 2,
        icon: icon2,
        title: 'Instant SWAP, NO QUEUE',
        description: "The e-rickshaw driver will visit any of the 'ELTRIK AVENUE' outlet and simply swap his discharged battery with fully charged battery. The whole process will take less time than traditional fueling. Further the deal will not require nominal investment of Rs. 10 lacs investment against stocks and a 150sq.ft road facing ground floor shop required to conduct the trade and store the charged/discharged batteries."
    },
    {
        id: 3,
        icon: icon3,
        title: 'Swap-charge stations conveniently located (Near Stations, Bus Stands, Malls, Schools/Colleges & Bazaars)',
        description: "The company plans to set up 'ELTRIK AVENUE' battery swapping outlet at prime location every few kilometers. The model is akin to today's Petrol Pumps. Which means the e-auto rickshaw drives into any nearest 'ELTRIK AVENUE' outlet and swaps the battery. This means no idle ride for e-auto rickshaw and for dealer's continuous flow of e-rickshaw for swapping batteries."
    },
    {
        id: 4,
        icon: icon4,
        title: 'Longer mileage of Eltrik LiFePo4 Batteries',
        description: 'The company will charge the LiFePo4 batteries under climate control and will monitor the health of batteries. This will give e-rickshaw driver better mileage and dealer to deal in quantity and reliable product.'
    },
    {
        id: 5,
        icon: icon5,
        title: 'The company will ensure supply of fully-charged batteries on a daily basis',
        description: "The company will create 'Eltrik Avenue' battery swap station every 5 to 10 kilometers. The registered e-rickshaw can swap their discharged battery with fully charged one at any of 'Eltrik Avenue' battery swapping station, at a nominal cost. These swap stations will be serviced by our servicing vehicles who will deliver fully charged 'ELTRIK LiFePo4' batteries in shifts of 1-2-3 times a day therefor insuring continuous earning for the dealers. The business model is going to be Petrol Pumps of future."
    },
    {
        id: 6,
        icon: icon6,
        title: 'Eltrik LiFePo4 battery enables E-Rickshaws to work in multiple shifts a day',
        description: "Unlike traditional Sealed Lead Acid batteries which needs to be charged for upto 5 to 6 hours, whereas under the company plan we will supply fully charged 'Eltrik Energy' Lithium LiFePo4 battery which will require a few minutes to swap and go back to doing his business. Unlike current scenario of single source of charging, the registered e-rickshaw driver can swap his ‘Eltrik Energy’ Lithium LiFePo4 battery at any of the 'ELTRIK AVENUE' Swapping Stations."
    }
]
const Benefits = () => {
    return (
        <div className="benefits" name="benefits">
            <div className="main-title">
                <h2 className="title">Benefits</h2>
                <img src={underline} className="title-underline" alt="Underline" />
            </div>
            <Grid container spacing={6}>
                {benefits.map((benefit) => {
                    return (
                        <Grid className="benefit" key={benefit.id} item xs={12} sm={6} lg={4}>
                            <Card className="benefit-card" variant="outlined">
                                <div className="icon-container">
                                    <img src={benefit.icon} alt={benefit.icon} />
                                </div>
                                <h4 className="benefit-title">{benefit.title}</h4>
                                <p className="benefit-description">{benefit.description}</p>
                            </Card>
                        </Grid>
                    );
                })
                }
                <Grid className="benefit" item xs={12}>
                    <Card className="benefit-card" variant="outlined">
                        <div className="icon-container left">
                            <img src={icon7} alt="Save Money with Eltrik Energy" />
                        </div>
                        <Grid className="last-benefit" container spacing={4}>
                            <Grid item xs={12} md={3}>
                                <h4 className="benefit-title">Nil Maintenance cost of the battery for the E-rickshaw owner</h4>
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <p className="benefit-description">The health of his 'Eltrik Energy' Lithium LiFePo4 batteries will be monitored and maintained at the company's Charging Plants. The company will insure that the battery is in good condition each time it is charged. This will give access to high-performance 'Eltrik Energy' Lithium LiFePo4 batteries to electric-rickshaw drivers and helps them overcome issues of long charging time, battery maintenance &amp; less mileage. Through "ELTRIK AVENUE" battery swapping station<br /> <br /> This process will increase the income of e-rickshaw driver/owner and lead to a profitable business model for all "ELTRIK AVENUE" Dealers and help the company in taking a sizable market share of this segment</p>
                            </Grid>

                        </Grid>

                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Benefits;