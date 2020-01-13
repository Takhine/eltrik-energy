import React from 'react';
import banner from 'static/images/banner.svg';
import bannerMobile from 'static/images/banner-mobile.svg';
import underline from 'static/images/primary-underline.svg';
const Banner = () => {
    return (
        <div className="banner" name="home">
            <img id="desktop-banner" src={banner} alt="Banner" />
            <img id="mobile-banner" src={bannerMobile} alt="Banner" />
            <div className="container">
                <div className="main-title">
                    <h1 className="title">Eltrik Energy India</h1>
                    <img src={underline} className="title-underline" alt="Underline" />
                </div>
                <p className="description">Presenting India's first chain of EV battery swapping stations. The Faster, Cheaper, Better way to Charge Electric Rickshaws</p>
                <button className="banner-button">Eltrik Avenue</button>
            </div>
        </div>
    );
}
export default Banner;