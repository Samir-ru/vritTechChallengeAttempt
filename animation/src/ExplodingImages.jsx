import React, { useState } from 'react';
import { motion } from 'framer-motion';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import image7 from "./assets/image7.png";
import image8 from "./assets/image8.png";
import image9 from "./assets/image9.png";
import image10 from "./assets/image10.png";
import image11 from "./assets/image11.png";

const images = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10, image11
];

const ExplodingImages = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center">
      <div
        className="relative w-[800px] h-[400px] flex items-center justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Center content */}
        <div className="z-10 text-center">
          <p>Hear How They Level Up Their Game!</p>
          <h1 className="text-2xl font-bold mb-4 text-center">Skills <span className='text-green-700'>Masters</span> Unite! 🤝</h1>
          <button className='font-bold hover:animate-pulse cursor-pointer flex gap-2 justify-center items-center mx-auto hover:gap-3 transition-all'> View all testimonial <span>→ </span></button>
        </div>

        {/* Floating images in elliptical pattern */}
        {images.map((img, i) => {
          const angle = (360 / images.length) * i;

// ussing different radius for gifs and images
          const baseX = i % 2 === 0 ? 240: 160;
          const baseY = i % 2 === 0 ? 200: 150;

          const radiusX = hovered ? baseX + 150 : baseX;
          const radiusY = hovered ? baseY + 100 : baseY;

          const x = radiusX * Math.cos((angle * Math.PI) / 180);
          const y = radiusY * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.img
              key={i}
              src={img}
              alt={`img-${i}`}
              className="absolute w-17 h-17 rounded-3xl object-cover shadow-lg  duration-75 transition-all ease-in-out"
              initial={{ x: 0, y: 0 }}
              animate={{
                x,
                y,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }
              }}
              whileHover={{
                scale: 1.1,
                transition: { type: 'spring', stiffness: 300 }
              }}
              whileInView={{
                y: [y, y - 5, y],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut'
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExplodingImages;
