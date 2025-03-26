import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
    if (location.pathname === '/') {
      scroll.scrollToTop({ duration: 300, smooth: true });
    } else {
      navigate('/');
    }
  };

  return (
    <div className='app__navbar'>
      <div className='app__master-container app__navbar-all'>
        <div className={`app__navbar-logo ${isWorkPage ? 'work-page' : ''}`}>
          <span onClick={handleLogoClick} className="logo-link">
            ANDRÉ<br />MATOS
          </span>
        </div>

        {!isWorkPage && (
          <ul className='app__navbar-links'>
            {sections.map((item) => (
              <li key={item} className='nav-item'>
                <ScrollLink
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={80}
                  activeClass='active'
                  className='nav-link'
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>
        )}

        {isWorkPage && (
          <div className='app__navbar-close-icon' onClick={() => navigate('/#WORK')}>
            <SlClose />
          </div>
        )}

        <div className='app__navbar-menu-icon' onClick={() => setToggle(true)}>
          <HiMenu />
        </div>

        {toggle && (
          <motion.div
            className='app__navbar-menu'
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className='app__navbar-menu-close' onClick={() => setToggle(false)}>
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
                      duration={80}
                      activeClass='active'
                      className='nav-link'
                      onClick={() => setToggle(false)}
                    >
                      {item}
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
