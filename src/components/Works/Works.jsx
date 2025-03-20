import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { images } from '../../constants';
import './Works.scss';

gsap.registerPlugin(ScrollTrigger);

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

  const workItems = [
    { title: 'PLATE PERFECTION', description: 'Restaurant website', bg: images.card_1, link: '/work/plate-perfection' },
    { title: 'CREATIVE BRANDING', description: 'André Matos Creative Branding', bg: images.card_2, link: '/work/branding' },
    { title: 'MEDICAL APP', description: 'Find my Medical Spot App', bg: images.card_3, link: '/work/medical-app' },
    { title: 'E-COMMERCE WEBSITE', description: 'Online retail store', bg: images.card_4, link: '/work/ecommerce' }
  ];

  return (
    <div className='app__Work' id='WORK'>
      <div ref={backgroundRef} className='app__Work-background'></div>

      <div className='app__Work-info app__master-container'>
        <div className='app__Work-title'>WORK</div>

        <div className="app__Work-cards-container">
          {workItems.map((work, index) => (
            <a href={work.link} key={index} className="app__Work-card-wrapper">
              <div className="app__Work-card">
                <div className="card-background" style={{ backgroundImage: `url(${work.bg})` }}></div>
                <div className="card-title">{work.title}</div>
                <div className="card-description">{work.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
