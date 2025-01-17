import React, { useContext } from 'react';
import Logo from '../Logo';
import logoSrc from "../../assets/logo-white.png";
import { RiMenu3Line } from "react-icons/ri";
import { OpenMenuContext } from '../../context/MenuContext';

const Navbar = () => {

    const { isMenuOpen, setIsMenuOpen } = useContext(OpenMenuContext);

    return (
        <>
            <nav id='navbar' className='p-3 border-b border-slate-500'>
                <div className="container-fluid" >
                    <div className="row items-center justify-between">
                        <div className="col-xl-4 col-6 my-auto" style={{ zIndex: 9 }}>
                            <div className="navbar-logo"  >
                                <Logo src={logoSrc} />
                            </div>
                        </div>
                        <div className="col-xl-4 col-6">
                            <div className="navbar-menus flex items-center justify-end">
                                <button className='secondary-button text-white me-3 md:block hidden' style={{ zIndex: 9 }}>REQUEST A QUOTE</button>
                                <div className="navbar-menu-icon flex items-center cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                    <RiMenu3Line className='text-white text-4xl font-semibold me-2 cursor-pointer z-50' />
                                    <p className='text-white text-2xl font-semibold me-3 sm:block hidden z-50'>Menu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
