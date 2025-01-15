import React, { useState } from "react";
import ReactModal from "react-modal";
import { FaXmark } from "react-icons/fa6";
import "./modalVideo.css";

const ModalVideo = ({
    openModal,
    closeModal,
    isOpen
}) => {
    return (
        <>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                    content: {
                        background: "none !important",
                        borderColor: "transparent !important",
                        maxWidth: "100vw",
                        margin: "auto",
                        borderRadius: "0px",
                        padding: "0px",
                    },
                }}
            >
                <div className="modal-video">
                    <video src="https://www.digitalsilk.com/wp-content/uploads/2022/07/video.mp4" autoPlay loop muted></video>
                    <div className="modal-video-close">
                        <button className="modal-video-close-icon" onClick={closeModal}><FaXmark /></button>
                    </div>
                </div>
            </ReactModal>
        </>
    )
}

export default ModalVideo;
