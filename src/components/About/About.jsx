import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './About.scss';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const [isDarkened, setIsDarkened] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#WORK",
      start: "top 60%",
      end: "top 40%",
      scrub: 1,
      onEnter: () => setIsDarkened(true),
      onLeaveBack: () => setIsDarkened(false),
    });
  }, []);

  return (
    <section className={`app__about ${isDarkened ? 'darkened' : ''}`} id='ABOUT' ref={aboutRef}>
      <div className='app__about-info app__master-container'>
        <motion.div 
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className='app__about-title'>
          ABOUT
        </motion.div>

        <article className='app__about-content'>
          <p className='app__about-text'>
            <span className="light-gray">
            I’m a Portugal-based software developer with a background in IT and multimedia.
            </span>
            <br />
            I work with JavaScript, Python, C#, and Java, using tools like React, Node, and .NET.
            <br />
            <span className='app__about-text-secondary'>
            I enjoy turning ideas into clean, functional digital experiences — focused on performance, usability, and real-world problem solving.
            I’ve worked on web design and scalable app projects, always learning and using technology to create meaningful user experiences.
            </span>
          </p>

          <motion.nav
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='app__about-icons'
          >
            <a href="https://linkedin.com/in/andrematoscreative" target="_blank" className="app__about-icon">
              <BsLinkedin />
            </a>
            <a href="https://github.com/andrematoscreative" target="_blank" className="app__about-icon">
              <BsGithub />
            </a>
          </motion.nav>
        </article>
      </div>
    </section>
  );
};

export default About;
