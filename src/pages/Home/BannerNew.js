import React, { useState } from 'react';
// Libraries
import Slider from 'react-slick';

// images
import fuel from 'static/images/fuel.png';
import station from 'static/images/station.png';
import savari from 'static/images/savari.png';

import fuelSlide from 'static/images/slide-1.png';
import stationSlide from 'static/images/slide-2.png';
import savariSlide from 'static/images/slide-3.png';
import fuelSlideMobile from 'static/images/slide-1-mobile.jpg';
import stationSlideMobile from 'static/images/slide-2-mobile.png';
import savariSlideMobile from 'static/images/slide-3-mobile.png';

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
        <Slider className="desktop" {...settings} afterChange={props.nextClick}>
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
const BannerSliderMobile = (props) => {
    return (
        <Slider className="mobile" {...settings} afterChange={props.nextClick}>
            <div>
                <img src={fuelSlideMobile} alt="Banner" />
            </div>
            <div>
                <img src={stationSlideMobile} alt="Banner" />
            </div>
            <div>
                <img src={savariSlideMobile} alt="Banner" />
            </div>
        </Slider>
    )
}
const Banner = () => {
    const[slide,setSlide]=useState(0);
    const[slideValue,setSlideValue]=useState(fuel)

    const nextClick=(e)=>{
        setSlide(e);
        if(slide===0){
            setSlideValue(fuel);
        }
        else if(slide===1){
            setSlideValue(station);
            
        }
        else if(slide===2){
            setSlideValue(savari);

        }
    }
    return (
        <div className="banner">
            <div className="banner-message">
            <img className="image-title" src={slideValue} alt={slideValue} />

            <p className="banner-description">Adopting the marketing model of Petrol Pumps the company offers to supply fully charged <b>'Eltrik Energy' batteries</b> (<i>Lithium</i> LiFePo4) on "Pay-Per-Use" basis. Being a cash and carry model, the business involves low investment and high cash profit generation on a daily basis. <br/><br/> <b>Inviting Dealers for establishing India's First 'Pay-Per-Use' Swapping Stations!</b></p>
            </div>

            <BannerSlider nextClick={nextClick} />
            <BannerSliderMobile nextClick={nextClick} />
            <div id="google_translate_element" />
            <div className="banner-info">
                <h4>'Eltrik Avenue Station'</h4>
                <ul>
                    <li>Low Investment as Batteries will be provided on 'wet lease'</li>
                    <li>No capital cost of installing battery charges at Dealer Outlets</li>
                    <li>Shop measuring 150sq.ft onwards road approaching, NOT necessarily in prime area/ main road </li>
                    <li>Investment of Rs 10 lacs towards stocks to start the Dealership</li>
                    <li>Batteries will be monitored and maintained by the Company</li>
                    <li>The Company will supply charged batteries on daily basis</li>
                </ul>
            </div>
            
        </div>
    );
}
export default Banner;