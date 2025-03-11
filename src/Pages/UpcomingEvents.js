import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import eventData from "../eventDetails.json"; // Import JSON file

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    setEvents(eventData);
    setFilteredEvents(eventData); // Initialize with all events
  }, []);

  // Function to filter events by category and date
  const filterEvents = (category, date) => {
    let filtered = eventData;

    if (category) {
      filtered = filtered.filter((event) => event.category === category);
    }

    if (date) {
      filtered = filtered.filter((event) => event.date === date);
    }

    setFilteredEvents(filtered);
  };

  // Handle category filter change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    filterEvents(category, selectedDate);
  };

  // Handle date filter change
  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    filterEvents(selectedCategory, date);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Upcoming Events</h2>

      {/* Filters Section */}
      <div className="row mb-4">
        {/* Category Filter */}
        <div className="col-md-6">
          <label className="form-label fw-bold">Filter by Category:</label>
          <select className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="Social">Social</option>
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Religious">Religious</option>
            <option value="Party">Party</option>
            <option value="Charity">Charity</option>
            <option value="Community">Community</option>
            <option value="Cultural">Cultural</option>
            <option value="Music">Music</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Date Filter */}
        <div className="col-md-6">
          <label className="form-label fw-bold">Filter by Date:</label>
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
      </div>

      {/* Events Grid */}
      <div className="row">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div className="col-md-4 mb-4" key={event.id}>
              <div className="card shadow-lg border-0">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{event.title}</h5>
                  <p className="card-text"><strong>Date:</strong> {event.date}</p>
                  <p className="card-text"><strong>Category:</strong> {event.category}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No events found for this filter.</p>
        )}
      </div>

      {/* Create Event Button */}
      <div className="text-center mt-4">
        <button className="btn btn-primary px-4 py-2 fw-bold" onClick={() => navigate("/createevents")}>
          + Create New Event
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvents;
