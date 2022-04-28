import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navBar/Navbar';
import Footer from './components/statics/footer/Footer';
import Login from './pages/login/Login';
import Home from './pages/home/Home'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
