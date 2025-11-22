import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black fixed w-full z-50 shadow-2xl border-b border-blue-500/20 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center p-3">
        {/* Brand Logo */}
        <a className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform" href="#home">
          Rami Amasha
        </a>

        {/* Hamburger Icon for Mobile View */}
        <button className="lg:hidden text-blue-400 hover:text-cyan-400 transition-colors" onClick={toggleMenu}>
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
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 hover:from-blue-400 hover:to-cyan-400 cursor-pointer font-medium transition-all duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="about"
            smooth={true}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 hover:from-blue-400 hover:to-cyan-400 cursor-pointer font-medium transition-all duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="experience"
            smooth={true}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 hover:from-blue-400 hover:to-cyan-400 cursor-pointer font-medium transition-all duration-300 relative group"
          >
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="education"
            smooth={true}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 hover:from-blue-400 hover:to-cyan-400 cursor-pointer font-medium transition-all duration-300 relative group"
          >
            Education
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="languages"
            smooth={true}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 hover:from-blue-400 hover:to-cyan-400 cursor-pointer font-medium transition-all duration-300 relative group"
          >
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="projects"
            smooth={true}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 hover:from-blue-400 hover:to-cyan-400 cursor-pointer font-medium transition-all duration-300 relative group"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </div>

      {/* Full-Screen Menu for Mobile View */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900 bg-opacity-95 backdrop-blur-lg flex flex-col items-center justify-center z-20">
          <button
            className="absolute top-4 right-4 text-blue-400 hover:text-cyan-400 transition-colors"
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
          <ul className="flex flex-col space-y-8 text-2xl">
            <li>
              <Link
                to="home"
                smooth={true}
                onClick={toggleMenu}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 hover:from-blue-400 hover:to-cyan-400 cursor-pointer transition-all duration-300 transform hover:scale-110"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                onClick={toggleMenu}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 hover:from-blue-400 hover:to-cyan-400 cursor-pointer transition-all duration-300 transform hover:scale-110"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                onClick={toggleMenu}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 hover:from-blue-400 hover:to-cyan-400 cursor-pointer transition-all duration-300 transform hover:scale-110"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="education"
                smooth={true}
                onClick={toggleMenu}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 hover:from-blue-400 hover:to-cyan-400 cursor-pointer transition-all duration-300 transform hover:scale-110"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="languages"
                smooth={true}
                onClick={toggleMenu}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 hover:from-blue-400 hover:to-cyan-400 cursor-pointer transition-all duration-300 transform hover:scale-110"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                onClick={toggleMenu}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 hover:from-blue-400 hover:to-cyan-400 cursor-pointer transition-all duration-300 transform hover:scale-110"
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
