import React, { useState } from 'react';

const ROWS = 20;
const COLS = 10;
const TOTAL_CELLS = ROWS * COLS;
const PURPLE_COUNT = 9;

function getRandomPurpleCells(count) {
  const indices = new Set();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * TOTAL_CELLS));
  }
  return indices;
}

export default function Randompurple() {
  const [purpleCells, setPurpleCells] = useState(new Set());

  const handleClick = () => {
    const randomCells = getRandomPurpleCells(PURPLE_COUNT);
    setPurpleCells(randomCells);
  };

  return (
      <div
        className="grid h-full w-screen grid-cols-22 grid-rows-8"
              onClick={handleClick}
      >
        {Array.from({ length: TOTAL_CELLS }).map((_, index) => (
          <div
            key={index}
            className={`${
              purpleCells.has(index) ? 'bg-purple-600' : 'bg-transparent'
            } border border-gray-300`}
          />
        ))}
      </div>
  );
}
