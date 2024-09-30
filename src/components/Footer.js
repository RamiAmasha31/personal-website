// components/Footer.js

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/RamiAmasha31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6 hover:text-gray-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/rami-amasha81/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-6 w-6 hover:text-gray-400" />
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href="mailto:Ramiamasha84@gmail.com"
            className="flex items-center space-x-2"
          >
            <FaEnvelope className="h-6 w-6" />
            <span>Email Me</span>
          </a>
        </div>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} Rami Amasha. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
