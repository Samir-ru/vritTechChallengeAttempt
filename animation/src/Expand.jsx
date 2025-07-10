import React from "react";

import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";
import image7 from "./assets/image7.png";
import image8 from "./assets/image8.png";
import image9 from "./assets/image9.png";
import image10 from "./assets/image10.png";
import image11 from "./assets/image11.png";

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
  image10,
  image11,
];

export default function Expand() {
  const redOvalImages = images.filter((_, i) => i % 2 === 0); // Odd (0-based even idx)
  const blueOvalImages = images.filter((_, i) => i % 2 !== 0); // Even (0-based odd idx)

  const getPosition = (index, total, radiusX, radiusY) => {
    const angle = (2 * Math.PI * index) / total - Math.PI / 2;
    const x = radiusX * Math.cos(angle);
    const y = radiusY * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="group w-9/12 h-9/12 flex items-center justify-centerrelative z-10 mx-auto my-10 rounded-lg overflow-visible">
      {/* Red Oval */}
      <div
        className="w-[900px] h-[600px] rounded-full absolute top-1/2 left-1/2
                      transform -translate-x-1/2 -translate-y-1/2
                      transition-transform duration-300
                      group-hover:scale-130 group-hover: small-bounce
                      flex items-center justify-center overflow-visible"
      >
        {/* Blue Oval */}
        <div
          className="w-[400px] h-[200px] rounded-full relative
                        transition-transform duration-300
                        group-hover:scale-110
                        flex items-center justify-center overflow-visible z-10"
        >
          <div className="flex flex-col items-center justify-center text-black text-center z-20">
            <p>Hear How They Level Up Their Game</p>
            <h2 className="text-lg font-bold">Skill Masters Unite</h2>
            <button
              className="mt-2 px-3 py-1 text-black rounded-md cursor-pointer pointer-events-auto"
              onClick={() => {
                alert("View Testimonial");
              }}
            >
              View Testimonial -{">"}
            </button>
          </div>

          {/* Blue oval images */}
{blueOvalImages.map((img, idx) => {
  const { x, y } = getPosition(idx, blueOvalImages.length, 220, 130);
  return (
    <img
      key={`blue-${idx}`}
      src={img}
      alt=""
      className="absolute w-20 h-20 object-cover"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
        width: "60px",
        height: "60px",
      }}
    />
  );
})}
        </div>

        {/* Red oval images */}
{redOvalImages.map((img, idx) => {
  const { x, y } = getPosition(idx, redOvalImages.length, 350, 200);
  return (
    <img
      key={`red-${idx}`}
      src={img}
      alt=""
      className="absolute w-15 h-15 object-cover z-0"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
})}
      </div>
    </div>
  );
}
