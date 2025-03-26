import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { HiMenu } from 'react-icons/hi';
import { SlClose } from 'react-icons/sl';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isWorkPage = location.pathname.startsWith('/work/');

  const sections = ['ABOUT', 'WORK', 'CONTACT'];

  const handleLogoClick = () => {
    // If on home, scroll to top
    if (location.pathname === '/') {
      scroll.scrollToTop({ duration: 500, smooth: true });
    } else {
      navigate('/');
    }
  };

  return (
    <div className='app__navbar'>
      <div className='app__master-container app__navbar-all'>

        {/* Logo */}
        <div className={`app__navbar-logo ${isWorkPage ? 'work-page' : ''}`}>
          <span onClick={handleLogoClick} className="logo-link">
            ANDRÉ MATOS
          </span>
        </div>

        {/* Desktop nav */}
        {!isWorkPage && (
          <ul className='app__navbar-links'>
            {sections.map((item) => (
              <li key={`link-${item}`}>
                <ScrollLink
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={170}
                  activeClass="active"
                >
                  <span>{item}</span>
                </ScrollLink>
              </li>
            ))}
          </ul>
        )}

        {/* Close icon on work pages */}
        {isWorkPage && (
          <div className='app__navbar-close-icon' onClick={() => navigate('/#WORK')}>
            <SlClose />
          </div>
        )}

        {/* Mobile menu icon */}
        <div className='app__navbar-menu-icon' onClick={() => setToggle(true)}>
          <HiMenu />
        </div>

        {/* Mobile menu */}
        {toggle && (
          <motion.div
            className='app__navbar-menu'
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="app__navbar-menu-close" onClick={() => setToggle(false)}>
              <SlClose />
            </div>

            <ul>
              {!isWorkPage &&
                sections.map((item) => (
                  <li key={item}>
                    <ScrollLink
                      to={item}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={100}
                      activeClass="active"
                      onClick={() => setToggle(false)}
                    >
                      <span>{item}</span>
                    </ScrollLink>
                  </li>
                ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
