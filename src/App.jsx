// // import React, { useEffect, useState } from 'react';
// // import { Route, Routes } from 'react-router-dom';
// // import { AboutPage, HomePage, ServicePage, ContactPage, UploadCategory, UploadFilePage, UploadService } from "./pages/page";
// // import "./App.css";
// // import ComingSoon from './components/ComingSoon';
// // import PreLoader from './components/PreLoader';

// // function App() {

// //   const [loading, setLoading] = useState(true);

// //   return (
// //     <>
// //       {loading && <PreLoader setLoading={setLoading} />}
// //       <Routes>
// //         <Route path='/' element={!loading && <HomePage />} />
// //         <Route path='/about-us' element={<AboutPage />}></Route>
// //         <Route path='/service/:category' element={<ServicePage />}></Route>
// //         <Route path='/contact' element={<ContactPage />}></Route>
// //         <Route path='/upload-portfolio' element={<UploadFilePage />} />
// //         <Route path='/upload-service' element={<UploadService />} />
// //         <Route path='/upload-category' element={<UploadCategory />} />
// //         <Route path='*' element={<ComingSoon />} />
// //       </Routes>
// //     </>
// //   )
// // }

// // export default App


// import React, { useState, useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { AboutPage, HomePage, ServicePage, ContactPage, UploadCategory, UploadFilePage, UploadService } from "./pages/page";
// import "./App.css";
// import ComingSoon from './components/ComingSoon';
// import PreLoader from './components/PreLoader';

// function App() {
//   return (
//     <>
//       <PreLoader />
//       <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/about-us' element={<AboutPage />} />
//         <Route path='/service/:category' element={<ServicePage />} />
//         <Route path='/contact' element={<ContactPage />} />
//         <Route path='/upload-portfolio' element={<UploadFilePage />} />
//         <Route path='/upload-service' element={<UploadService />} />
//         <Route path='/upload-category' element={<UploadCategory />} />
//         <Route path='*' element={<ComingSoon />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AboutPage, HomePage, ServicePage, ContactPage, UploadCategory, UploadFilePage, UploadService } from "./pages/page";
import "./App.css";
import ComingSoon from './components/ComingSoon';
import PreLoader from './components/PreLoader';

function App() {
  const [loading, setLoading] = useState(true);
  const [apiLoading, setApiLoading] = useState(false); // State to track API calls
  const location = useLocation();

  return (
    <>
      {(loading || apiLoading) && <PreLoader />} {/* Show when page loads or API is loading */}

      <Routes>
        <Route path='/' element={<HomePage setLoading={setLoading} />} />
        <Route path='/about-us' element={<AboutPage setLoading={setLoading} />} />
        <Route path='/service/:category' element={<ServicePage setApiLoading={setApiLoading} apiLoading={apiLoading} />} />
        <Route path='/contact' element={<ContactPage setLoading={setLoading} />} />
        <Route path='/upload-portfolio' element={<UploadFilePage />} />
        <Route path='/upload-service' element={<UploadService />} />
        <Route path='/upload-category' element={<UploadCategory />} />
        <Route path='*' element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;