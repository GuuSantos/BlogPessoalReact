import React from 'react';
import Navbar from './components/statics/navBar/Navbar';
import Footer from './components/statics/footer/Footer';
import {Grid} from '@material-ui/core';
import Home from './pages/home/Home'
import './App.css';

function App() {
  return (
    <>
     <Navbar />
     <Home />
     <Footer />
    </>
  );
}

export default App;
