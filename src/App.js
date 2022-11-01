import React from "react";
import "./index.css";
import Home from "../src/routes/Home";
import About from "../src/routes/About";
import Project from "../src/routes/Project";
import Contact from "../src/routes/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  );
}

export default App;
