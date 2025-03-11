import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import for React Router
import { getEvents } from "../firebase/firebaseService"; // Ensure correct import

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState(""); // Single date filter
  const navigate = useNavigate(); // Correct way to navigate in React Router

  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = await getEvents();
      const today = new Date().toISOString().split("T")[0];

      // Filter upcoming events
      let futureEvents = eventList.filter((event) => event.date >= today);

      // Sort events by date (ascending order)
      futureEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

      setEvents(futureEvents);
      setFilteredEvents(futureEvents);
    };

    fetchEvents();
  }, []);

  // Apply filters
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

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Upcoming Events</h2>

      {/* Filters */}
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
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>

      {/* Events List */}
      <div className="row">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div className="col-md-4 mb-4" key={event.id}>
              <div className="card shadow-lg border-0">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{event.title}</h5>
                  <p className="card-text">
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className="card-text">
                    <strong>Category:</strong> {event.category}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No events found for this date.</p>
        )}
      </div>

      {/* Create Event Button at the End */}
      <div className="text-center mt-4">
        <button className="btn btn-success" onClick={() => navigate("/createevents")}>
          + Create Event
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvents;
