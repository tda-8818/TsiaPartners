import React from 'react';
import Hero from '../components/sections/Hero';
import Values from '../components/sections/Values';
import WhyChooseUs from '../components/sections/WhyChooseUs';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Values />
      <WhyChooseUs />
    </div>
  );
};

export default Home;