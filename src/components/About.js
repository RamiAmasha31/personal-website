import React from "react";
import {
  FaUser,
  FaGraduationCap,
  FaCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap className="text-5xl text-cyan-400" />,
      title: "Dual Degree Graduate",
      description:
        "B.Sc. in both Software Engineering and Applied Mathematics from Braude Academic College",
    },
    {
      icon: <FaCode className="text-5xl text-blue-400" />,
      title: "Full-Stack Developer",
      description:
        "Experienced in building modern web applications using React, Node.js, and various databases",
    },
    {
      icon: <FaLightbulb className="text-5xl text-yellow-400" />,
      title: "Problem Solver",
      description:
        "Strong analytical skills combining mathematical modeling with practical software solutions",
    },
    {
      icon: <FaRocket className="text-5xl text-purple-400" />,
      title: "Continuous Learner",
      description:
        "Passionate about staying updated with latest technologies and best practices",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-black via-blue-900 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold mb-4 text-white">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-12 shadow-2xl border border-blue-500/20 hover:shadow-blue-500/30 transition-all duration-500">
          <div className="flex items-start mb-6">
            <FaUser className="text-6xl text-blue-400 mr-6 flex-shrink-0" />
            <div>
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                I'm a passionate Software Engineer and Applied Mathematician
                with a unique blend of technical expertise and analytical
                thinking. My dual degree background enables me to approach
                problems from both practical and theoretical perspectives,
                creating innovative solutions that are both efficient and
                mathematically sound.
              </p>
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                With extensive experience in full-stack development, I
                specialize in building modern, responsive web applications using
                cutting-edge technologies. My strong foundation in mathematics
                allows me to implement complex algorithms and optimize solutions
                for real-world challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/60 to-blue-900/40 backdrop-blur-lg rounded-2xl p-8 hover:from-gray-700/70 hover:to-blue-800/50 transition-all duration-500 transform hover:-translate-y-2 border border-blue-500/30 hover:border-cyan-400 shadow-xl hover:shadow-blue-500/30 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start">
                <div className="mr-5 flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Values */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-8 text-white">What Drives Me</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Innovation",
              "Excellence",
              "Collaboration",
              "Continuous Learning",
              "Problem Solving",
              "Quality",
            ].map((value) => (
              <span
                key={value}
                className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-lg px-8 py-4 rounded-full font-semibold text-lg text-white hover:from-blue-500/40 hover:to-cyan-500/40 transition-all duration-300 border border-blue-500/30 hover:border-cyan-400 transform hover:scale-110 shadow-lg cursor-pointer"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
