import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'kashishdosar2804@gmail.com',
      link: 'mailto:kashishdosar2804@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 639 234 3723',
      link: 'tel:+916392343723'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Kanpur, India',
      link: null
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'kashish-dosar-9023bb184',
      link: 'https://linkedin.com/in/kashish-dosar-9023bb184'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/kashish-dosar-9023bb184',
      color: '#0077B5'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: '#',
      color: '#E4405F'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: '#',
      color: '#1DA1F2'
    },
    {
      name: 'Behance',
      icon: '🎨',
      url: '#',
      color: '#1769FF'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to take your digital presence to the next level? Let's work together!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info contact-info-centered"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="contact-card">
              <h3>Let's Connect</h3>
              <p>
                I'm always excited to work on new projects and help brands grow their 
                digital presence. Whether you need social media strategy, content creation, 
                or brand development, I'm here to help!
              </p>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer">
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            © 2024 Kashish Dosar. All rights reserved. | 
            <span className="text-gradient"> Digital Marketing Professional</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
