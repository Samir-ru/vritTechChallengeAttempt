import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { h1 } from 'framer-motion/client';

export default function AnimatedCardGrid() {
  const [activeCard, setActiveCard] = useState(0);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const cards = [0, 1, 2];

  return (
    <div className="w-9/12">
      {/* Grid Layout */}
      <div className="grid grid-cols-4 gap-4 relative z-10 auto-rows-fr">
        {cards.map((card, index) => {
          const isActive = activeCard === index;

          return (
            <motion.div
              key={index}
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
              className="cursor-pointer relative overflow-hidden rounded-xl shadow-xl p-6 flex items-center justify-center min-h-[300px]"
              style={{
                gridColumn: isActive ? 'span 2' : 'span 1',
                backgroundColor: '#ffffff',
              }}
              transition={{
                layout: { duration: 0.5, ease: 'easeInOut' },
              }}
            >
              {/* Circle inside the card for background effect */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key={`circle-${index}`}
                    className="absolute bg-purple-300 w-full h-full z-0 bottom-[-50%] left-[-50%] rounded-full"
                    initial={{ width: 0, height: 0}}
                    animate={{ width: '300%', height: '300%', }}
                    exit={{ width: 0, height: 0}}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                )}
              </AnimatePresence>
              <motion.div>

              </motion.div>
            </motion.div>
            
          );
        })}

      </div>
    </div>
  );
}
