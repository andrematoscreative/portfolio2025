import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { HiMenu } from 'react-icons/hi';
import { SlClose } from 'react-icons/sl';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState('HOME');
    const [isHome, setIsHome] = useState(true);

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

    return (
        <div className='app__navbar'>
            <div className='app__master-container app__navbar-all'>
                <div className={`app__navbar-logo ${isHome ? 'home-active' : ''}`}>
                    <a href="#HOME">ANDRÉ MATOS</a>
                </div>

                <ul className='app__navbar-links'>
                    {sections.map((item) => (
                        <li key={`link-${item}`}>
                            <a href={`#${item}`} className={item === activeLink ? 'active' : ''}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='app__navbar-menu-icon' onClick={() => setToggle(true)}>
                    <HiMenu />
                </div>

                {toggle && (
                    <motion.div 
                        className='app__navbar-menu'
                        whileInView={{ x: [200, 0] }} 
                        transition={{ duration: 0.3, ease: 'easeOut' }}>
                            
                        <div className="app__navbar-menu-close" onClick={() => setToggle(false)}>
                            <SlClose />
                        </div>

                        <ul>
                            {sections.map((item) => (
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