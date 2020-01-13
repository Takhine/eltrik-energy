import React from 'react';
import banner from 'static/images/banner.svg';
import bannerMobile from 'static/images/banner-mobile.svg';
import underline from 'static/images/primary-underline.svg';
// Libraries
import Slider from 'react-slick';
import bannerMessage from 'static/images/banner-message.svg';
import { fade } from '@material-ui/core';



// Slick Slider
const settings = {
    dots: false,
    infinite: true,
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
}

const BannerSlider = () => {
    return (
        <Slider {...settings}>
            <div>
                <img src="https://i.imgur.com/Ac9iszO.png" alt="Banner" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1473016710036-1fe01c8f9b78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=812&q=80" alt="Banner" />
            </div>
            <div>
                <img src="https://i.imgur.com/Ac9iszO.png" alt="Banner" />
            </div>
        </Slider>
    )
}
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-message">
                <img src={bannerMessage} alt="Banner Message" />
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
                <BannerSlider />
        </div>
    );
}
export default Banner;