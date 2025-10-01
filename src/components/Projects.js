import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Healthcare Brand Campaign',
      category: 'healthcare',
      image: '/images/Health.png',
      description: 'Comprehensive social media strategy for a healthcare brand, focusing on patient education and trust-building content.',
      technologies: ['Instagram', 'Facebook', 'Content Strategy', 'UGC'],
      results: '300% increase in engagement, 150% growth in followers',
      features: [
        'Monthly content calendar development',
        'Educational carousel posts',
        'Patient testimonial videos',
        'Healthcare professional collaborations'
      ]
    },
    {
      id: 2,
      title: 'Fashion Brand Launch',
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Complete brand launch campaign for a fashion startup, including mood board creation and influencer partnerships.',
      technologies: ['Instagram', 'TikTok', 'Mood Boards', 'Influencer Marketing'],
      results: '500% increase in brand awareness, 200% growth in sales',
      features: [
        'Brand identity development',
        'Mood board creation on Milanote',
        'Influencer collaboration strategy',
        'Product launch campaign'
      ]
    },
    {
      id: 3,
      title: 'Real Estate Marketing',
      category: 'real-estate',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Multi-platform marketing strategy for luxury real estate properties, focusing on visual storytelling and lead generation.',
      technologies: ['Instagram', 'Facebook', 'YouTube', 'Virtual Tours'],
      results: '250% increase in property inquiries, 180% growth in website traffic',
      features: [
        'Property showcase reels',
        'Virtual tour content',
        'Client testimonial videos',
        'Lead generation campaigns'
      ]
    },
    {
      id: 4,
      title: 'Nightlife Venue Promotion',
      category: 'nightlife',
      image: '/images/Nightlife.png',
      description: 'Dynamic social media management for nightlife venues, creating engaging content that drives foot traffic and bookings.',
      technologies: ['Instagram', 'TikTok', 'Event Marketing', 'UGC'],
      results: '400% increase in event attendance, 300% growth in bookings',
      features: [
        'Event promotion campaigns',
        'User-generated content strategy',
        'Influencer partnerships',
        'Real-time event coverage'
      ]
    },
    {
      id: 5,
      title: 'Lifestyle Brand Growth',
      category: 'lifestyle',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive lifestyle brand management, focusing on community building and authentic storytelling.',
      technologies: ['Instagram', 'Facebook', 'Community Management', 'Content Strategy'],
      results: '350% increase in community engagement, 220% growth in brand loyalty',
      features: [
        'Community management strategy',
        'Authentic storytelling content',
        'Brand partnership campaigns',
        'Customer engagement initiatives'
      ]
    },
    {
      id: 6,
      title: 'Ayurveda & Wellness Campaign',
      category: 'wellness',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Educational content strategy for Ayurveda and wellness brand, focusing on health awareness and product education.',
      technologies: ['Instagram', 'Facebook', 'Educational Content', 'Health Marketing'],
      results: '280% increase in product awareness, 190% growth in sales',
      features: [
        'Educational carousel posts',
        'Wellness tip videos',
        'Product demonstration content',
        'Health expert collaborations'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'real-estate', name: 'Real Estate' },
    { id: 'nightlife', name: 'Nightlife' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'wellness', name: 'Wellness' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my best work across different industries and platforms
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              layout
            >
              <div className="project-image">
                {project.image.includes('gradient') ? (
                  <div className={`gradient-placeholder ${project.image}`}></div>
                ) : (
                  <img src={project.image} alt={project.title} />
                )}
                <div className="project-overlay">
                  <div className="project-category">{project.category}</div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-results">
                  <strong>Results:</strong> {project.results}
                </div>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
