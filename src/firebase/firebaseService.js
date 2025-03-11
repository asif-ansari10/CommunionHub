import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, remove } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoIXow4xn30LZdcdGojbJnfADEFcv4mhk",
  authDomain: "communionhub-2b8c4.firebaseapp.com",
  databaseURL: "https://communionhub-2b8c4-default-rtdb.firebaseio.com",
  projectId: "communionhub-2b8c4",
  storageBucket: "communionhub-2b8c4.firebasestorage.app",
  messagingSenderId: "1075178579433",
  appId: "1:1075178579433:web:efb6f80d59002c2fcf5778",
  measurementId: "G-EM05WP4CP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

/**
 * Save a new event to Firebase Realtime Database.
 * @param {Object} event - The event data (title, date, category).
 */
export const saveEvent = async (event) => {
  try {
    const eventsRef = ref(database, "events"); // Reference to "events" node
    await push(eventsRef, event); // Push new event to database
    console.log("✅ Event saved successfully!");
  } catch (error) {
    console.error("❌ Error saving event:", error);
  }
};

/**
 * Fetch all events from Firebase Realtime Database.
 * @returns {Promise<Array>} - List of events.
 */
export const getEvents = async () => {
  try {
    const eventsRef = ref(database, "events"); // Reference to "events" node
    const snapshot = await get(eventsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.keys(data).map((key) => ({ id: key, ...data[key] })); // Convert to array
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
 * Delete an event from Firebase Realtime Database.
 * @param {string} eventId - The event ID to delete.
 */
export const deleteEvent = async (eventId) => {
  try {
    const eventRef = ref(database, `events/${eventId}`); // Reference to specific event
    await remove(eventRef);
    console.log("✅ Event deleted successfully!");
  } catch (error) {
    console.error("❌ Error deleting event:", error);
  }
};
