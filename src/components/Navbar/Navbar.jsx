import React, { useState, useEffect } from 'react';
import logoSrc from "../../assets/logo-white.svg"
import { Button, Logo } from "../index";

const Navbar = ({
    onSideMenuChange
}) => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Change threshold as needed
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar w-full fixed top-0 left-0 z-[999] transition-all duration-500 ${isScrolled
                ? "bg-[#33217f]"
                : "border-b-[#ffffff66] border-b"
                }`}>
                <div className="container-fluid flex-nowrap">
                    <div className="logo">
                        <Logo src={logoSrc} />
                    </div>
                    <div className="ml-[auto] navbar_request_btn sm:block hidden">
                        <a href="/coming-soon">
                            <Button className="text-white secondary-button" label="Request a Quote" />
                        </a>
                    </div>
                    <div className='navbar_hamburger_menu flex items-center' onClick={onSideMenuChange}>
                        <div className="hamburger-menu h-[4rem] w-[3rem] cursor-pointer flex items-center justify-end">
                            <div className="bar relative transition-all duration-500 bg-[#eee] rounded-sm h-[3px] w-[1.4rem]"></div>
                        </div>
                        <h3 className="mx-4 uppercase text-xl text-extrabold text-white cursor-pointer">Menu</h3>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
