import React from 'react'

const NavbarMenuItems = ({
  isClick
}) => {
  return (
    <>
      <div className={`links ${isClick ? "opacity-100" : "opacity-0"}`}>
        <ul>
          <li>
            <a href="#" style={{ "--i": "0.05s" }}>About</a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.1s" }}>Services</a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.15s" }}>Work History</a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.2s" }}>Digital Trends</a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.3s" }}>Case Studies</a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.35s" }}>Contact</a>
          </li>
          <div className="quote mt-10">
            <button className="text-white text-3xl">Request a Quote</button>
          </div>
        </ul>

      </div>
    </>
  )
}

export default NavbarMenuItems
