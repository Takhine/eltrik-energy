import React from 'react';
import {
    Grid,
    Card
} from '@material-ui/core';
// Images
import underline from 'static/images/primary-underline.svg';
import delhi from 'static/images/delhi.png'
import windmills from 'static/images/windmills.png'
import delhiMobile from 'static/images/delhi-mobile.png'
import windmillsMobile from 'static/images/windmills-mobile.png'
import vision from 'static/images/vision.png';
import focus from 'static/images/focus.png';
import value from 'static/images/value.png';


const About = () => {
    return (
        <div className="about" name="about">
            <div className="main-title">
                <h2 className="title">About us</h2>
                <img src={underline} className="title-underline" alt="Underline" />
            </div>
            <div className="about-cases-container">
                <div className="about-case delhi">
                    <Card className="about-case-card">
                        <Grid container spacing={4}>
                            <Grid className="image-container" item xs={12} md={4} lg={6}>
                                <h3>The Pollution Concern</h3>
                                <img className="desktop" src={delhi} alt="Green Revolution" />
                                <img className="mobile" src={delhiMobile} alt="Green Revolution" />
                            </Grid>
                            <Grid className="about-case-description" item xs={12} md={8} lg={6}>
                                <h3>New Delhi</h3>
                                <p>An unprecedented public health emergency has been declared in Delhi and nearby areas by the pollution control body mandated by the Supreme Court, as the region has been trapped in a toxic smog since Diwali. Schools in the capital have been asked to stop all outdoor activities and sports till November 5 to minimize exposure of children to pollution. (news report, Nov 2019)</p>
                                <p>A recent survey showed that top ten of the world's most polluted cities in terms of PM2.5-particulate matter in the air so small that they lodge directly in the lungs when breathed in-are in India, New Delhi and surrounding towns in NCR tops the list. Not to be left far behind, seven are in Uttar Pradesh, three are from Bihar.</p>
                                <p>According to a report by the Energy and Research Institute (TER) who studied auto-rickshaw emissions in Bengaluru, 7.5% of total emissions in India from the transport and automotive sector.</p>
                            </Grid>
                        </Grid>
                    </Card>
                </div>
                <br />
                <div className="about-case mumbai">
                    <Card className="about-case-card">
                        <Grid container spacing={4}>
                            <Grid className="image-container" item xs={12} md={4} lg={6}>
                                <h3>Government welcomes clean fuel</h3>
                                <img className="desktop" src={windmills} alt="Delhi Pollutions" />
                                <img className="mobile" src={windmillsMobile} alt="Delhi Pollutions" />

                            </Grid>
                            <Grid className="about-case-description" item xs={12} md={8} lg={6}>
                                <p>Government of India has set out a desirable and ambitious roadmap for pure electric vehicles with a transformative solution of shared connected electric, mobility, wherein, 100% public transport vehicles and 40% of private vehicles can become electric by 2030.</p>
                                <p>This vision needs to be expanded to have a future of all electric vehicles. The government of India has demonstrated a strong commitment in introducing electric mobility in India and announced a very ambitious plan of making India a primarily electric car driven nation by 2030. The government in this regard launched a scheme for the Faster Adoption and Manufacturing of (hybrif &) Electric Vehicles in India (FAME India) under the National Electric Mobility Mission (NEMM) in 2015.</p>
                                <div className="shortfalls">
                                    <h4>The Current Short Falls</h4>
                                    <p>a) Affordable gap</p>
                                    <p>b) Low level of non-existent public charging infrastructure</p>
                                    <p>c) Primitive technology</p>
                                    <p>d) Unorganized market</p>
                                    <p>e) Electric power supply etc.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Card>
                </div>
            </div>
            <p className="about-subtitle">ELTRIK ENERGY INDIA</p>
            <p className="about-description">is being managed by a group of professionals with years of experience in their current and diversified field in marketing, manufacturing, logistic and wholesale trade both local and international. </p>
            <Grid container spacing={8}>
                <Grid className="about-grid" item xs={12} sm={6} lg={4} xl={3}>
                    <Card className="about-card">
                        <div className="icon-container">
                            <img src={vision} alt="Eltrik Energy Vision" />
                        </div>
                        <h2 className="card-title">Vision</h2>
                        <p className="card-description">
                            To be the market leaders as the first mover to offer end-to-end solution to the EV owner and to take the government mission for greener environment in an organized and profitable way to all the stake holders
                        </p>
                    </Card>
                </Grid>
                <Grid className="about-grid" item xs={12} sm={6} lg={4} xl={6}>
                    <Card className="about-card">
                        <div className="icon-container">
                            <img src={focus} alt="Eltrik Energy Focus" />
                        </div>
                        <h2 className="card-title">Focus</h2>
                        <p className="card-description">
                            Our Focus will be the end users mainly in urban and semi urban areas who provide clean, safe and affordable last mile connectivity to the commuter and for deliverying goods. These will be mainly: <br />
                        </p>
                        <ol>
                            <li>Rickshaw owners/drivers (three wheelers) in phase one</li>
                            <li>Bus fleet owners (mini and school buses) in phase two</li>
                            <li>Two wheelers (private owners) in phase three</li>
                        </ol>
                    </Card>
                </Grid>
                <Grid className="about-grid" item xs={12} sm={12} lg={4} xl={3}>
                    <Card className="about-card">
                        <div className="icon-container">
                            <img src={value} alt="Eltrik Energy Value" />
                        </div>
                        <h2 className="card-title">Value</h2>
                        <p className="card-description">
                            For the rickshaw owners/drivers, lack of access to funds and confidence to try new technology were barriers to upgrading to an electric vehicle (EV) independently. With this in mind, the company has tied up with multiple entities involved in procurring a ready-to-go drive e-rickshaw. We are a bridge connecting the person to an e-rickshaw.
                        </p>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;