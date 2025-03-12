import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, remove } from "firebase/database";
import axios from "axios"; // For Cloudinary upload

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoIXow4xn30LZdcdGojbJnfADEFcv4mhk",
  authDomain: "communionhub-2b8c4.firebaseapp.com",
  databaseURL: "https://communionhub-2b8c4-default-rtdb.firebaseio.com/",
  projectId: "communionhub-2b8c4",
  storageBucket: "communionhub-2b8c4.appspot.com",
  messagingSenderId: "1075178579433",
  appId: "1:1075178579433:web:efb6f80d59002c2fcf5778",
  measurementId: "G-EM05WP4CP0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

/**
 * Uploads an image to Cloudinary and returns the image URL.
 * @param {File} image - The image file to upload.
 * @returns {Promise<string>} - The URL of the uploaded image.
 */
export const uploadToCloudinary = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "YOUR_UPLOAD_PRESET"); // 🔹 Replace with your Cloudinary upload preset

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dvwao1xay/image/upload",
      formData
    );
    return response.data.secure_url; // ✅ Returns Cloudinary image URL
  } catch (error) {
    console.error("❌ Error uploading to Cloudinary:", error);
    throw error;
  }
};

/**
 * Saves a new event with location and image to Firebase Realtime Database.
 * @param {Object} event - The event data (title, date, category, location, image).
 */
export const saveEvent = async (event) => {
  try {
    if (!event.title || !event.date || !event.category || !event.location || !event.image) {
      throw new Error("❌ Missing required fields!"); // Prevent empty data
    }

    const eventData = {
      title: event.title,
      date: event.date,
      category: event.category,
      location: event.location, // ✅ Store location
      imageUrl: event.image, // ✅ Save image URL from Cloudinary
    };

    const eventsRef = ref(database, "events");
    await push(eventsRef, eventData); // Save to Firebase

    console.log("✅ Event saved successfully!", eventData);
  } catch (error) {
    console.error("❌ Error saving event:", error);
  }
};

/**
 * Fetches all events from Firebase, including images and locations.
 * @returns {Promise<Array>} - List of events with location and image URLs.
 */
export const getEvents = async () => {
  try {
    const eventsRef = ref(database, "events");
    const snapshot = await get(eventsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
    } else {
      console.log("⚠️ No events found!");
      return [];
    }
  } catch (error) {
    console.error("❌ Error fetching events:", error);
    return [];
  }
};

/**
 * Deletes an event from Firebase by ID.
 * @param {string} eventId - The event ID to delete.
 */
export const deleteEvent = async (eventId) => {
  try {
    const eventRef = ref(database, `events/${eventId}`);
    await remove(eventRef);
    console.log("✅ Event deleted successfully!");
  } catch (error) {
    console.error("❌ Error deleting event:", error);
  }
};
