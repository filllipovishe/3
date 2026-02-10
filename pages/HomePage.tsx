
import React from 'react';
import Header from '../components/common/Header.tsx';
import Footer from '../components/common/Footer.tsx';
import MobileFixedBar from '../components/common/MobileFixedBar.tsx';
import Hero from '../components/sections/Hero.tsx';
import WhatHappened from '../components/sections/WhatHappened.tsx';
import Prices from '../components/sections/Prices.tsx';
import Doctors from '../components/sections/Doctors.tsx';
import FAQ from '../components/sections/FAQ.tsx';
import Persuasion from '../components/sections/Persuasion.tsx';
import Conditions from '../components/sections/Conditions.tsx';

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