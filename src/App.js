import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards';

import Food from './components/Food';
import End from './components/End';
function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <HeadlineCards />
     
      <Food />
      <End />
    </div>
  );
}

export default App;
