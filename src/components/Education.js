import React from "react";
import { FaUniversity, FaBook } from "react-icons/fa";

const educationData = [
  {
    icon: <FaUniversity className="text-5xl text-blue-500" />,
    degree: "B.Sc. Software Engineering",
    institution: "Braude Academic College of Engineering",
    location: "Karmiel, Israel",
    period: "2020 - 2024",
    grade: "80/100",
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
    icon: <FaUniversity className="text-5xl text-blue-500" />,
    degree: "B.Sc. Applied Mathematics",
    institution: "Braude Academic College of Engineering",
    location: "Karmiel, Israel",
    period: "2020 - 2024",
    grade: "80/100",
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
  return (
    <section
      id="education"
      className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.05),transparent_50%)]"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold mb-4 text-white">Education</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/80 to-blue-900/30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border-l-4 border-cyan-500 hover:border-blue-400 transition-all duration-500 card-hover"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 text-cyan-400">{edu.icon}</div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-300 text-lg font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-white font-medium mt-2 md:mt-0 bg-blue-500/80 px-4 py-2 rounded-full shadow-lg">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
