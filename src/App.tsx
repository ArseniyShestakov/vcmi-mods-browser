import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HeaderComponent from "./components/Header"
import MainRoute from './routes/Main'
import ModsRoute from "./routes/Mods"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path="/" element={<MainRoute />} />
          <Route path="list" element={<ModsRoute />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
