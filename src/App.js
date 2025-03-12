import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import UpcomingEvents from "./Pages/UpcomingEvents";
import CreateEvents from "./Pages/CreateEvents";
import About from "./Pages/About";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upcomingevents" element={<UpcomingEvents />} />
        <Route path="/createevents" element={<CreateEvents />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
