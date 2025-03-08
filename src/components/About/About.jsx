import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { images } from '../../constants';
import { BsGithub,BsLinkedin } from 'react-icons/bs';
import { SiWakatime } from 'react-icons/si';
import './About.scss';

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textLines = textRef.current.children;
    gsap.fromTo(textLines, 
      { opacity: 0, y:25 }, 
      { opacity: 1, y: 0, stagger: 0.4, duration: 0.7, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className='app__About' id='ABOUT'>
      <div className='app__master-container'>
        <div className='app__About-info'> 

          
            <motion.div whileInView={{ x: [-90, 0], opacity: [0,1] }}
            transition={{ duration: 0.5 }}
            className='app__About-title'>ABOUT</motion.div>

          
          <div className='app__About-desc'>
                  <div className='app__About-desc-container-text ' ref={textRef}>
                      {/* <p>Tech enthusiast exploring the ever-evolving world of design,software development, and emerging technologies. Constantly striving for creative excellence.</p>
                        <p>Creating experiences that are both beautiful and functional. Constantly learning and pushing the boundaries of web development.</p>
                        <b>Let's work on your vision!</b>
                    <p>I'm proficient in a variety of programming languages, including HTML, CSS, JavaScript, and I'm always eager to learn new ones.</p><p> Above all, I'm a person who is constantly fascinated by the ways in which technology can transform the world we live in.</p><b>Let's connect and see how we can bring your ideas to life!</b> */}
                    <div>Avid explorer of design, software, and emerging tech. I craft stunning and functional experiences, always pushing web development boundaries. </div>
                    <div>Proficient in HTML, CSS, JavaScript and always eager to learn more.</div>
                    <div> Fascinated by technology's transformative power.</div>
                  </div>
                  <motion.div
                  whileInView={{ y: [-25, 0], opacity: [0,1] }}
                  transition={{ duration: 0.5, delay:0.4}} className='app__About-desc-container-icons'>
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
        </div>
      </div>
    </div>
  )
}

export default About;