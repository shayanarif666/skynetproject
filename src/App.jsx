import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import "./App.css";
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ComingSoon />} />
      </Routes>
    </>
  )
}

export default App
