import React, { useEffect } from 'react';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/MeetTheDeveloper';
import Skills from './components/Skills/Skills';
import Footer from './components/Commons/Footer';
import Navbar from './components/Commons/Navbar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './textBlock';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Experience from './components/Experience/Experience';
import WorkPortfolio from './components/WorkPortfolio/WorkPortfolio';


function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<LandingPage />} />
          <Route path='/contact' element={<LandingPage />} />
          <Route path='/experiences' element={<Experience />} />
          <Route path='/projects' element={<WorkPortfolio />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
