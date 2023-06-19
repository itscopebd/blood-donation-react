import React from 'react';
import Announcement from '../components/Announcement/announcement';
import NavBar from '../components/NavBar/NavBar';
import HeroBanner from '../components/HeroBanner/HeroBanner';

const Home = () => {
    return (
        <div>
            <Announcement></Announcement>
            <NavBar></NavBar>
            <HeroBanner></HeroBanner>
        </div>
    );
};

export default Home;