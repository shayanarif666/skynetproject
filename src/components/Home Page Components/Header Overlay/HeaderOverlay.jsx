import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"

const HeaderOverlay = () => {

  const [filePath, setFilePath] = useState([]);

  // Portfolio Images
  const portfolio = [
    {
      id: 1,
      src: "../../../../public/Images/Portfolio/1.jpg"
    },
    {
      id: 2,
      src: "../../../../public/Images/Portfolio/2.webp"
    },
    {
      id: 3,
      src: "../../../../public/Images/Portfolio/3.jpg"
    },
    {
      id: 4,
      src: "../../../../public/Images/Portfolio/4.jpg"
    },
    {
      id: 5,
      src: "../../../../public/Images/Portfolio/1.jpg"
    },
    {
      id: 6,
      src: "../../../../public/Images/Portfolio/2.webp"
    },
    {
      id: 7,
      src: "../../../../public/Images/Portfolio/3.jpg"
    },
    {
      id: 8,
      src: "../../../../public/Images/Portfolio/4.jpg"
    },
    {
      id: 9,
      src: "../../../../public/Images/Portfolio/3.jpg"
    },
    {
      id: 10,
      src: "../../../../public/Images/Portfolio/4.jpg"
    },
  ]

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/portfolio");
  //       const data = await response.json();
  //       setFilePath(data);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })()
  // }, [])

  // Columns Per Image
  const heroImagesOverlayColumn = [portfolio, portfolio, portfolio];

  // console.log("filepath", filePath.slice(0, 10))

  return (
    <>
      <div className="hero_section_images_overlays flex md:flex-row flex-col scale-125">
        {heroImagesOverlayColumn
          .fill(portfolio)
          .map((column, index) => (
            <motion.div
              key={index}
              className="hero_section_images_overlay_box"
              initial={{ y: 0 }}
              animate={{ y: index % 2 === 0 ? "-200px" : "200px" }}
              transition={{ ease: "linear", repeat: Infinity, repeatType: "loop", duration: 13 }}
              style={{ overflow: "hidden" }}
            >
              {column.map(({ id, src }) => (
                <img
                  key={id}
                  src={src}
                  alt="Image"
                  className="w-full p-1 rounded-lg"
                />
              ))}
            </motion.div>
          ))}
      </div>
    </>
  )
}

export default HeaderOverlay;
