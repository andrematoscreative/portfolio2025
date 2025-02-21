import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_5z690ec',
      'template_ryyregq',
      e.target,
      '9-OQDjG5XPZ5hXrRT'
    )
      .then((result) => {
        setLoading(false);
        setIsFormSubmitted(true);
        setShowForm(false);
        setTimeout(() => {
          setIsFormSubmitted(false);
          setShowForm(true);
        }, 2000);
      }, (error) => {
        console.error(error);
        setLoading(false);
      });

    // Clear form fields after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='app__Contact' id='CONTACT'>
      <div className='app__master-container'>
        <div className='app__Contact-info'>
          <div className='app__Contact-title '>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className='app__Contact-title-title'>
              Contact
            </motion.div>
          </div>

          <motion.div
            whileInView={{ y: [-30, 0], opacity: [0,1] }}
            transition={{ duration: 1.5 }} className='app__Contact-content'>
            {!isFormSubmitted && showForm && (
              <form className="app__Contact-content-form" onSubmit={handleSubmit}>
                <div>
                  <input type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    name="message"
                    onChange={handleChangeInput} />
                </div>
                <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
              </form>
            )}
            {isFormSubmitted && (
              <div>
                <h3 className="app__Contact-content-form-message">
                  Thank you for getting in touch!
                </h3>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; /*test*/