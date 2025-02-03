import React from 'react';
import { motion } from "framer-motion";

const HeaderOverlay = React.memo(() => {
  // Portfolio Images
  const portfolio = [
    { id: 1, src: "/Images/Portfolio/1.jpg" },
    { id: 2, src: "/Images/Portfolio/2.webp" },
    { id: 3, src: "/Images/Portfolio/3.jpg" },
    { id: 4, src: "/Images/Portfolio/4.jpg" },
    { id: 5, src: "/Images/Portfolio/1.jpg" },
    { id: 6, src: "/Images/Portfolio/2.webp" },
    { id: 7, src: "/Images/Portfolio/3.jpg" },
    { id: 8, src: "/Images/Portfolio/4.jpg" },
    { id: 9, src: "/Images/Portfolio/3.jpg" },
    { id: 10, src: "/Images/Portfolio/4.jpg" },
  ];

  // Three Columns for Image Overlays
  const heroImagesOverlayColumn = [portfolio, portfolio, portfolio];

  return (
    <div className="hero_section_images_overlays flex md:flex-row flex-col scale-125">
      {heroImagesOverlayColumn.map((column, index) => (
        <motion.div
          key={index}
          className="hero_section_images_overlay_box"
          initial={{ y: 0 }}
          animate={{ y: index % 2 === 0 ? "-200px" : "200px" }}
          transition={{ ease: "linear", repeat: Infinity, repeatType: "loop", duration: 13 }}
          style={{ overflow: "hidden", willChange: "transform" }} // GPU Optimization
        >
          {column.map(({ id, src }) => (
            <img
              key={id}
              src={src}
              alt="Portfolio Image"
              className="w-full p-1 rounded-lg"
              loading="lazy" // Lazy loading for performance boost
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
});

export default HeaderOverlay;