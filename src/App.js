import React from 'react';
import { Navbar,About,Contact,Header,Skills,Works,Testimonials,Footer } from './components';
import './app.scss';

export const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        
        <Works />
        
        <Contact />
        <Footer />
    </div>
  );
}

export default App
