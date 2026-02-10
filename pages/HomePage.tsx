
import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import MobileFixedBar from '../components/common/MobileFixedBar';
import Hero from '../components/sections/Hero';
import WhatHappened from '../components/sections/WhatHappened';
import Prices from '../components/sections/Prices';
import Doctors from '../components/sections/Doctors';
import FAQ from '../components/sections/FAQ';
import Persuasion from '../components/sections/Persuasion';
import Conditions from '../components/sections/Conditions';

interface HomePageProps {
  isMobile: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ isMobile }) => {
  return (
    <div className="w-full">
      {!isMobile && <Header />}
      <Hero />
      <WhatHappened />
      <Prices />
      <Doctors />
      <FAQ />
      <Persuasion />
      <Conditions />
      {!isMobile && <Footer />}
      {isMobile && <MobileFixedBar />}
    </div>
  );
};

export default HomePage;
