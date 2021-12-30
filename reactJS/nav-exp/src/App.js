import logo from "./logo.svg";
import "./App.css";
import React from "react";
import List from "./List";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <nav className="app-nav">
        <ul className="app-nav__ul">
          <li className="app-nav__li">
            <Link to="/">Home</Link>
          </li>
          <li className="app-nav__li">
            <Link to="/main">Main</Link>
          </li>
          <li className="app-nav__li">
            <Link to="/photo">Photo</Link>
          </li>
          <li className="app-nav__li">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/main" element={<List />} />
        <Route path="/photo" element={<List />} />
        <Route path="/profile" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
