import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

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
                                    <Link to="/custom-web-design">Custom Web Design</Link>
                                    <Link to="/branding-service">Branding Services</Link>
                                    <Link to="/ecommerce-design" s>eCommerce Design</Link>
                                    <Link to="/shopify-website-design">Shopify Website Design</Link>
                                    <Link to="/wordpress-web-design">WordPress Web Design</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-menus-links">
                                <h3>Apps & Development</h3>
                                <div className="footer-menus">
                                    <Link to="/website-cost-calculator">Website Cost Calculator</Link>
                                    <Link to="/conversion-rate-calculator">Conversion Rate Calculator</Link>
                                    <Link to="/custom-web-development">Custom Web Development</Link>
                                    <Link to="/magento-development">Magento Development</Link>
                                    <Link to="/ecommerce-development">eCommerce Development</Link>
                                    <Link to="/woocommerce-development">WooCommerce Development</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-menus-links">
                                <h3>Location Services</h3>
                                <div className="footer-menus">
                                    <Link to="/nyc-web-design">NYC Web Design</Link>
                                    <Link to="/location">Karachi Web Design</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-menus-links">
                                <h3>Company</h3>
                                <div className="footer-menus">
                                    <Link to="/about">About Us</Link>
                                    <Link to="/case-studies">Case Studies</Link>
                                    <Link to="/digital-trends">Digital Trends</Link>
                                    <Link to="/top-companies">Top Companies</Link>
                                    <Link to="/reviews">Reviews</Link>
                                    <Link to="/sitemap">Sitemap</Link>
                                    <Link to="/locations">Locations</Link>
                                    <Link to="/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-20 flex items-center">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-6">
                            <Link to={`/`}>
                                <img src="https://skynetsilicon.com/assets/logo-white-BdqYBoKE.png" className='img-fluid' alt="" />
                            </Link>
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7 col-6">
                            <div className="effect-design-line"></div>
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
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="effect-design-line"></div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="footer-extra-menus md:flex items-center text-center">
                                <p className='text-white text-sm'>©2025 Skynet Silicon. All rights reserved</p>
                                <div className="footer-extra-menus-links md:ms-8 lg:ms-20">
                                    <Link to="/privacy-policy" className='text-white me-4 text-sm'>Privacy Policy</Link>
                                    <Link to="/accessibility" className='text-white me-4 text-sm'>Accessibility</Link>
                                    <Link to="tel:+923313908443" className='text-white me-4 text-sm'>Call us at (+92) 3313908443</Link>
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