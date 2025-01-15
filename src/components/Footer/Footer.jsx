import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <>
            <footer id="footer" className='py-20'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <div className="footer-heading">
                                <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold'>Let's Grow Your Brand</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-menus-links">
                                <h3>Main Services</h3>
                                <div className="footer-menus">
                                    <a href="#">Custom Web Design</a>
                                    <a href="#">Branding Services</a>
                                    <a href="#">eCommerce Design</a>
                                    <a href="#">Shopify Website Design</a>
                                    <a href="#">WordPress Web Design</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-menus-links">
                                <h3>Apps & Development</h3>
                                <div className="footer-menus">
                                    <a href="#">Website Cost Calculator</a>
                                    <a href="#">Conversion Rate Calculator</a>
                                    <a href="#">Custom Web Development</a>
                                    <a href="#">Magento Developmentn</a>
                                    <a href="#">eCommerce Development</a>
                                    <a href="#">WooCommerce Development</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-menus-links">
                                <h3>Location Services</h3>
                                <div className="footer-menus">
                                    <a href="#">NYC Web Design</a>
                                    <a href="#">California Web Design</a>
                                    <a href="#">Miami Web Design</a>
                                    <a href="#">Los Angeles Web Design</a>
                                    <a href="#">Denver Web Design</a>
                                    <a href="#">San Francisco Web Design</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-menus-links">
                                <h3>Company</h3>
                                <div className="footer-menus">
                                    <a href="#">About Us</a>
                                    <a href="#">Case Studies</a>
                                    <a href="#">Digital Trends</a>
                                    <a href="#">Top Companies</a>
                                    <a href="#">Reviews</a>
                                    <a href="#">Sitemap</a>
                                    <a href="">Locations</a>
                                    <a href="#">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-20 flex items-center">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-6">
                            <img src="https://skynetsilicon.com/assets/logo-white-BdqYBoKE.png" className='img-fluid' alt="" />
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7 col-6">
                            <div className="footer-design-line"></div>
                        </div>
                    </div>
                    <div className="row mt-4 g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-company-location footer-company-location-one flex items-center">
                                <div className="footer-company-location-logo">
                                    <h1 className="logo">KH</h1>
                                </div>
                                <div className="footer-company-location-address ms-4">
                                    <address className='text-sm text-white'>St:104 Hunaid City
                                    <h6 className='text-sm text-white'>Gulistan-e-jouhar</h6>
                                    Karachi.</address>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-company-location footer-company-location-one flex items-center">
                                <div className="footer-company-location-logo">
                                    <h1 className="logo">NY</h1>
                                </div>
                                <div className="footer-company-location-address ms-4">
                                    <h6 className='text-sm text-white font-bold'>New York</h6>
                                    <address className='text-sm text-white'>17975 Collins Avenue
                                        Sunny Isles Beach,
                                        FL 33160</address>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-company-location footer-company-location-one flex items-center">
                                <div className="footer-company-location-logo">
                                    <h1 className="logo">CH</h1>
                                </div>
                                <div className="footer-company-location-address ms-4">
                                    <h6 className='text-sm text-white font-bold'>Chicago</h6>
                                    <address className='text-sm text-white'>17975 Collins Avenue
                                        Sunny Isles Beach,
                                        FL 33160</address>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-company-location footer-company-location-one flex items-center">
                                <div className="footer-company-location-logo">
                                    <h1 className="logo">CA</h1>
                                </div>
                                <div className="footer-company-location-address ms-4">
                                    <h6 className='text-sm text-white font-bold'>California</h6>
                                    <address className='text-sm text-white'>17975 Collins Avenue
                                        Sunny Isles Beach,
                                        FL 33160</address>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="footer-design-line"></div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="footer-extra-menus md:flex items-center text-center">
                                <p className='text-white text-sm'>©2025 Skynet Silicon. All rights reserved</p>
                                <div className="footer-extra-menus-links md:ms-8 lg:ms-20">
                                    <a href="#" className='text-white me-4 text-sm'>Privacy Policy</a>
                                    <a href="#" className='text-white me-4 text-sm'>Accessibility</a>
                                    <a href="tel:+923313908443" className='text-white me-4 text-sm'>Call us at (+92) 3313908443</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer