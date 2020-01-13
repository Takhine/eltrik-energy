import React from 'react';
import Banner from './BannerNew';
import Dealers from './Dealers';
import Benefits from './Benefits';
import Eltrik from './Eltrik';
import About from './About';

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <Benefits />
            <About />
            <Eltrik />
        </div>
    );
}
export default Home;