import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage, HomePage, ServicePage, ContactPage, UploadCategory, UploadFilePage, UploadService } from "./pages/page";
import "./App.css";
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutPage />}></Route>
        <Route path='/service/:category' element={<ServicePage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/upload-portfolio' element={<UploadFilePage />} />
        <Route path='/upload-service' element={<UploadService />} />
        <Route path='/upload-category' element={<UploadCategory />} />
        <Route path='*' element={<ComingSoon />} />
      </Routes>
    </>
  )
}

export default App
