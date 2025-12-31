import HealthCare from '@/components/AboutUs/HealthCare';
import MoreAboutUs from '@/components/AboutUs/MoreAboutUs';
import TeamSection from '@/components/AboutUs/TeamSection';
import React from 'react';

const About = () => {
    return (
        <div className='pt-26 bg-white'>
            <MoreAboutUs />
            <HealthCare />
            <TeamSection />
        </div>
    );
};

export default About;