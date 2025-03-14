import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './About.scss';

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textLines = textRef.current.children;
    gsap.fromTo(
      textLines,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, stagger: 0.4, duration: 0.7, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className='app__about' id='ABOUT'>
      <div className='app__about-info app__master-container'>
        <motion.h2 
          whileInView={{ x: [-90, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='app__about-title'
        >
          ABOUT
        </motion.h2>

        <article className='app__about-content'>
          <p ref={textRef} className='app__about-text'>
            <span className="light-gray">
              Avid explorer of design, software, and emerging tech. I craft stunning and functional experiences, always pushing web development boundaries.
            </span>
            <br />
            Proficient in HTML, CSS, JavaScript and always eager to learn more.
            <br />
            <span className="light-gray">
              Fascinated by technology's transformative power.
            </span>
            <br />
            <span className='app__about-text-secondary'>
              Tech enthusiast exploring the ever-evolving world of design, software development, and emerging technologies. Constantly striving for creative excellence.
            </span>
          </p>

          <motion.nav
            whileInView={{ y: [-25, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
