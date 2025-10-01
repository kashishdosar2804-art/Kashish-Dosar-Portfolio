import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-container">
        <motion.div
          className="loading-logo"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="logo-text">Kashish</span>
          <span className="logo-dot">.</span>
        </motion.div>
        
        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="spinner-ring"></div>
        </motion.div>
        
        <motion.p
          className="loading-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
