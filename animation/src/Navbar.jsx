import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      className="fixed bottom-2 left-[50%] translate-x-[-50%] bg-gray-800/70 text-white p-3 rounded-full flex justify-center items-center"
      style={{ zIndex: 1000 }}
    >
      <ul className="flex justify-between items-center">
        <li className="mr-4">
          <Link to="/">Task 1</Link>
        </li>
        <li className="mr-4">
          <Link to="/fade">Task2</Link>
        </li>
        <li className="mr-4">
          <Link to="/grid">Task3</Link>
        </li>
        <li className="mr-4">
          <Link to="/purple">Task4</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;