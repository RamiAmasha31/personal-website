import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Brand Logo */}
        <a className="text-xl font-bold text-black" href="#home">
          Rami Amasha
        </a>

        {/* Hamburger Icon for Mobile View */}
        <button className="lg:hidden text-black" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <Link
            to="home"
            smooth={true}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="experience"
            smooth={true}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="education"
            smooth={true}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            Education
          </Link>
          <Link
            to="languages"
            smooth={true}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            Languages
          </Link>
          <Link
            to="projects"
            smooth={true}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            Projects
          </Link>
        </div>
      </div>

      {/* Full-Screen Menu for Mobile View */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-80 flex flex-col items-center justify-center z-20">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col space-y-8 text-white text-xl">
            <li>
              <Link
                to="home"
                smooth={true}
                onClick={toggleMenu}
                className="opacity-100 hover:opacity-50 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                onClick={toggleMenu}
                className="opacity-100 hover:opacity-50 cursor-pointer"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="education"
                smooth={true}
                onClick={toggleMenu}
                className="opacity-100 hover:opacity-50 cursor-pointer"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="languages"
                smooth={true}
                onClick={toggleMenu}
                className="opacity-100 hover:opacity-50 cursor-pointer"
              >
                Languages
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                onClick={toggleMenu}
                className="opacity-100 hover:opacity-50 cursor-pointer"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
