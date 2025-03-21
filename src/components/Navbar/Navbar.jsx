import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import { HiMenu } from 'react-icons/hi';
import { SlClose } from 'react-icons/sl';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState('HOME');
    const [isHome, setIsHome] = useState(true);
    const location = useLocation();
    const navigate = useNavigate(); // Hook to navigate programmatically

    const sections = ['ABOUT', 'WORK', 'CONTACT'];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            let currentSection = 'HOME';
            setIsHome(scrollPosition < 10);
            
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        currentSection = section;
                    }
                }
            });
            setActiveLink(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Check if the user is on a work page
    const isWorkPage = location.pathname.startsWith('/work/');

    return (
        <div className='app__navbar'>
            <div className='app__master-container app__navbar-all'>
                {/* Logo that changes color on work pages */}
                <div className={`app__navbar-logo ${isWorkPage ? 'work-page' : ''}`}>
                    <Link to="/">ANDRÉ MATOS</Link>
                </div>

                {/* Navigation Links (Hidden on Work Pages) */}
                {!isWorkPage && (
                    <ul className='app__navbar-links'>
                        {sections.map((item) => (
                            <li key={`link-${item}`}>
                                <a href={`#${item}`} className={item === activeLink ? 'active' : ''}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Close Button (Only appears on Work Pages) */}
                {isWorkPage && (
                    <div className='app__navbar-close-icon' onClick={() => navigate('/#WORK')}>
                        <SlClose />
                    </div>
                )}

                {/* Mobile Menu Icon */}
                <div className='app__navbar-menu-icon' onClick={() => setToggle(true)}>
                    <HiMenu />
                </div>

                {/* Mobile Menu */}
                {toggle && (
                    <motion.div 
                        className='app__navbar-menu'
                        whileInView={{ x: [200, 0] }} 
                        transition={{ duration: 0.3, ease: 'easeOut' }}>

                        <div className="app__navbar-menu-close" onClick={() => setToggle(false)}>
                            <SlClose />
                        </div>

                        <ul>
                            {!isWorkPage && sections.map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
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
