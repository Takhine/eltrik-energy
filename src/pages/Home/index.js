import React from 'react';
import Banner from './Banner';
import Dealers from './Dealers';
import Benefits from './Benefits';


const Home = () => {
    return (
        <div className="home">
            <Banner />
            <Dealers />
            <Benefits />
        </div>
    );
}
export default Home;