import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Home from "./components/Home";

// Lazy load below-the-fold sections for performance
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const LanguagesAndSkills = lazy(() => import("./components/Languages"));
const Projects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("./components/Footer"));

// Loading fallback
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="relative">
      <div className="w-12 h-12 rounded-full border-2 border-primary-500/20 border-t-primary-500 animate-spin" />
    </div>
  </div>
);

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Preloader
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#030014] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-2xl shadow-primary-500/30 animate-pulse">
                RA
              </div>
              <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full bg-gradient-to-r from-primary-500 to-purple-500"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative noise-bg grid-bg overflow-x-hidden">
        {/* Particle Background */}
        <ParticleBackground />

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <Home />
          <Suspense fallback={<SectionLoader />}>
            <About />
            <Experience />
            <Education />
            <LanguagesAndSkills />
            <Projects />
            <Footer />
          </Suspense>
        </div>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-1 transition-all duration-300"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
