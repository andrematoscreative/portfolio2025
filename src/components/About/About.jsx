import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { BsGithub,BsLinkedin } from 'react-icons/bs';
import { SiWakatime } from 'react-icons/si';
import './About.scss';

const About = () => {
  return (
    <div className='app__About' id='ABOUT'>
      <div className='app__master-container app_flex'>
        <div className='app__About-info'> 

          <div className='app__About-title'>
            <motion.div
            whileInView={{ x: [-90, 0], opacity: [0,1] }}
            transition={{ duration: 1 }}
            className='app__About-title-title'>About</motion.div>

          </div>
          <div className='app__About-desc'>
              <div className='app__About-desc-content'>
                  <motion.div
                  whileInView={{ y: [-30, 0], opacity: [0,1] }}
                  transition={{ duration: 1.5 }} className='app__About-desc-container'>
                  <div className='app__About-desc-container-text '>
                      {/* <p>Tech enthusiast exploring the ever-evolving world of design,software development, and emerging technologies. Constantly striving for creative excellence.</p>
                        <p>Creating experiences that are both beautiful and functional. Constantly learning and pushing the boundaries of web development.</p>
                        <b>Let's work on your vision!</b>
                    <p>I'm proficient in a variety of programming languages, including HTML, CSS, JavaScript, and I'm always eager to learn new ones.</p><p> Above all, I'm a person who is constantly fascinated by the ways in which technology can transform the world we live in.</p><b>Let's connect and see how we can bring your ideas to life!</b> */}
                    <p>Avid explorer of design, software, and emerging tech. I craft stunning and functional experiences, always pushing web development boundaries. <p></p>Proficient in HTML, CSS, JavaScript and always eager to learn more.</p><p> Fascinated by technology's transformative power.</p>
                  </div>
                  </motion.div>
                  <motion.div
                  whileInView={{ y: [-15, 0], opacity: [0,1] }}
                  transition={{ duration: 1, delay:1}} className='app__About-desc-container-icons'>
                      <a className="app__About-desc-container-linkedin" href="https://linkedin.com/in/andrematoscreative"target="_blank">
                      <BsLinkedin/>
                      </a>
                      <a className="app__About-container-git"href="https://github.com/andrematoscreative" target="_blank">
                      <BsGithub/>
                      </a>
                      <a className="app__About-container-connections-wakatime"href="https://wakatime.com/@andrematoscreative"target="_blank">
                      <SiWakatime/>
                      </a>
                  </motion.div> 
              </div>
            <motion.div
            whileInView={{ y: [30, 0], opacity: [0,1] }}
            transition={{ duration: 1.5 }}className='app__About-desc-img'>
            <img src={images.andrematos_creative_photo}alt='andrematos_creative_photo'/>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;