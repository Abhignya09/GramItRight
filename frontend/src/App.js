// frontend/src/App.js
// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Converter from "./pages/Converter";
import Recipes from "./pages/Recipes";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h1 className="logo-text">Gram It Right</h1>
          <ul>
            <Link to="/">Home </Link>|<Link to="/converter">Converter </Link>|
            <Link to="/Recipes">Recipes</Link>
            <Link to="/about">About</Link>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/about" element={<About />} />
          <Route path="/Recipes" element={<Recipes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
