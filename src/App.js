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
    <div className="w-10 h-10 rounded-full border-2 border-primary-300/20 border-t-primary-300 animate-spin" />
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
    const timer = setTimeout(() => setIsLoading(false), 900);
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
            className="fixed inset-0 z-[100] bg-canvas flex items-center justify-center"
          >
            <div className="text-center">
              <div className="brand-mark w-16 h-16 mx-auto mb-5 text-xl rounded-2xl animate-pulse">
                RA
              </div>
              <div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden mx-auto">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full bg-primary-300"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative noise-bg overflow-x-hidden">
        {/* Page background */}
        <div className="aurora" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="grid-overlay" aria-hidden="true" />
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
              className="brand-mark fixed bottom-6 right-6 z-50 w-12 h-12 shadow-lg shadow-primary-300/20 hover:-translate-y-1 transition-transform duration-300"
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
