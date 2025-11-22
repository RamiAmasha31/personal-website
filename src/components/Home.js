import React from "react";
import { FaEnvelope, FaPhone, FaGlobe, FaRocket } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="min-h-screen relative overflow-hidden py-20 px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900 opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block mb-6 animate-float">
            <FaRocket className="text-6xl text-blue-500" />
          </div>
          <h1 className="text-7xl font-bold mb-4 text-white animate-fadeIn">
            Rami Amasha
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-3xl text-blue-400 font-semibold tracking-wide">Software Engineer & Applied Mathematician</p>
        </div>
        
        {/* Contact Information */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-blue-500/20 mb-12 hover:shadow-blue-500/20 transition-all duration-500 card-hover">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="h-8 w-1 bg-blue-500 mr-3 rounded"></span>
            Contact Information
          </h2>
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
            
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border-l-4 border-blue-500 hover:shadow-blue-500/30 transition-all duration-500 card-hover">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="h-8 w-1 bg-blue-500 mr-3 rounded"></span>
            Professional Summary
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Highly accomplished Backend Developer and technical leader with a proven track record in project management and systems integration. Possessing dual expertise in Software Engineering and Applied Mathematics, I utilize mathematical rigor and practical development skills to solve complex engineering problems and drive quantifiable system improvements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
