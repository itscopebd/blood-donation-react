import React from 'react';
import Announcement from '../components/Announcement/announcement';
import NavBar from '../components/NavBar/NavBar';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import AboutUs from '../components/WhoWeAre/AboutUs';

const Home = () => {
    return (
        <div>
            <Announcement></Announcement>
            <NavBar></NavBar>
            <HeroBanner></HeroBanner>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;