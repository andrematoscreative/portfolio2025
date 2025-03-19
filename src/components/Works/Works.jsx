import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import './Works.scss';

// Import images
import backgroundImage from '../../assets/work_background.png';
import card1 from '../../assets/card_1.png';
import card2 from '../../assets/card_2.png';
import card3 from '../../assets/card_3.png';
import card1Hover from '../../assets/card_1hover.png';
import card2Hover from '../../assets/card_2hover.png';
import card3Hover from '../../assets/card_3hover.png';

gsap.registerPlugin(ScrollTrigger);

const worksData = [
  {
    title: "Plate Perfection",
    description: "Restaurant website",
    link: "https://yourlink.com/project1",
    //image: card1,
    hoverImage: card1Hover
  },
  {
    title: "André Matos Creative Branding",
    description: "Branding Portfolio",
    link: "https://yourlink.com/project2",
    //image: card2,
    hoverImage: card2Hover
  },
  {
    title: "Find my Medical Spot App",
    description: "Medical Finder App",
    link: "https://yourlink.com/project3",
    //image: card3,
    hoverImage: card3Hover
  }
];

const Works = () => {
  const backgroundRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      {/* Parallax Background */}
      <div ref={backgroundRef} className='app__Work-background' style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      <div className='app__Work-info app__master-container'>
        <motion.div
          whileInView={{ x: [-90, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='app__Work-title'
        >
          WORK
        </motion.div>

        {/* Work Cards */}
        <div className="app__Work-cards-container">
          {worksData.map((work, index) => (
            <div 
              className="app__Work-card-wrapper"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a href={work.link} target="_blank" rel="noopener noreferrer" className="app__Work-card">
                {/* Background Image Transition on Hover */}
                <div 
                  className="card-background" 
                  style={{ 
                    backgroundImage: hoveredIndex === index ? `url(${work.hoverImage})` : `url(${work.image})`,
                    opacity: 1,
                  }}
                ></div>
                <div className="card-title">{work.title}</div>
                <div className="card-description">{work.description}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
