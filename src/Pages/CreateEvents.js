import React, { useState } from "react";
import { saveEvent } from "../firebase/firebaseService";

const CreateEvents = () => {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    category: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await saveEvent(event);
      setMessage("✅ Event saved successfully!");
      setEvent({ title: "", date: "", category: "" }); // Clear form
    } catch (error) {
      console.error("❌ Error saving event:", error);
      setMessage("❌ Error saving event.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold">Create Event</h2>

      {message && <div className="alert alert-success">{message}</div>}

      <form onSubmit={handleSubmit} className="p-4 bg-light shadow rounded">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={event.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            name="category"
            value={event.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
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

        <button type="submit" className="btn btn-primary w-100">
          Save Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvents;
