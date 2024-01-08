import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Switch from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter = () => {
    return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
  
          <Footer />
        </div>
      </Router>
    );
  };
  
  export default AppRouter;