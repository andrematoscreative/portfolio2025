import React from 'react';
import './Work_1.scss';

const Work_1 = () => {
  return (
    <section className="work">
      <header className="work__hero">
        <h1>Plate Perfection</h1>
        <p>Elevating the digital experience of fine dining.</p>
      </header>

      <div className="work__section">
        <h2>Overview</h2>
        <p>
          Plate Perfection is a modern restaurant website designed to provide an immersive dining experience online. The site features a visually appealing layout, intuitive navigation, and responsive design, ensuring accessibility across various devices.
        </p>
      </div>

      <div className="work__section">
        <h2>Design Aesthetics</h2>
        <p>
          The website employs a minimalist design with a focus on high-quality imagery and clean typography. The color palette is warm and inviting, reflecting the ambiance of the restaurant. Interactive elements, such as hover effects and smooth scrolling, enhance user engagement without overwhelming the user.
        </p>
      </div>

      <div className="work__section">
        <h2>Technologies Used</h2>
        <ul>
          <li>React.js: For building dynamic and responsive user interfaces.</li>
          <li>SCSS: Utilized for modular and maintainable styling.</li>
          <li>Vercel: Employed for seamless deployment and hosting.</li>
        </ul>
      </div>

      <div className="work__gallery">
        <h2>Visual Highlights</h2>
        <div className="work__images">
          <img src="path_to_homepage_screenshot.jpg" alt="Homepage Screenshot" />
          <img src="path_to_menu_screenshot.jpg" alt="Menu Page Screenshot" />
          <img src="path_to_contact_screenshot.jpg" alt="Contact Page Screenshot" />
        </div>
      </div>

      <div className="work__cta">
        <h2>Explore the Live Project</h2>
        <a href="https://plate-perfection.vercel.app/#home" target="_blank" rel="noopener noreferrer" className="work__button">
          Visit Plate Perfection
        </a>
      </div>
    </section>
  );
};

export default Work_1;
