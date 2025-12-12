import React from 'react';
import Hero from '../components/myCompo/Hero';
import TechCard from '../components/myCompo/TechCard';
import LightWeight from '../components/myCompo/Lightweigh';
import LearningCard from '../components/myCompo/LearningCard';
import Free from '../components/myCompo/Free';
import TopRes from '../components/myCompo/TopRes';
import ResEditor from '../components/myCompo/ResEditor';

const Home = () => {
    return (
        <div>
            <Hero/>
            <TechCard/>
            <LightWeight/>
            <LearningCard/>
            <Free/>
            <TopRes/>
            <ResEditor/>
        </div>
    );
};

export default Home;