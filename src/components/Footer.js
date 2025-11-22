import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 border-t border-blue-500/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Rami Amasha</h3>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 leading-relaxed text-lg">
              Software Engineer & Applied Mathematician passionate about creating innovative solutions through code and mathematical modeling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  className="text-blue-400 hover:text-cyan-400 cursor-pointer transition-colors text-lg flex items-center group"
                >
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  className="text-blue-400 hover:text-cyan-400 cursor-pointer transition-colors text-lg flex items-center group"
                >
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  smooth={true}
                  className="text-blue-400 hover:text-cyan-400 cursor-pointer transition-colors text-lg flex items-center group"
                >
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  className="text-blue-400 hover:text-cyan-400 cursor-pointer transition-colors text-lg flex items-center group"
                >
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center group">
                <FaEnvelope className="mr-4 text-blue-400 text-xl group-hover:scale-110 transition-transform" />
                <a href="mailto:ramiamasha84@gmail.com" className="text-lg text-blue-400 hover:text-cyan-400 transition-colors">
                  ramiamasha84@gmail.com
                </a>
              </div>
              <div className="flex items-center group">
                <FaPhone className="mr-4 text-blue-400 text-xl group-hover:scale-110 transition-transform" />
                <span className="text-lg text-blue-400">0548989367</span>
              </div>
              <div className="flex items-center group">
                <FaMapMarkerAlt className="mr-4 text-blue-400 text-xl group-hover:scale-110 transition-transform" />
                <span className="text-lg text-blue-400">Golan Heights, Israel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-blue-500/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-8 mb-6 md:mb-0">
              <a
                href="https://github.com/RamiAmasha31"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
                aria-label="GitHub"
              >
                <FaGithub className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/rami-amasha81/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-8 w-8" />
              </a>
              <a
                href="mailto:ramiamasha84@gmail.com"
                className="text-blue-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
                aria-label="Email"
              >
                <FaEnvelope className="h-8 w-8" />
              </a>
            </div>
            <p className="text-blue-400 text-lg flex items-center">
              &copy; {new Date().getFullYear()} Rami Amasha. Made with <FaHeart className="text-red-500 mx-2 animate-pulse" /> All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
