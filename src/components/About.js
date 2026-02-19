import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

const About = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.05 });
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.05 });
  const [valuesRef, valuesVisible] = useScrollReveal({ threshold: 0.05 });

  const highlights = [
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Dual Degree Graduate",
      description:
        "B.Sc. in both Software Engineering and Applied Mathematics from Braude Academic College",
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/10 text-blue-400",
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Full-Stack Developer",
      description:
        "Experienced in building modern web applications using React, Node.js, and various databases",
      color: "from-primary-500 to-purple-500",
      iconBg: "bg-primary-500/10 text-primary-400",
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Problem Solver",
      description:
        "Strong analytical skills combining mathematical modeling with practical software solutions",
      color: "from-amber-500 to-orange-500",
      iconBg: "bg-amber-500/10 text-amber-400",
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Continuous Learner",
      description:
        "Passionate about staying updated with latest technologies and best practices",
      color: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500/10 text-purple-400",
    },
  ];

  const values = [
    "Innovation",
    "Excellence",
    "Collaboration",
    "Continuous Learning",
    "Problem Solving",
    "Quality",
  ];

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className={`text-center mb-20 reveal ${titleVisible ? "active" : ""}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* About Content */}
        <div ref={contentRef} className={`glass rounded-3xl p-8 md:p-12 mb-16 reveal ${contentVisible ? "active" : ""}`}>
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Stats */}
            <div className="md:col-span-4 grid grid-cols-2 gap-4">
              {[
                { number: "2", label: "B.Sc. Degrees" },
                { number: "2+", label: "Years Experience" },
                { number: "6+", label: "Projects" },
                { number: "3", label: "Languages" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-primary-500/20 transition-colors duration-300"
                >
                  <div className="text-3xl font-display font-bold gradient-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Text */}
            <div className="md:col-span-8">
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                I'm a passionate Software Engineer and Applied Mathematician
                with a unique blend of technical expertise and analytical
                thinking. My dual degree background enables me to approach
                problems from both practical and theoretical perspectives,
                creating innovative solutions that are both efficient and
                mathematically sound.
              </p>
              <p className="text-lg leading-relaxed text-gray-400">
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
        <div ref={cardsRef} className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 stagger-children ${cardsVisible ? "active" : ""}`}>
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="group glass rounded-2xl p-7 hover:border-primary-500/20 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div ref={valuesRef} className={`text-center reveal ${valuesVisible ? "active" : ""}`}>
          <h3 className="text-2xl font-display font-bold text-white mb-8">
            What Drives Me
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {values.map((value, i) => (
              <motion.span
                key={value}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 glass rounded-full text-sm font-medium text-gray-300 hover:text-primary-400 hover:border-primary-500/30 cursor-default transition-colors duration-300"
              >
                {value}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
