import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand fs-2 fw-bold d-flex align-items-center" to="/">
          <img className="me-2" style={{ height: "40px" }} src={logo} alt="Logo" />
          Communion Hub
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-lg-5">
            <li className="nav-item">
              <Link className="nav-link fs-4" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle fs-4" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Events
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/upcomingevents">Upcoming Events</Link></li>
                <li><Link className="dropdown-item" to="/createevents">Create Events</Link></li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link fs-4" to="/upcomingevents">Events</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link fs-4" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
