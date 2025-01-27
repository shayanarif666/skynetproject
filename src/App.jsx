import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, UploadFilePage } from "./pages/page";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import "./App.css";
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<HomePage />} />
        <Route path='/upload-portfolio' element={<UploadFilePage />} /> */}
        <Route path='*' element={<ComingSoon />} />
      </Routes>
    </>
  )
}

export default App
