import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Welcome to react router</h1>
      </div>
      <div>
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>{" "}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
