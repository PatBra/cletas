import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Inicio from './routes/Inicio'
import './App.css';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Inicio />} />
</Routes>
  );
}

export default App;
