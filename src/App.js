import React from 'react';
import { Navbar, About, Contact, Header, Works, Footer } from './components';
import './app.scss';
import backgroundImage from './assets/andrematos_creative_photo.png';
import backgroundImage2 from './assets/work_background.png';

export const App = () => {
  return (
    <div className='app'>
      <div className='app__shared-background' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <Navbar />
      <Header />
      <About />
      <div className='app__shared-background2' style={{ backgroundImage: `url(${backgroundImage2})` }}></div>
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
