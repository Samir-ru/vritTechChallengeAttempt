import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import techStack from "./assets/techstack.png";

const courseData = [
  {
    id: 0,
    count: "23",
    title: "All Courses",
    subtitle: "courses you’re powering through right now.",
    button: "View all Courses →",
  },
  {
    id: 1,
    count: "05",
    title: "Upcoming Courses",
    subtitle: "exciting new courses waiting to boost your skills.",
    button: "View all Courses →",
  },
  {
    id: 2,
    count: "10",
    title: "Ongoing Courses",
    subtitle: "currently happening—don’t miss out on the action!",
    button: "View all Courses →",
  },
];

export default function AnimatedCardGrid() {
  const [activeCard, setActiveCard] = useState(0);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="w-11/12 md:w-9/12 mx-auto">
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10 auto-rows-fr"
        style={{ height: "520px" }}
      >
        {courseData.map((card, index) => {
          const isActive = activeCard === index;

          return (
            <motion.div
              key={card.id}
              layout
              layoutId={`card-${index}`}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setClickPosition({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
                setActiveCard(index);
              }}
              className="cursor-pointer relative overflow-hidden rounded-xl p-6 flex items-center justify-center h-full bg-lightRed"
              style={{
                gridColumn: isActive ? "span 2" : "span 1",
              }}
              transition={{
                layout: { duration: 0.6, ease: "easeInOut" },
              }}
            >
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key={`circle-${index}`}
                    className="absolute bg-DarkRed w-full h-full z-0 bottom-[-50%] left-[-50%] rounded-full"
                    initial={{ width: 0, height: 0 }}
                    animate={{ width: "300%", height: "300%" }}
                    exit={{ width: 0, height: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                )}
              </AnimatePresence>

              <motion.div className="z-10 w-full h-full relative flex justify-start">
                {isActive && (
                  <>
                    <motion.button
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.6 }}
                      className="text-white font-bold absolute right-0"
                    >
                      {card.button}
                    </motion.button>
                    <motion.img
                      src={techStack}
                      initial={{ opacity: 0, x: -100, y: 100 }}
                      animate={{ opacity: 1, x: 50, y: 100 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.8 }}
                      className="absolute w-28 sm:w-36 md:w-48 lg:w-56"
                    />
                  </>
                )}

                {/* Count */}
                <h1
                  className={`font-bold z-10 self-end ${
                    isActive ? "text-white" : "text-DarkRed"
                  } text-[2.5rem] md:text-[3.6rem]`}
                >
                  {card.count}+
                </h1>

                {/* Title + Subtitle */}
                <div
                  className={`absolute bottom-[1.5rem] left-[30%] origin-top-left transition-all duration-300 ${
                    !isActive ? "straight" : ""
                  }`}
                >
                  <h2
                    className={`font-bold ${
                      isActive ? "text-white" : "text-DarkRed"
                    } text-base md:text-xl`}
                  >
                    {card.title}
                  </h2>
                  <p
                    className={`${
                      isActive ? "text-white" : "text-DarkRed"
                    } text-xs md:text-xs`}
                  >
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
