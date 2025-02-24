import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll'; // ✅ Import Locomotive
import './Header.scss';

const Header = () => {
  const textRef = useRef(null);
  const scrollRef = useRef(null); // ✅ Reference for Locomotive Scroll container

  useEffect(() => {
    // ✅ Initialize Locomotive Scroll inside the component
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.07, // Adjusts "delay stop" effect
      multiplier: 1.2, // Adjusts speed
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // ✅ Animate text with GSAP
    const textLines = textRef.current.children;
    gsap.fromTo(
      textLines,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.7, ease: 'power2.out' }
    );

    return () => {
      if (scroll) scroll.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div ref={scrollRef} className="app__header" id="HOME" data-scroll-container>
      <div className="app__master-container app__header-container">
        <h1
          className="app__header-head-text"
          ref={textRef}
          data-scroll
          data-scroll-speed="2"
        >
          <span className="light-gray">Hello, I'm a</span>
          <div data-scroll data-scroll-speed="1.5">software web</div>
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
