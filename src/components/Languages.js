import React from "react";
import {
  FaLanguage,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaLinux,
  FaDatabase,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { DiNodejsSmall } from "react-icons/di";
import { SiTailwindcss, SiMysql, SiTypescript, SiJavascript, SiMongodb } from "react-icons/si";

const LanguagesAndSkills = () => {
  const renderStars = (count) => {
    return (
      <div className="flex">
        {Array.from({ length: 5 }, (_, index) =>
          index < count ? (
            <AiFillStar key={index} className="text-yellow-500" />
          ) : (
            <AiOutlineStar key={index} className="text-cyan-400" />
          )
        )}
      </div>
    );
  };

  const languages = [
    { name: "Arabic", proficiency: 5, level: "Native" },
    { name: "English", proficiency: 5, level: "Fluent" },
    { name: "Hebrew", proficiency: 5, level: "Fluent" }
  ];

  const technicalSkills = [
    {
      category: "Frontend Development",
      skills: [
        { icon: <FaReact className="text-3xl text-blue-500" />, label: "React.js" },
        { icon: <FaHtml5 className="text-3xl text-orange-500" />, label: "HTML5" },
        { icon: <FaCss3Alt className="text-3xl text-blue-600" />, label: "CSS3" },
        { icon: <SiJavascript className="text-3xl text-yellow-500" />, label: "JavaScript" },
        { icon: <SiTailwindcss className="text-3xl text-cyan-500" />, label: "Tailwind CSS" },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { icon: <DiNodejsSmall className="text-3xl text-green-600" />, label: "Node.js" },
        { icon: <FaPython className="text-3xl text-blue-500" />, label: "Python" },
        { icon: <FaJava className="text-3xl text-red-600" />, label: "Java" },
      ]
    },
    {
      category: "Database & Tools",
      skills: [
        { icon: <SiMysql className="text-3xl text-blue-700" />, label: "MySQL" },
        { icon: <SiMongodb className="text-3xl text-green-600" />, label: "MongoDB" },
        { icon: <FaGitAlt className="text-3xl text-orange-600" />, label: "Git" },
        { icon: <FaLinux className="text-3xl text-black" />, label: "Linux" },
      ]
    },
    {
      category: "Mathematics & Analysis",
      skills: [
        { icon: <FaCode className="text-3xl text-purple-500" />, label: "Mathematical Modeling" },
        { icon: <FaCode className="text-3xl text-purple-600" />, label: "Fourier Analysis" },
        { icon: <FaCode className="text-3xl text-orange-500" />, label: "MATLAB" },
        { icon: <FaCode className="text-3xl text-indigo-500" />, label: "Numerical Methods" },
      ]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Critical Thinking",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Leadership",
    "Analytical Thinking"
  ];

  return (
    <section id="languages" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(6,182,212,0.08),transparent_60%)]"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold mb-4 text-white">
            Skills & Languages
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Languages Section */}
          <div className="lg:col-span-1 bg-gradient-to-br from-gray-800/80 to-blue-900/30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-cyan-500/20 hover:shadow-cyan-500/20 transition-all duration-500 card-hover">
            <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Languages</h3>
            <div className="space-y-6">
              {languages.map((language) => (
                <div className="border-b border-cyan-500/20 pb-4 last:border-b-0" key={language.name}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <FaLanguage className="text-3xl text-cyan-400 mr-4" />
                      <h4 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">{language.name}</h4>
                    </div>
                    <span className="text-base text-blue-300 font-medium bg-blue-500/20 px-3 py-1 rounded-full">{language.level}</span>
                  </div>
                  {renderStars(language.proficiency)}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-blue-500/20 hover:shadow-blue-500/20 transition-all duration-500 card-hover">
            <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Technical Skills</h3>
            <div className="space-y-8">
              {technicalSkills.map((category) => (
                <div key={category.category}>
                  <h4 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                    <span className="h-6 w-1 bg-blue-500 mr-3 rounded"></span>
                    {category.category}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill.label}
                        className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300 border border-blue-500/20 hover:border-blue-400 transform hover:scale-110 cursor-pointer"
                      >
                        <div className="text-cyan-400">{skill.icon}</div>
                        <span className="mt-3 text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 text-center">{skill.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="bg-gradient-to-br from-gray-800/80 to-blue-900/30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-blue-500/20 hover:shadow-blue-500/20 transition-all duration-500">
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-blue-500/50 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-110 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesAndSkills;
