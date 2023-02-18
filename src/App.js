import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
export default App;

