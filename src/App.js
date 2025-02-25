import React, { useEffect, useRef } from 'react';
import { Navbar, About, Contact, Header, Works, Footer } from './components';
import './app.scss';
import backgroundImage from './assets/andrematos_creative_photo.png';

export const App = () => {
  
  return (
    <div className='app'>
      <div className='app__shared-background' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <Navbar />
      <Header />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
