import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css"; // Import the CSS file for styling

const HeroSection = () => {
  return (
    <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
      <div className="container text-white">
        <h1 className="display-4 fw-bold">
          Connecting People Across Faiths & Interests
        </h1>
        <p className="lead mt-3">
          Our platform brings communities together by fostering meaningful conversations and shared experiences. 
          Join us to explore events, connect with like-minded individuals, and celebrate diversity.
        </p>
        <Link to="/upcomingevents" className="btn btn-primary btn-lg mt-4">
          Explore Events
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
