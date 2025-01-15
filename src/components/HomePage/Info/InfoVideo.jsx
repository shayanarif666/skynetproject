import React, { useState } from 'react';
import video from "../../../assets/Videos/video.mp4";
import { IoPlayOutline } from "react-icons/io5";
import { ModalVideo } from '../../index';
import "./info.css";

const InfoVideo = () => {

    // State Variables
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // React Modal
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <>
            <section id="infoVideo" className='py-10 info-video-after' data-scroll-section>
                <div className="container info-video-container">
                    <div className="row flex items-center g-0">
                        <div className="col-12 info-video-content flex items-center">
                            <div className="video-thumb">
                                <video autoPlay loop muted src={video} onClick={openModal}></video>
                                <div className="info-video-icon">
                                    <IoPlayOutline onClick={openModal} />
                                    <ModalVideo openModal={openModal} closeModal={closeModal} isOpen={modalIsOpen} />
                                </div>
                            </div>
                            <div className="info-video-content-description ms-4">
                                <h4 className='text-xl text-white font-semibold'>See Our Work In Action</h4>
                                <h5 className='text-md text-white'>1 Minute</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InfoVideo
