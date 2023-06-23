import React from 'react';
import Announcement from '../components/Announcement/announcement';
import NavBar from '../components/NavBar/NavBar';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import AboutUs from '../components/WhoWeAre/AboutUs';
import OurVolunteers from '../components/OurVolunteers/OurVolunteers';
import OurCampaigns from '../components/OurCampaigns/OurCampaigns';
import BecomeVolunteer from '../components/BecomeVolunteer/BecomeVolunteer';
import Counter from '../components/Counter/Counter';

const Home = () => {
    return (
        <div>
            <Announcement></Announcement>
            <NavBar></NavBar>
            <HeroBanner></HeroBanner>
            <AboutUs></AboutUs>
            <OurVolunteers></OurVolunteers>
            <OurCampaigns></OurCampaigns>
            <BecomeVolunteer></BecomeVolunteer>
            <Counter></Counter>
        </div>
    );
};

export default Home;