import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'IREBEL Services',
      position: 'Social Media Manager',
      duration: 'May 2024 – Present',
      location: 'Remote',
      type: 'Marketing Agency',
      description: 'Leading social media strategies for clients across multiple industries including healthcare, nightlife, real estate, and fashion.',
      achievements: [
        'Developed and executed social media strategies for clients across industries including healthcare, nightlife, real estate, and fashion',
        'Designed mood boards on Milanote to establish brand identity, aesthetics, and campaign direction',
        'Created monthly content calendars, ensuring alignment with brand tone and objectives',
        'Planned and executed shoots for reels, static posts, and carousels with trend-driven content',
        'Conducted market research to adapt strategies to platform algorithms (Instagram, Facebook, etc.)',
        'Managed client communications and presented strategies, ensuring measurable results and brand growth',
        'Delivered end-to-end campaign support — from ideation to execution — boosting engagement and visibility'
      ]
    },
    {
      company: 'PromoDigitaly',
      position: 'UGC Content Producer',
      duration: 'Dec 2023 – Apr 2024',
      location: 'Lucknow, India',
      type: 'Marketing Agency',
      description: 'Produced and directed UGC content with focus on creative execution and brand storytelling.',
      achievements: [
        'Produced and directed UGC content (shoot planning, scripting, and creative execution)',
        'Collaborated directly with clients to translate brand goals into impactful digital campaigns',
        'Created social media content calendars and coordinated with teams to ensure campaign delivery',
        'Gained multi-brand exposure, working with Fashion & Lifestyle, Personal Care & Grooming, Gaming & Apps, and Ayurveda & Wellness brands',
        'Strengthened brand storytelling through audience-centric content and visual hooks'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Business Administration',
      school: 'Axis Colleges',
      duration: 'Sept 2021 – July 2023',
      type: 'MBA'
    },
    {
      degree: 'Bachelor of Business Administration',
      school: 'Axis Colleges',
      duration: 'Aug 2018 – July 2021',
      type: 'BBA'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey in digital marketing and business
          </p>
        </motion.div>

        <div className="experience-content">
          <motion.div
            className="experience-timeline"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="timeline-title">Professional Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="experience-card">
                      <div className="experience-header">
                        <div className="experience-title">
                          <h4 className="position">{exp.position}</h4>
                          <h5 className="company">{exp.company}</h5>
                          <span className="company-type">{exp.type}</span>
                        </div>
                        <div className="experience-meta">
                          <span className="duration">{exp.duration}</span>
                          <span className="location">{exp.location}</span>
                        </div>
                      </div>
                      <p className="experience-description">{exp.description}</p>
                      <div className="achievements">
                        <h6>Key Achievements:</h6>
                        <ul>
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="education-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="education-title">Education</h3>
            <div className="education-list">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="education-icon">
                    <span className="degree-icon">🎓</span>
                  </div>
                  <div className="education-content">
                    <h4 className="degree">{edu.degree}</h4>
                    <h5 className="school">{edu.school}</h5>
                    <div className="education-meta">
                      <span className="edu-duration">{edu.duration}</span>
                      <span className="edu-type">{edu.type}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="skills-title">Core Skills</h3>
          <div className="skills-categories">
            <div className="skill-category">
              <h4>Social Media Management & Strategy</h4>
              <div className="skill-tags">
                <span className="skill-tag">Content Calendar & Campaign Planning</span>
                <span className="skill-tag">UGC Creation & Shoot Direction</span>
                <span className="skill-tag">Trend Research & Algorithm Insights</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Technical Skills</h4>
              <div className="skill-tags">
                <span className="skill-tag">Client Communication & Brand Strategy</span>
                <span className="skill-tag">Mood Boards & Brand Identity (Milanote)</span>
                <span className="skill-tag">Analytics & Performance Optimization</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
