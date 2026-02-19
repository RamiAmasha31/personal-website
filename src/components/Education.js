import React from "react";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

const educationData = [
  {
    degree: "B.Sc. Software Engineering",
    institution: "Braude Academic College of Engineering",
    location: "Karmiel, Israel",
    period: "2020 - 2024",
    grade: "80/100",
    icon: "💻",
    gradient: "from-primary-500 to-blue-500",
    highlights: [
      "Object-Oriented Programming",
      "Web Development (React, Node.js)",
      "Database Management (MySQL)",
      "Software Engineering Methodologies",
      "Agile Development",
      "System Analysis & Design",
    ],
  },
  {
    degree: "B.Sc. Applied Mathematics",
    institution: "Braude Academic College of Engineering",
    location: "Karmiel, Israel",
    period: "2020 - 2024",
    grade: "80/100",
    icon: "📐",
    gradient: "from-purple-500 to-pink-500",
    highlights: [
      "Mathematical Modeling",
      "Fourier Analysis",
      "Numerical Methods",
      "Linear Algebra & Calculus",
      "Probability & Statistics",
      "Optimization Theory",
    ],
  },
];

const Education = () => {
  const [titleRef, titleVisible] = useScrollReveal();

  return (
    <section
      id="education"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-600/5 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Title */}
        <div ref={titleRef} className={`text-center mb-20 reveal ${titleVisible ? "active" : ""}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Academic background
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-primary-500 mx-auto rounded-full" />
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ edu, index }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -8 }}
      className={`reveal ${isVisible ? "active" : ""} group`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="glass rounded-3xl p-8 h-full hover:border-primary-500/20 transition-all duration-500 relative overflow-hidden">
        {/* Glow effect */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${edu.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />

        {/* Icon and Period */}
        <div className="flex justify-between items-start mb-6">
          <div className="text-4xl">{edu.icon}</div>
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium">
            {edu.period}
          </span>
        </div>

        {/* Degree */}
        <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {edu.degree}
        </h3>

        {/* Institution */}
        <div className="flex items-center gap-2 mb-2">
          <FaUniversity className="text-primary-400/60 text-sm" />
          <p className="text-primary-400/80 font-medium text-sm">{edu.institution}</p>
        </div>

        {/* Grade */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-accent-500/10 text-accent-400 text-sm font-medium border border-accent-500/20">
            ⭐ Grade: {edu.grade}
          </div>
        </div>

        {/* Key Courses */}
        <div>
          <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-medium">
            Key Courses
          </h4>
          <div className="flex flex-wrap gap-2">
            {edu.highlights.map((course, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-400 text-xs hover:text-primary-400 hover:border-primary-500/20 transition-colors duration-300"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
