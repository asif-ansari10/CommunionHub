import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEvents } from "../firebase/firebaseService";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = await getEvents();
      const today = new Date().toISOString().split("T")[0];

      let futureEvents = eventList.filter((event) => event.date >= today);
      futureEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

      setEvents(futureEvents);
      setFilteredEvents(futureEvents);
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    let filtered = events;

    if (categoryFilter) {
      filtered = filtered.filter((event) => event.category === categoryFilter);
    }

    if (searchQuery) {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedDate) {
      filtered = filtered.filter((event) => event.date === selectedDate);
    }

    setFilteredEvents(filtered);
  }, [categoryFilter, searchQuery, selectedDate, events]);

  const formatDate = (dateString) => {
    const eventDate = new Date(dateString);
    return eventDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const categoryColors = {
    Social: "bg-info",
    Technology: "bg-primary",
    Sports: "bg-success",
    Education: "bg-warning",
    Health: "bg-danger",
    Religious: "bg-dark",
    Party: "bg-pink",
    Charity: "bg-teal",
    Community: "bg-purple",
    Cultural: "bg-indigo",
    Music: "bg-orange",
    Other: "bg-secondary",
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Upcoming Events</h2>

      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {Object.keys(categoryColors).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div className="col-md-4 mb-4" key={event.id}>
              <div
                className="card shadow-lg border-0 rounded-4 overflow-hidden position-relative"
                style={{
                  transition: "0.3s ease-in-out",
                  cursor: "pointer",
                  backgroundColor: "#f8f9fa",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {/* Category Badge at Top Left */}

                <span
                  className={`badge text-black px-3 py-1 rounded-pill position-absolute`}
                  style={{
                    top: "10px",
                    left: "10px",
                    fontSize: "0.85rem",
                    backgroundColor: "#ffffff",
                    border: "1px solid #ddd",
                  }}
                >
                  {event.category}
                </span>

                {/* 📅 Date Badge (Top Right) */}
                <div
                  className="position-absolute text-center text-white"
                  style={{
                    top: "10px",
                    right: "10px",
                    backgroundColor: "#fff",
                    color: "#000",
                    padding: "6px 12px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <small
                    className="d-block text-uppercase fw-bold"
                    style={{ fontSize: "0.75rem", color: "#000000" }}
                  >
                    {new Date(event.date).toLocaleString("en-US", {
                      month: "short",
                    })}
                  </small>
                  <span
                    className="fw-bold"
                    style={{ fontSize: "1.5rem", color: "#000000" }}
                  >
                    {new Date(event.date).getDate()}
                  </span>
                </div>

                <img
                  src={event.imageUrl || "https://via.placeholder.com/400"}
                  alt={event.title}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderBottom: "4px solid #007bff",
                  }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold fs-3 text-uppercase">
                    {event.title}
                  </h5>

                  {/* Event Date & Location */}
                  <p className="card-text text-muted mb-1">
                    <FaCalendarAlt className="me-2 text-black" />
                    {formatDate(event.date)}
                  </p>
                  {event.location && (
                    <p className="card-text text-muted">
                      <FaMapMarkerAlt className="me-2 text-danger" />
                      {event.location}
                    </p>
                  )}

                  <button
                    className="btn w-100 mt-3 fw-bold"
                    style={{
                      background: "linear-gradient(45deg, #28a745, #218838)",
                      color: "#fff",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      transition: "0.3s ease-in-out",
                      fontSize: "1rem",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.background =
                        "linear-gradient(45deg, #218838, #1e7e34)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.background =
                        "linear-gradient(45deg, #28a745, #218838)")
                    }
                  >
                    Event Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No events found for this date.</p>
        )}
      </div>

      <div className="text-center mt-4">
        <button
          className="fw-bold px-4 py-2 rounded-pill shadow-lg"
          style={{
            background: "transparent",
            border: "2px solid #28a745",
            color: "#28a745",
            fontSize: "1.2rem",
            transition: "0.3s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#28a745";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#28a745";
          }}
          onClick={() => navigate("/createevents")}
        >
          Create Event
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvents;
