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

    if (!name || !email || !message) {
      alert('Please fill in all fields before sending the message.');
      return;
    }

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
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='app__contact' id='CONTACT'>
        <div className='app__contact-info app__master-container'>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className='app__contact-title'>
              CONTACT
            </motion.div>

          <motion.div
            whileInView={{ y: [-30, 0], opacity: [0,1] }}
            transition={{ duration: 1.5 }} 
            className='app__contact-content'>
            
            {!isFormSubmitted && showForm && (
              <form className="app__contact-content-form" onSubmit={handleSubmit}>
                <div>
                  <input type="text" placeholder="Name" name="name" value={name} onChange={handleChangeInput} />
                  <div className="app__contact-content-form-line"></div>
                </div>
                <div>
                  <input type="email" placeholder="Email" name="email" value={email} onChange={handleChangeInput} />
                  <div className="app__contact-content-form-line"></div>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    value={message}
                    name="message"
                    onChange={handleChangeInput} />
                    <div className="app__contact-content-form-line"></div>
                </div>
                <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
              </form>
            )}

            {isFormSubmitted && (
              <div>
                <h3 className="app__contact-content-form-message">
                  Thank you for getting in touch!
                </h3>
              </div>
            )}
          </motion.div>
        </div>
    </div>
  );
};

export default Contact;
