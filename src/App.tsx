import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HeaderComponent from "./components/Header"
import MainRoute from './routes/Main'
import ListRoute from "./routes/List"
import ModRoute from "./routes/Mod"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path="/" element={<MainRoute />} />
          <Route path="list" element={<ListRoute />} />
          <Route path="mod">
            <Route path=":modId" element={<ModRoute />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
