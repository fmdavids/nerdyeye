import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/home' element={<Home /> } />
        <Route path='/contact' element={<Contact /> } />
        <Route path='/about' element={<About /> } />
      </Routes>
    </div>
  );
}

export default App;
