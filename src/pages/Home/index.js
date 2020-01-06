import React from 'react';
import Banner from './Banner';
import Dealers from './Dealers';
import Benefits from './Benefits';
import Eltrik from './Eltrik';
import About from './About';

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <Dealers />
            <Benefits />
            <Eltrik />
            <About />
        </div>
    );
}
export default Home;