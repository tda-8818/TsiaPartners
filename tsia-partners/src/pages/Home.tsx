import React from 'react';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Values from '../components/sections/Values';

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