import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "education", label: "Education" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section, checking from the bottom of the page up
      for (const { to } of [...navLinks].reverse()) {
        const el = document.getElementById(to);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(to);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-4 pt-3"
      >
        <div
          className={`mx-auto max-w-6xl flex justify-between items-center rounded-2xl border px-3 py-2 transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-surface/70 backdrop-blur-2xl shadow-2xl shadow-shade/30"
              : "border-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            to="home"
            href="#home"
            smooth={true}
            className="cursor-pointer flex items-center gap-3"
          >
            <span className="brand-mark w-9 h-9 text-sm">RA</span>
            <span className="font-semibold tracking-tight text-white">Rami Amasha</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                href={`#${link.to}`}
                smooth={true}
                offset={-80}
                className={`relative px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.to
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {activeSection === link.to && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/[0.07] rounded-lg border border-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
            <Link
              to="contact"
              href="#contact"
              smooth={true}
              offset={-40}
              className="btn-holo ml-3 !px-5 !py-2 text-sm"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:ml-3">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-white rounded-full origin-center"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                  className="block w-6 h-0.5 bg-white rounded-full"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-white rounded-full origin-center"
                />
              </div>
            </button>
          </div>
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
            className="fixed inset-0 z-40 bg-canvas/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.05 }}
                >
                  <Link
                    to={link.to}
                    href={`#${link.to}`}
                    smooth={true}
                    offset={-80}
                    onClick={toggleMenu}
                    className={`text-3xl font-semibold tracking-tight cursor-pointer transition-colors duration-300 ${
                      activeSection === link.to
                        ? "text-primary-300"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="contact"
                href="#contact"
                smooth={true}
                offset={-40}
                onClick={toggleMenu}
                className="btn-holo mt-4"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
