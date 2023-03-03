import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './contents/Home'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import ProductDetails from './components/products/Product.Details';
import Jumbotron from './contents/Jumbotron';
import Login from './components/user/Login';
import './App.css';

function App() {
  return (
      <div className='App'>
        <NavBar />
        <div className="container container-fluid">
          <Routes>
            <Route path='/' element={<Jumbotron />} />
            <Route path='/home' element={<Home />} />
            <Route path='/search/:keyword' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
