import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "education", label: "Education" },
    { to: "languages", label: "Skills" },
    { to: "projects", label: "Projects" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/RamiAmasha31",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "https://www.linkedin.com/in/rami-amasha81/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      href: "mailto:ramiamasha84@gmail.com",
      label: "Email",
      color: "hover:text-primary-400",
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L48 110C96 100 192 80 288 73.3C384 66.7 480 73.3 576 83.3C672 93.3 768 106.7 864 103.3C960 100 1056 80 1152 70C1248 60 1344 60 1392 60L1440 60V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z"
            fill="url(#footerGrad)"
            fillOpacity="0.05"
          />
          <defs>
            <linearGradient id="footerGrad" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#030014] pt-20 pb-8">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/25">
                  R
                </div>
                <span className="text-xl font-display font-bold text-white">
                  Rami<span className="text-primary-400">.</span>
                </span>
              </div>
              <p className="text-gray-500 leading-relaxed mb-6">
                Software Engineer & Applied Mathematician passionate about
                creating innovative solutions through code and mathematical
                modeling.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 ${link.color} transition-all duration-300`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      smooth={true}
                      offset={-80}
                      className="text-gray-500 hover:text-primary-400 cursor-pointer transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-primary-400 group-hover:w-2 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:ramiamasha84@gmail.com"
                  className="flex items-center gap-3 text-gray-500 hover:text-primary-400 transition-colors duration-300 group text-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-500/30 transition-colors">
                    <FaEnvelope className="text-sm" />
                  </div>
                  ramiamasha84@gmail.com
                </a>
                <div className="flex items-center gap-3 text-gray-500 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <FaPhone className="text-sm" />
                  </div>
                  0548989367
                </div>
                <div className="flex items-center gap-3 text-gray-500 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>
                  Golan Heights, Israel
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm flex items-center gap-1">
              © {currentYear} Rami Amasha. Made with{" "}
              <FaHeart className="text-red-500 text-xs animate-pulse" />{" "}
              All Rights Reserved.
            </p>
            <Link
              to="home"
              smooth={true}
              className="cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
              >
                <FaArrowUp className="text-sm" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
