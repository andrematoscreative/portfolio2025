import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, About, Contact, Header, Works, Footer, Work_1, Work_2, Work_3 } from './components';
import './app.scss';
import backgroundImage from './assets/andrematos_creative_photo.png';

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation();

  return (
    <div className='app'>
      {/* Only show background on home page */}
      {location.pathname === '/' && (
        <div className='app__shared-background' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      )}

      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <About />
            <Works />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/work/work_1" element={<Work_1 />} />
        <Route path="/work/work_2" element={<Work_2 />} />
        <Route path="/work/work_3" element={<Work_3 />} />
      </Routes>
    </div>
  );
};

export default App;
