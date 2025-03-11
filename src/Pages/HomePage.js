import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <div className="container mt-5 text-center">
      {/* Typing Animation */}
      <TypeAnimation
        sequence={[
          "Welcome to Communion Hub",  // Text to type
          1000,  // Pause before erasing
        ]}
        wrapper="h1"
        className="fw-bold"
        speed={50}  // Typing speed
        repeat={Infinity}  // Loop animation
      />

      {/* Fade-in Paragraph */}
      <motion.p 
        className="lead text-muted mt-3"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        Connecting people of all faiths through events and community support.
      </motion.p>

      {/* Zoom-in Hero Section */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 1, delay: 1 }}
      >
        <HeroSection />
      </motion.div>
    </div>
  );
};

export default HomePage;
