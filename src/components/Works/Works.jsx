import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import { images } from '../../constants';
import './Works.scss';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const Works = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    gsap.to(backgroundRef.current, {
      y: '-20%',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.app__Work',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className='app__Work' id='WORK'>

      <div ref={backgroundRef} className='app__Work-background'></div>

        <div className='app__Work-info app__master-container'>
          <motion.div
            whileInView={{ x: [-90, 0], opacity: [0,1] }}
            transition={{ duration: 0.5 }}
            className='app__Work-title'>WORK</motion.div>

          <div className="app__Work-cards-container">
            <div className="app__Work-card">
              <div className='card-title'>Plate Perfection</div>
              <div className="card-description">Restaurant website</div>
            </div>
            <div className="app__Work-card">
              <div className='card-title'>Plate Perfection</div>
              <div className="card-description">André Matos Creative Branding</div>
            </div>
            <div className="app__Work-card">
              <div className='card-title'>Plate Perfection</div>
              <div className="card-description">Find my Medical Spot App</div>
            </div>
            <div className="app__Work-card">
              <div className='card-title'>Plate Perfection</div>
              <div className="card-description">Find my Medical Spot App</div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Works;
