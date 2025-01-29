import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage, HomePage, ServicePage, UploadFilePage } from "./pages/page";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import "./App.css";
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutPage />}></Route>
        <Route path='/service/:category' element={<ServicePage />}></Route>
        <Route path='/upload-portfolio' element={<UploadFilePage />} />
        <Route path='*' element={<ComingSoon />} />
      </Routes>
    </>
  )
}

export default App
