import React, { useState } from "react";
import "./style.css"
import { Header, Navbar, NavbarMenuItems } from "../components/index";

const HomePage = () => {

  const [isClick, setIsClick] = useState(false);

  const handleSideMenu = () => {
    setIsClick(!isClick);
  }

  return (
    <>
      <div className={`container-full h-[100vh] w-[100vw] ${isClick ? "active overflow-hidden" : ""}`}>

        <Navbar onSideMenuChange={handleSideMenu} />

        <div className="main-container">
          <div className={`relative left-0 main w-full z-50 origin-left border-[#ffffff66] transition-all duration-500 h-screen`}>
            <Header bgColor="bg-gradient-to-r from-[#30007d] to-[#000]" />
            <main id="main_sections" className={`transition-all duration-500 ${isClick ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}>
              <section className="bg-sky-950 py-24">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <h2>Hello</h2>
                    </div>
                    <div className="col-6">
                      <h2>Hello</h2>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-red-950 py-24">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <h2>Hello</h2>
                    </div>
                    <div className="col-6">
                      <h2>Hello</h2>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-purple-950 py-24">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <h2>Hello</h2>
                    </div>
                    <div className="col-6">
                      <h2>Hello</h2>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-blue-700 py-24">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <h2>Hello</h2>
                    </div>
                    <div className="col-6">
                      <h2>Hello</h2>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-green-950 py-24">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <h2>Hello</h2>
                    </div>
                    <div className="col-6">
                      <h2>Hello</h2>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-orange-600 py-24">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <h2>Hello</h2>
                    </div>
                    <div className="col-6">
                      <h2>Hello</h2>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>

          <div className="shadow one"></div>
          <div className="shadow two"></div>
        </div>

        <NavbarMenuItems isClick={isClick} />

      </div>
    </>
  );
};

export default HomePage;
