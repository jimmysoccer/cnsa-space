
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import MissionIntro from '../components/home/MissionIntro';
import FeaturedMissions from '../components/home/FeaturedMissions';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionIntro />
      <FeaturedMissions />
    </div>
  );
};

export default Home;
