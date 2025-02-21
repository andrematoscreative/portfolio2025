import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textLines = textRef.current.children;
    gsap.fromTo(textLines, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, stagger: 0.5, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className='app__header' id='HOME'>     
      <div className='app__master-container app__header-container'>
          <h1 className='app__header-head-text' ref={textRef}>
            <span className="light-gray">Hello World! I'm a</span>
            <div>software web developer</div>
            <span className="light-gray">with a passion for technology.</span>
          </h1>
      </div>
      <div className='app__header-background'></div>
    </div>
  );
};

export default Header;
