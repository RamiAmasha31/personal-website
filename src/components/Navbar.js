import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["home", "about", "experience", "education", "languages", "projects"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "education", label: "Education" },
    { to: "languages", label: "Skills" },
    { to: "projects", label: "Projects" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-2 bg-[#030014]/80 backdrop-blur-2xl shadow-lg shadow-primary-500/5 border-b border-white/[0.05]"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="container mx-auto max-w-7xl flex justify-between items-center px-6">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            className="cursor-pointer group flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary-500/25">
              R
            </div>
            <span className="text-xl font-display font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
              Rami<span className="text-primary-400">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                offset={-80}
                className={`relative px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all duration-300 ${
                  activeSection === link.to
                    ? "text-primary-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeSection === link.to && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary-500/10 rounded-lg border border-primary-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
            <a
              href="mailto:ramiamasha84@gmail.com"
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white rounded-full origin-center transition-colors"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                className="w-6 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#030014]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-6"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    offset={-80}
                    onClick={toggleMenu}
                    className={`text-3xl font-display font-bold cursor-pointer transition-all duration-300 ${
                      activeSection === link.to
                        ? "gradient-text"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="mailto:ramiamasha84@gmail.com"
                className="mt-4 px-8 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
