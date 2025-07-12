import React from "react";
import { motion } from "framer-motion";

import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import under1 from "./assets/under1.png";
import under2 from "./assets/under2.png";
import wow from "./assets/wow.png";
import arrow from "./assets/arrow.png"; // Arrow image

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
    <div className="w-9/12 h-9/12 md:h-11/12 flex flex-col">
      <div className="mb-4">
        <p className="heading-subtitle">Your SkillShikshya Journey</p>
        <h1 className="heading-title">
          <span className="text-green-600">Step</span> In.{" "}
          <span className="text-green-600">Skill</span> Up.{" "}
          <span className="text-green-600">Stand</span> Out. 🚀
        </h1>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-grow">
        {/* Box 1 */}
        <div className="relative rounded-lg shadow-lg flex items-center justify-center text-white font-bold">
          <div className="bg-brightRed absolute h-full w-full rounded-lg overflow-hidden">
            <div className="cutOutRight">
              <button className="cutBtn">
                <img src={arrow} alt="arrow" className="w-4 h-4" />
              </button>
            </div>
            <h1 className="box1-caption">
              Clarity unlocked— <br />
              stickers, sips, and skills <br />
              all in one go!
            </h1>
            <img src={wow} className="box1-wow1" alt="" />
            <img src={wow} className="box1-wow2" alt="" />
            <img src={under1} className="box1-under1" alt="" />
            <div className="cutOutLeft">
              <button className="cutBtn">
                <img src={arrow} alt="arrow" className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>
          <motion.div
            className="bg-brightRed z-10 h-full w-full rounded-lg flex justify-center items-center absolute px-6 text-left"
            whileHover={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="box-content box-right">
              <h2 className="box-heading">Start with Clarity</h2>
              <p className="box-subheading">
                Step into a better learning path.
              </p>
              <p className="box-description">
                Overwhelmed by too many learning options? SkillShikshya provides
                a clear, curated roadmap from the start. Whether you're a
                beginner or upskilling, we have a path tailored to your growth.
              </p>
            </div>
            <motion.img
              src={img1}
              alt="1"
              className="box-image box-image-left"
              {...floatAnimation}
            />
          </motion.div>
        </div>

        {/* Box 2 */}
        <div className="relative rounded-lg shadow-lg flex items-center justify-center text-white font-bold">
          <div className="bg-paleGreen absolute h-full w-full rounded-lg overflow-hidden">
            <div className="cutOutRight">
              <button className="cutBtn">
                <img src={arrow} alt="arrow" className="w-4 h-4" />
              </button>
            </div>
            <h1 className="box2-caption">
              Focused faces—learning <br />
              mode: ON
            </h1>
            <img src={under2} className="box2-under2" alt="" />
            <div className="cutOutLeft">
              <button className="cutBtn">
                <img src={arrow} alt="arrow" className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>
          <motion.div
            className="bg-paleGreen z-10 h-full w-full rounded-lg flex justify-center items-center absolute px-6 text-left"
            whileHover={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="box-content box-left">
              <h2 className="box-heading">Learn by Doing</h2>
              <p className="box-subheading">Practical skills, real projects.</p>
              <p className="box-description">
                Theory is great, but action is better. At SkillShikshya, you
                learn by doing. Hands-on projects and real-world scenarios help
                you build, break, and create—leading to true mastery.
              </p>
            </div>
            <motion.img
              src={img2}
              alt="2"
              className="box-image box-image-right"
              {...floatAnimation}
            />
          </motion.div>
        </div>

        {/* Box 3 */}
        <div className="relative bg-palePurple rounded-lg shadow-lg flex items-center justify-center text-white font-bold px-6 text-left">
          <div className="box-content box-right">
            <h2 className="box-heading">Get Mentored & Supported</h2>
            <p className="box-subheading">You're not learning alone.</p>
            <p className="box-description">
              Stuck or need feedback? SkillShikshya’s community of mentors and
              learners has your back with live support, interactive discussions,
              and expert insights. You’re never on your own.
            </p>
          </div>
          <motion.img
            src={img3}
            alt="3"
            className="box-image box-image-left"
            {...floatAnimation}
          />
        </div>

        {/* Box 4 */}
        <div className="relative bg-brownishYellow rounded-lg shadow-lg flex items-center justify-center text-white font-bold px-6 text-left">
          <div className="box-content box-left">
            <h2 className="box-heading">Achieve & Showcase</h2>
            <p className="box-subheading">
              Build your portfolio, get job-ready.
            </p>
            <p className="box-description">
              Your journey ends with achievement. Each completed project builds
              a portfolio showcasing your skills and job readiness, bringing you
              closer to that dream job, promotion, or your own venture.
            </p>
          </div>
          <motion.img
            src={img4}
            alt="4"
            className="box-image box-image-right"
            {...floatAnimation}
          />
        </div>
      </div>
    </div>
  );
}
