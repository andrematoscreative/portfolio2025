import React from 'react';
import './Work_1.scss';

const Work_1 = () => {
  return (
    <div className="work_1 ">
      <header className="work_1__title">
        <div className='work_1__title-text'>Plate Perfection</div>
        <div className='work_1__title-subtitle'>Elevating the digital experience of fine dining.</div>
      </header>

      
      <div className="work_1__section1">
        <div className='work_1__section1-title'>Overview</div>
        <div className='work_1__section1-text'>A modern restaurant website.
          Plate Perfection is a modern restaurant website designed to provide an immersive dining experience online. The site features a visually appealing layout, intuitive navigation, and responsive design, ensuring accessibility across various devices.
        </div>
      </div>

      <div className="work_1__section2">
        <div className='work_1__section2-title'>Design Aesthetics</div>
        <div className='work_1__section2-text'>A blend of elegance and functionality.
          The website employs a minimalist design with a focus on high-quality imagery and clean typography. The color palette is warm and inviting, reflecting the ambiance of the restaurant. Interactive elements, such as hover effects and smooth scrolling, enhance user engagement without overwhelming the user.
        </div>
      </div>

      <div className="work_1__section3">
        <div className='work_1__section3-title'>Technologies Used</div>
        <ul>
          <li>React.js: For building dynamic and responsive user interfaces.</li>
          <li>SCSS: Utilized for modular and maintainable styling.</li>
          {/* <li>Vercel: Employed for seamless deployment and hosting.</li> */}
        </ul>
      </div>

      <div className="work_1__gallery">
        <div className="work_1__gallery-title">Visual Highlights</div>
        <div className="work_1__images">
          <img src="path_to_homepage_screenshot.jpg" alt="Homepage Screenshot" />
          <img src="path_to_menu_screenshot.jpg" alt="Menu Page Screenshot" />
          <img src="path_to_contact_screenshot.jpg" alt="Contact Page Screenshot" />
        </div>
      </div>

      <div className="work_1__cta">
        <h2>Explore the Live Project</h2>
        <a href="https://plate-perfection.vercel.app/#home" target="_blank" rel="noopener noreferrer" className="work_1__button">
          Visit Plate Perfection
        </a>
      </div>
    </div>
  );
};

export default Work_1;
