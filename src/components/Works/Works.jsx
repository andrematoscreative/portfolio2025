import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Works.scss';

const WorkCard = ({ image, alt, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`app__Work-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="card-image" src={image} alt={alt} />
      {isHovered && <div className="card-description">{description}</div>}
    </div>
  );
};

const Works = () => {
  return (
    <div className='app__Work' id='WORK'>
        <div className='app__master-container'>
            
                <div className='app__Work-info'>
                    <div className='app__Work-title'>
                        <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                        className='app__Work-title-title'
                        >
                        Work
                        </motion.div>
                    </div>

                    <motion.div
                    whileInView={{ y: [-30, 0], opacity: [0,1] }}
                    transition={{ duration: 1.5 }} className="app__Work-cards-container">
                        <WorkCard image={images.card_2} alt='Plate Perfection restaurant website' description='Plate Perfection restaurant website...Coming soon...'/>
                        <WorkCard image={images.card_1} alt='André Matos Creative Branding' description='André Matos Creative Branding...Coming soon...'/>
                        <WorkCard image={images.card_3} alt='Find my Medical Spot App' description='Find my Medical Spot App...Coming soon...'/>
                        {/* <WorkCard image={images.logo} alt='andre matos creative logo' description='Coming soon...'/> */}
                    </motion.div>
                </div>
        </div>
        <div className='app__Work_background'></div>
    </div>
  );
};

export default Works;