import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import logo from "../logo.png"; // Import your logo

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center text-lg-start">
        <div className="row align-items-center">
          {/* Logo & About */}
          <div className="col-lg-4 col-md-6 mb-4">
            <Link
              to="/"
              className="d-flex align-items-center text-decoration-none text-white"
            >
              <img
                src={logo}
                alt="Logo"
                style={{ height: "50px", marginRight: "10px" }}
              />
              <h4 className="fw-bold mb-0">Communion Hub</h4>
            </Link>
            <p className="mt-2">Connecting people of all faiths through events and community support.</p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/upcomingevents"
                  className="text-white text-decoration-none"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  to="/createevents"
                  className="text-white text-decoration-none"
                >
                  Create Events
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-lg-4 col-md-12 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <p className="mb-0">
            © {new Date().getFullYear()} Communion Hub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
