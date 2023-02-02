import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './contents/Home'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
      <div className='App'>
        <NavBar />
        <div className="container container-fluid">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
