import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import React, { useState } from "react";

function App() {
  const [sidebarClose, setSideBarClose] = useState(false);
  const handleViewSidebar = () => {
    setSideBarClose(!sidebarClose);
  };
  return (
    <div className="App">
      <Navbar/>
      <div className="page">
        <Sidebar isClose={sidebarClose} toggleSidebar={handleViewSidebar}/>
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
