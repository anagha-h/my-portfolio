import React from 'react';

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50">
      <ul className="flex justify-around">
        <li>
          <a href="#about" className="hover:text-teal-400">About</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-teal-400">Skills</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-teal-400">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-teal-400">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
