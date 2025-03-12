
import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      {/* About Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4">About Us</h1>
        <p className="lead text-muted w-75 mx-auto">
          Communion Hub is a platform designed to connect people across faiths
          and interests, fostering unity through meaningful events and
          discussions.
        </p>
      </div>

      {/* Team Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-4 text-success">Meet Our Team</h2>
        <div className="row justify-content-center">
          {[
            { name: "John Doe", role: "Founder & CEO", img: "https://via.placeholder.com/150" },
            { name: "Jane Smith", role: "Head of Events", img: "https://via.placeholder.com/150" },
            { name: "David Lee", role: "Community Manager", img: "https://via.placeholder.com/150" },
          ].map((member, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div
                className="card border-0 shadow-lg text-center"
                style={{
                  transition: "0.3s ease-in-out",
                  cursor: "pointer",
                  borderRadius: "15px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={member.img}
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt={member.name}
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{member.name}</h5>
                  <p className="card-text text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="container">
        <div
          className="text-center p-5 text-white rounded shadow"
          style={{
            background: "linear-gradient(135deg, #28a745, #218838)",
            borderRadius: "20px",
          }}
        >
          <h2 className="fw-bold display-5">Our Mission</h2>
          <p className="lead w-75 mx-auto">
            We aim to bridge communities by organizing impactful events,
            discussions, and initiatives that promote understanding and unity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
