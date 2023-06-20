import React from 'react';
import OurVolunteerCardOne from './OurVolunteerCardOne';
import Marquee from 'react-fast-marquee';

const OurVolunteers = () => {
    return (
        <div className='container mx-auto my-16'>
               <h3 className='text-center text-6xl text-primary mt-16 mb-5'>Our Volunteers</h3>
               <p className='text-center mb-16 text-xl'>The volunteers who give their time and talents help to fulfill our mission.</p>
            <Marquee pauseOnHover={true} autoFill={true} gradient={true}>
            <OurVolunteerCardOne></OurVolunteerCardOne>
            </Marquee>
        </div>
    );
};

export default OurVolunteers;