import React, { useState, useEffect } from 'react';
import banner from 'static/images/banner.svg';
import bannerMobile from 'static/images/banner-mobile.svg';
import underline from 'static/images/primary-underline.svg';
// Libraries
import Slider from 'react-slick';
import bannerMessage from 'static/images/banner-message.svg';
import { fade } from '@material-ui/core';

// images
import fuel from 'static/images/fuel.png';
import station from 'static/images/station.png';
import savari from 'static/images/savari.png';

import fuelSlide from 'static/images/slide-1.png';
import stationSlide from 'static/images/slide-2.png';
import savariSlide from 'static/images/slide-3.png';


// Slick Slider
const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    accessibility:false,
    draggable:false,
    focusOnSelect:false,
    pauseOnHover:false,
    pauseOnFocus:false,
    swipe:false,
}

const BannerSlider = (props) => {
    return (
        <Slider {...settings} afterChange={props.nextClick}>
            <div>
                <img src={fuelSlide} alt="Banner" />
            </div>
            <div>
                <img src={stationSlide} alt="Banner" />
            </div>
            <div>
                <img src={savariSlide} alt="Banner" />
            </div>
        </Slider>
    )
}
const Banner = () => {
    const[slide,setSlide]=useState(0);
    const[slideValue,setSlideValue]=useState(fuel)
    useEffect(()=>{
        if(slide===0){
            setSlideValue(fuel);
        }
        else if(slide===1){
            setSlideValue(station);
            
        }
        else{
            setSlideValue(savari);

        }
    },[slide])

    const nextClick=(e)=>{
        setSlide(e);
    }
    return (
        <div className="banner">
            <div className="banner-message">
            <img className="image-title" src={slideValue} alt={slideValue} />

            <p className="banner-description">Adopting the marketing model of Petrol Pumps the company offers to supply fully charged L-ion batteries on "Pay-Per-Use" basis. Being a cash and carry model, the business involved low investment and high cash profit generation on a daily basis. <br/><br/> <b>Inviting dealers for establishing India's First 'Pay-Per-Use' model!</b></p>
            </div>
            <div className="banner-info">
                <h4>'Eltrik Fuel Station'</h4>
                <ul>
                    <li>Low Investment as Batteries will be provided on 'wet lease'</li>
                    <li>No capital cost of installing battery charges at dealer outlets</li>
                    <li>Shop measuring 150sq.ft onwards to start the dealership</li>
                    <li>Batteries will be monitored and maintained by the Company</li>
                    <li>The Company will supply charged batteries on daily basis</li>
                </ul>
            </div>
            <BannerSlider nextClick={nextClick} />
        </div>
    );
}
export default Banner;