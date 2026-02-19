import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Backend Developer",
    "Software Engineer",
    "Applied Mathematician",
    "Problem Solver",
  ];

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const currentText = roles[currentRole];

      if (!isDeleting) {
        setTypedText(currentText.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentText.length) {
          isDeleting = true;
          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        setTypedText(currentText.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          setCurrentRole((prev) => (prev + 1) % roles.length);
          timeout = setTimeout(type, 500);
          return;
        }
      }

      timeout = setTimeout(type, isDeleting ? 50 : 100);
    };

    timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, [currentRole]);

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/RamiAmasha31", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rami-amasha81/", label: "LinkedIn" },
    { icon: <FaEnvelope />, href: "mailto:ramiamasha84@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600 orb" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-600 orb" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/30 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
                ✨ Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Rami</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-400 mb-6 h-12 font-display"
            >
              <span>{typedText}</span>
              <span className="animate-pulse text-primary-400 ml-0.5">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              Highly accomplished Backend Developer with dual expertise in Software Engineering 
              and Applied Mathematics. I utilize mathematical rigor and practical development 
              skills to solve complex engineering problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <Link
                to="projects"
                smooth={true}
                offset={-80}
                className="group relative px-7 py-3.5 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl cursor-pointer overflow-hidden shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-shadow duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <a
                href="mailto:ramiamasha84@gmail.com"
                className="px-7 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <FaEnvelope className="text-primary-400" />
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/30 hover:bg-primary-500/10 transition-all duration-300 text-lg"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              {/* Orbiting rings */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-3 h-3 bg-primary-400 rounded-full shadow-lg shadow-primary-400/50" />
              </div>
              <div className="absolute inset-[-20px] animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "12s" }}>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
              </div>

              {/* Main visual circle */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-purple-500/20 animate-morph" />
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-primary-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-display font-bold gradient-text mb-2">RA</div>
                    <div className="text-xs text-gray-500 tracking-[0.3em] uppercase">Software Engineer</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 glass rounded-xl text-xs font-medium text-primary-300 shadow-lg"
              >
                <FaPhone className="inline mr-2" />
                0548989367
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-xl text-xs font-medium text-purple-300 shadow-lg"
              >
                🎓 Dual B.Sc.
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <Link to="about" smooth={true} offset={-80} className="cursor-pointer">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary-400 transition-colors"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <FaChevronDown className="text-sm" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
