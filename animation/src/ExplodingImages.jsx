import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.gif";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.gif";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.gif";
import image7 from "./assets/image7.png";
import image8 from "./assets/image8.gif";
import image9 from "./assets/image9.png";
import image11 from "./assets/image11.png";
import videoFile from "./assets/video.mp4";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image11,
];

const ExplodingImages = () => {
  const [hovered, setHovered] = useState(false);
  const [videoUnmuted, setVideoUnmuted] = useState(false);

  return (
    <div
      className="relative w-[800px] h-[400px] flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Center content */}
      <div className="text-center">
        <p>Hear How They Level Up Their Game!</p>
        <h1 className="text-2xl font-bold mb-4 text-center">
          Skills <span className="text-green-700">Masters</span> Unite! 🤝
        </h1>
        <button className="font-bold hover:animate-pulse cursor-pointer flex gap-2 justify-center items-center mx-auto hover:gap-3 transition-all">
          View all testimonial <span>→ </span>
        </button>
      </div>

      {/* Floating images in elliptical pattern */}
      {images.map((img, i) => {
        const angle = (360 / images.length) * i;

        const baseRadiusX = 200;
        const baseRadiusY = 70;

        const radiusX = hovered ? baseRadiusX + 60 : baseRadiusX;
        const radiusY = hovered ? baseRadiusY + 50 : baseRadiusY;

        const x = radiusX * Math.cos((angle * Math.PI) / 180);
        const y = radiusY * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={i}
            className="absolute group"
            initial={{ x: 0, y: 0 }}
            animate={{
              x,
              y,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
          >
            {/* Tooltip for image7 (index 6) */}
            {i === 6 && (
              <div className="absolute bottom-[-150%] left-1/2 -translate-x-1/2 bg-white shadow-black/30 shadow-lg text-xs px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-normal z-50 w-[250px] text-gray-700">
                <p>
                  I was amazed and impressed by the course structure as it was
                  distinctly different from other courses in the market. The
                  classes were highly interactive and the instructor was very
                  humble and friendly. Recordings of the classes were provided
                  within a short time after each class, which made revision very
                  easy and beneficial. I have recommended the same course to my
                  data-enthusiast friends.
                </p>
                  <p className="text-right"><span className="font-bold">Rajech Dhakal</span><br />Digitalmarketing Student</p>
              </div>
            )}

            {/* Video tooltip for image11 (index 9) */}
            {i === 9 && (
              <div
                className="p-2 absolute w-[150px] -top-36 left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded opacity-0 group-hover:opacity-100 transition pointer-events-auto z-20 overflow-hidden"
                onMouseEnter={() => setVideoUnmuted(true)}
                onMouseLeave={() => setVideoUnmuted(false)}
              >
                <video
                  className="w-full"
                  src={videoFile}
                  autoPlay
                  loop
                  muted={!videoUnmuted}
                  playsInline
                />
              </div>
            )}

            <motion.img
              src={img}
              alt={`img-${i}`}
              className="w-17 h-17 rounded-3xl object-cover shadow-lg duration-75 transition-all ease-in-out"
              style={{
                transform: `rotate(${angle + 90}deg)`, // Rotate image to maintain horizontal orientation
              }}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileInView={{
                y: [y, y - 5, y],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ExplodingImages;
