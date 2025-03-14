import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Header.scss';

const Header = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textLines = textRef.current.children;

    gsap.fromTo(
      textLines,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.7, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="app__header" id="HOME" data-scroll-section>
      <div className="app__header-container app__master-container">
        
        <h1 
          className="app__header-head-text" 
          ref={textRef}
          data-scroll
          data-scroll-speed="2">
          <span className="light-gray">Hello, I'm a</span>
          <div data-scroll data-scroll-speed="1.5">software web </div>
          <div data-scroll data-scroll-speed="1.2">developer</div>
          <span className="light-gray" data-scroll data-scroll-speed="1">
            with a passion
          </span>
          <span className="light-gray" data-scroll data-scroll-speed="0.8">
            for technology.
          </span>
        </h1>

      </div>
    </div>
  );
};

export default Header;
