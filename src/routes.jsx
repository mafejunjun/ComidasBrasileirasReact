// src/routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pag1 from './inicio/App'; 
import Nordd from './nordeste/nordeste'; 
import Nort from './norte/norte'; 
import Susu from './sudeste/sudeste';
import Cent from './centro/centro';
import Sul from './sul/sul';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pag1 />} />
        <Route path="/Nordd" element={<Nordd />} />
        <Route path="/Nort" element={<Nort />} />
        <Route path="/Sude" element={<Susu />} />
        <Route path="/Cent" element={<Cent />} />
        <Route path="/Sul" element={<Sul />} />



      </Routes>
    </Router>
  );
}

export default AppRoutes;
