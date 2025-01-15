import React from 'react';
import "./comingSoon.css";

const ComingSoon = () => {
  return (
    <>
      <div id="comingSoon">
        <div className="coming-soon-effect"></div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="coming-soon-logo">
                <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                  <image href="../../public/Images/SNS-White.svg" width="200" />
                </svg>
              </div>
            </div>
            <div className="col-12">
              <div className="coming-soon-content">
                <h5 className='text-white'>Our New Site Is</h5>
                <h1>COMING SOON</h1>
                <p>From automation of people processes to creating <br className='d-lg-block d-none' /> an engaged and driven culture.</p>
                {/* <div className="input-box">
                  <input type="email" className='form-control' placeholder='Please enter your email' />
                  <button className='bg-white text-dark font-bold px-8 py-2 rounded'>Notify Me</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComingSoon
