import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css"; // Import the updated CSS

const HeroSection = () => {
  return (
    <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
      <div className="container text-white">
        <h1 className="hero-title">
          Connecting People Across <span className="highlight">Faiths & Interests</span>
        </h1>
        <p className="hero-subtitle">
          Join us to explore events, connect with like-minded individuals, and celebrate diversity.  
          <br /> Bringing communities together through meaningful conversations.
        </p>
        <Link to="/upcomingevents" className="hero-btn">
          Explore Events
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
