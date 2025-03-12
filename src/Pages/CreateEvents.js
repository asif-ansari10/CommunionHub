import React, { useState } from "react";
import { saveEvent } from "../firebase/firebaseService";
import { uploadToCloudinary } from "../firebase/cloudinaryService";

const CreateEvents = () => {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    category: "",
    location: "",
    image: null,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null); // Image preview state

  // Handle text input changes
  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEvent({ ...event, image: file });

    // Generate preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      let imageUrl = "";

      if (event.image) {
        imageUrl = await uploadToCloudinary(event.image);
      }

      const newEvent = {
        title: event.title,
        date: event.date,
        category: event.category,
        location: event.location,
        image: imageUrl,
      };

      await saveEvent(newEvent);

      setMessage("✅ Event saved successfully!");
      setEvent({ title: "", date: "", category: "", location: "", image: null });
      setImagePreview(null); // Reset preview
    } catch (error) {
      console.error("❌ Error saving event:", error);
      setMessage("❌ Error saving event.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">Create Event</h2>

      {message && <div className={`alert ${message.includes("❌") ? "alert-danger" : "alert-success"}`}>{message}</div>}

      <form
        onSubmit={handleSubmit}
        className="p-4 shadow rounded border"
        style={{
          background: "linear-gradient(135deg, #f9f9f9, #e3f2fd)",
          padding: "20px",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <div className="mb-3">
          <label className="form-label fw-semibold">Title</label>
          <input type="text" className="form-control" name="title" value={event.title} onChange={handleChange} required />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Date</label>
            <input type="date" className="form-control" name="date" value={event.date} onChange={handleChange} required />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Category</label>
            <select className="form-select" name="category" value={event.category} onChange={handleChange} required>
              <option value="">Select a category</option>
              {["Social", "Technology", "Sports", "Education", "Health", "Religious", "Party", "Charity", "Community", "Cultural", "Music", "Other"].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Location</label>
          <input type="text" className="form-control" name="location" value={event.location} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Upload Image</label>
          <input type="file" className="form-control" onChange={handleImageChange} required />
          
          {/* Image Preview */}
          {imagePreview && (
            <div className="mt-3 text-center">
              <img src={imagePreview} alt="Event Preview" className="img-fluid rounded" style={{ maxWidth: "100%", height: "200px", objectFit: "cover" }} />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="btn w-100 fw-bold text-white"
          style={{
            background: "linear-gradient(45deg, #28a745, #218838)",
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "8px",
            transition: "0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.background = "linear-gradient(45deg, #218838, #1e7e34)")}
          onMouseOut={(e) => (e.target.style.background = "linear-gradient(45deg, #28a745, #218838)")}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Event"}
        </button>
      </form>
    </div>
  );
};

export default CreateEvents;
