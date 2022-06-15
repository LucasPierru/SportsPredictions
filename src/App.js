import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="page">
        <Sidebar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>   
        </div>
        
      </div>
    </div>
  );
}

export default App;
