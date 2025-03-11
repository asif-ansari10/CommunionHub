const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const filePath = "./src/eventDetails.json";

// Function to read JSON safely
const readJsonFile = () => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return data.trim() ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error reading JSON:", error);
    return [];
  }
};

// POST request to add an event
app.post("/events", (req, res) => {
  const newEvent = req.body;
  const events = readJsonFile();

  events.push(newEvent);

  fs.writeFile(filePath, JSON.stringify(events, null, 2), (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).json({ error: "Failed to save event" });
    }
    res.json({ message: "Event saved successfully" });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
