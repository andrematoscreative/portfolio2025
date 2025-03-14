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
      y: '-20%', // Moves background upwards (adjust this for stronger effect)
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.app__Work',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1, // Smooth scroll effect
      },
    });
  }, []);

  return (
    <div className='app__Work' id='WORK'>
      {/* Parallax Background */}
      <div ref={backgroundRef} className='app__Work-background'></div>

        <div className='app__Work-info app__master-container'>
          <motion.div
            whileInView={{ x: [-90, 0], opacity: [0,1] }}
            transition={{ duration: 0.5 }}
            className='app__Work-title'>WORK</motion.div>

          <div className="app__Work-cards-container">
            <div className="app__Work-card">
              <div className='card-1'>Plate Perfection</div>
              <div className="card-description">Restaurant website</div>
            </div>
            <div className="app__Work-card">
              <img src={images.card_1} alt='André Matos Creative Branding' />
              <div className="card-description">André Matos Creative Branding...Coming soon...</div>
            </div>
            <div className="app__Work-card">
              <img src={images.card_3} alt='Find my Medical Spot App' />
              <div className="card-description">Find my Medical Spot App...Coming soon...</div>
            </div>
            <div className="app__Work-card">
              <img src={images.card_3} alt='Find my Medical Spot App' />
              <div className="card-description">Find my Medical Spot App...Coming soon...</div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Works;
