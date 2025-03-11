import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      {/* About Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Us</h1>
        <p className="lead text-muted">
          Communion Hub is a platform designed to connect people across faiths and interests, fostering unity through meaningful events and discussions.
        </p>
      </div>

      {/* Team Section */}
      <div className="row text-center">
        <h2 className="fw-bold mb-4">Meet Our Team</h2>

        {/* Team Member 1 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card border-0 shadow">
            <img src="" className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text text-muted">Founder & CEO</p>
            </div>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card border-0 shadow">
            <img src="" className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text text-muted">Head of Events</p>
            </div>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card border-0 shadow">
            <img src="" className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">David Lee</h5>
              <p className="card-text text-muted">Community Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      {/* <div className="text-center mt-5">
        <h2 className="fw-bold">Our Mission</h2>
        <p className="lead text-muted">
          We aim to bridge communities by organizing impactful events, discussions, and initiatives that promote understanding and unity.
        </p>
      </div> */}

<div className="container mt-5">
  <div className="text-center p-5 bg-secondary text-white rounded shadow">
    <h2 className="fw-bold">Our Mission</h2>
    <p className="lead">
      We aim to bridge communities by organizing impactful events, discussions, and initiatives that promote understanding and unity.
    </p>
  </div>
</div>

    </div>
  );
};

export default About;
