import React from 'react';
import "./features.css";

const ServiceTab = () => {
    return (
        <>
            <section id="service_tab_section" className='service_tab_section py-20'>
                <div className="container">
                <ul class="nav nav-pills mb-3 w-100 flex items-center justify-around service_tab_section_tab" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">AWARDS</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">RECOGNITION</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">EXPERTISE</button>
                    </li>
                </ul>
                <hr className='mb-5' />
                <div class="tab-content service_tab_section_tab_content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="service_tab_section_content">
                                    <ul>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="service_tab_section_content">
                                    <ul>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="service_tab_section_content">
                                    <ul>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="service_tab_section_content">
                                    <ul>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                    <div className="row flex justify-between">
                            <div className="col-lg-3">
                                <div className="service_tab_section_content">
                                    <ul>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="service_tab_section_content">
                                    <ul>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="service_tab_section_content">
                                    <ul>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="service_tab_section_content">
                                    <ul>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                    <div className="row">
                            <div className="col-lg-3">
                                <div className="service_tab_section_content">
                                    <ul>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="service_tab_section_content">
                                    <ul>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="service_tab_section_content">
                                    <ul>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="service_tab_section_content">
                                    <ul>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                        <li>Brand Strategy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
        </>
    )
}

export default ServiceTab
