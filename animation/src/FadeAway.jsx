import React from "react";
import { motion } from "framer-motion";

import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";

const floatAnimation = {
  animate: {
    y: ["0%", "-3%", "0%"],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function FadeAway() {
  return (
    <div className="w-9/12 h-9/12 flex flex-col">
      <div className="mb-4">
        <p className="mb-2">Your SkillShikshya Journey</p>
        <h1 className="text-2xl font-bold">
          <span className="text-green-600">Step</span> In.{" "}
          <span className="text-green-600">Skill</span> Up.{" "}
          <span className="text-green-600">Stand</span> Out. 🚀
        </h1>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-grow">
        {/* Box 1 */}
        <div className="relative rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold">
          <div className="bg-brightRed absolute h-full w-full rounded-lg overflow-hidden">
            <div className="cutOutRight">
              <button className="cutBtn">{"->"}</button>
            </div>
            <div className="cutOutLeft">
              <button className="cutBtn">{"<-"}</button>
            </div>
          </div>
          <motion.div
            className="bg-brightRed z-10 h-full w-full rounded-lg flex justify-center items-center absolute px-6 text-left"
            whileHover={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-6/10 text-right absolute right-3">
              <h2 className="text-xl font-bold mb-2">Start with Clarity</h2>
              <p className="text-sm font-semibold mb-1">
                Step into a better learning path.
              </p>
              <p className="text-sm font-thin">
                Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.
              </p>
            </div>
            <motion.img
              src={img1}
              alt="1"
              className="absolute left-[-8%] bottom-[-20%] h-full object-contain"
              {...floatAnimation}
            />
          </motion.div>
        </div>

        {/* Box 2 */}
        <div className="relative rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold ">
          <div className="bg-paleGreen absolute h-full w-full rounded-lg overflow-hidden">
            <div className="cutOutRight">
              <button className="cutBtn">{"->"}</button>
            </div>
            <div className="cutOutLeft">
              <button className="cutBtn">{"<-"}</button>
            </div>
          </div>
          <motion.div
            className="bg-paleGreen z-10 h-full w-full rounded-lg flex justify-center items-center absolute px-6 text-left"
            whileHover={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-6/10 absolute left-3">
              <h2 className="text-xl font-bold mb-2">Learn by Doing</h2>
              <p className="text-sm font-semibold mb-1">
                Practical skills, real projects.
              </p>
              <p className="text-sm font-thin">
                Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.
              </p>
            </div>
            <motion.img
              src={img2}
              alt="2"
              className="absolute right-[-8%] bottom-[-20%] h-full object-contain"
              {...floatAnimation}
            />
          </motion.div>
        </div>

        {/* Box 3 */}
        <div className="relative bg-palePurple rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold px-6 text-left">
          <div className="w-6/10 absolute  text-right right-3">
            <h2 className="text-xl font-bold mb-2">Get Mentored & Supported</h2>
            <p className="text-sm font-semibold mb-1">You're not learning alone.</p>
            <p className="text-sm font-thin">
              Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.
            </p>
          </div>
          <motion.img
            src={img3}
            alt="3"
            className="absolute left-[-8%] bottom-[-20%] h-full object-contain"
            {...floatAnimation}
          />
        </div>

        {/* Box 4 */}
        <div className="relative bg-brownishYellow rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold px-6 text-left">
          <div className="w-6/10 text-left absolute left-3">
            <h2 className="text-xl font-bold mb-2">Achieve & Showcase</h2>
            <p className="text-sm font-semibold mb-1">
              Build your portfolio, get job-ready.
            </p>
            <p className="text-sm font-thin">
              Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.
            </p>
          </div>
          <motion.img
            src={img4}
            alt="4"
            className="absolute right-[-8%] bottom-[-20%] h-full object-contain"
            {...floatAnimation}
          />
        </div>
      </div>
    </div>
  );
}
