import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import About from '../About';
import Navbar from'../Navbar';

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
    </>
  )
}

export default Home;
