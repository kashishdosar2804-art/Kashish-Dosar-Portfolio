import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Social Media Management', level: 95 },
    { name: 'Content Creation', level: 90 },
    { name: 'Brand Strategy', level: 85 },
    { name: 'UGC Production', level: 88 },
    { name: 'Analytics & Insights', level: 82 },
    { name: 'Client Communication', level: 92 }
  ];

  const services = [
    {
      icon: '📱',
      title: 'Social Media Strategy',
      description: 'Comprehensive social media strategies tailored to your brand objectives and target audience.'
    },
    {
      icon: '🎨',
      title: 'Content Creation',
      description: 'High-quality visual content including reels, static posts, and carousels that engage your audience.'
    },
    {
      icon: '📊',
      title: 'Analytics & Optimization',
      description: 'Data-driven insights and performance optimization to maximize your social media ROI.'
    },
    {
      icon: '🎯',
      title: 'Brand Development',
      description: 'Mood boards and brand identity development to establish cohesive visual aesthetics.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about creating compelling digital experiences that drive results
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-card">
              <h3>My Story</h3>
              <p>
                I'm a creative and strategic Social Media Manager with 1.5+ years of experience 
                in content production, brand storytelling, and digital marketing. I specialize 
                in managing multi-industry brands across fashion, real estate, nightlife, 
                healthcare, and lifestyle sectors.
              </p>
              <p>
                My expertise lies in transforming brand objectives into engaging digital 
                strategies that drive reach, engagement, and conversions. I'm passionate 
                about creating content that not only looks great but also delivers measurable 
                results for my clients.
              </p>
            </div>

            <div className="about-card">
              <h3>What I Do</h3>
              <ul className="about-list">
                <li>Develop and execute comprehensive social media strategies</li>
                <li>Create mood boards and establish brand identity</li>
                <li>Design monthly content calendars aligned with brand objectives</li>
                <li>Plan and execute shoots for various content formats</li>
                <li>Conduct market research and adapt to platform algorithms</li>
                <li>Manage client communications and deliver measurable results</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="about-skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="skills-card">
              <h3>Core Skills</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="services-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="services-title">What I Offer</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
