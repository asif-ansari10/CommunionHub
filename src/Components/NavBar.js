import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "./NavBar.css"; 

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled || navOpen ? "scrolled" : "transparent-navbar"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand fs-2 fw-bold d-flex align-items-center" to="/">
          <img className="me-2" style={{ height: "40px" }} src={logo} alt="Logo" />
          Communion Hub
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-center ${navOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav gap-lg-5">
            <li className="nav-item">
              <Link className="nav-link active fs-4" to="/" onClick={() => setNavOpen(false)}>Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link active dropdown-toggle fs-4" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Events
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/upcomingevents" onClick={() => setNavOpen(false)}>Upcoming Events</Link></li>
                <li><Link className="dropdown-item" to="/createevents" onClick={() => setNavOpen(false)}>Create Events</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fs-4" to="/about" onClick={() => setNavOpen(false)}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
