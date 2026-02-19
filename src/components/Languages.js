import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaLinux,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import {
  SiTailwindcss,
  SiMysql,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";
import useScrollReveal from "../hooks/useScrollReveal";

const LanguagesAndSkills = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [langRef, langVisible] = useScrollReveal({ threshold: 0.05 });
  const [techRef, techVisible] = useScrollReveal({ threshold: 0.05 });
  const [softRef, softVisible] = useScrollReveal({ threshold: 0.05 });

  const languages = [
    { name: "Arabic", level: "Native", percent: 100, flag: "🇸🇦" },
    { name: "English", level: "Fluent", percent: 95, flag: "🇺🇸" },
    { name: "Hebrew", level: "Fluent", percent: 95, flag: "🇮🇱" },
  ];

  const technicalSkills = [
    {
      category: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { icon: <FaReact />, label: "React.js", color: "text-blue-400" },
        { icon: <FaHtml5 />, label: "HTML5", color: "text-orange-400" },
        { icon: <FaCss3Alt />, label: "CSS3", color: "text-blue-500" },
        { icon: <SiJavascript />, label: "JavaScript", color: "text-yellow-400" },
        { icon: <SiTailwindcss />, label: "Tailwind", color: "text-cyan-400" },
      ],
    },
    {
      category: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { icon: <DiNodejsSmall />, label: "Node.js", color: "text-green-400" },
        { icon: <FaPython />, label: "Python", color: "text-blue-400" },
        { icon: <FaJava />, label: "Java", color: "text-red-400" },
      ],
    },
    {
      category: "Database & Tools",
      color: "from-purple-500 to-pink-500",
      skills: [
        { icon: <SiMysql />, label: "MySQL", color: "text-blue-500" },
        { icon: <SiMongodb />, label: "MongoDB", color: "text-green-400" },
        { icon: <FaGitAlt />, label: "Git", color: "text-orange-400" },
        { icon: <FaLinux />, label: "Linux", color: "text-yellow-400" },
      ],
    },
    {
      category: "Mathematics",
      color: "from-amber-500 to-orange-500",
      skills: [
        { icon: <FaCode />, label: "Modeling", color: "text-purple-400" },
        { icon: <FaCode />, label: "Fourier Analysis", color: "text-primary-400" },
        { icon: <FaCode />, label: "MATLAB", color: "text-orange-400" },
        { icon: <FaCode />, label: "Numerical Methods", color: "text-cyan-400" },
      ],
    },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: "🧩" },
    { name: "Critical Thinking", icon: "🎯" },
    { name: "Team Collaboration", icon: "🤝" },
    { name: "Communication", icon: "💬" },
    { name: "Time Management", icon: "⏰" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Leadership", icon: "🚀" },
    { name: "Analytical Thinking", icon: "📊" },
  ];

  return (
    <section
      id="languages"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title */}
        <div ref={titleRef} className={`text-center mb-20 reveal ${titleVisible ? "active" : ""}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            What I bring to the table
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Skills & <span className="gradient-text">Languages</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Languages */}
          <div ref={langRef} className={`reveal ${langVisible ? "active" : ""}`}>
            <div className="glass rounded-3xl p-8 h-full hover:border-primary-500/20 transition-all duration-500">
              <h3 className="text-2xl font-display font-bold gradient-text mb-8 text-center">
                Languages
              </h3>
              <div className="space-y-6">
                {languages.map((lang) => (
                  <div key={lang.name} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="text-white font-medium">{lang.name}</span>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20 font-medium">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full relative"
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-primary-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div ref={techRef} className={`lg:col-span-2 reveal ${techVisible ? "active" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <div className="glass rounded-3xl p-8 h-full hover:border-primary-500/20 transition-all duration-500">
              <h3 className="text-2xl font-display font-bold gradient-text mb-8 text-center">
                Technical Skills
              </h3>
              <div className="space-y-8">
                {technicalSkills.map((category) => (
                  <div key={category.category}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-1 h-5 rounded-full bg-gradient-to-b ${category.color}`} />
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        {category.category}
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill.label}
                          whileHover={{ scale: 1.08, y: -4 }}
                          className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-primary-500/30 hover:bg-primary-500/5 transition-all duration-300 cursor-default group"
                        >
                          <span className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                            {skill.icon}
                          </span>
                          <span className="text-xs text-gray-400 font-medium text-center group-hover:text-white transition-colors">
                            {skill.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div ref={softRef} className={`reveal ${softVisible ? "active" : ""}`}>
          <div className="glass rounded-3xl p-8 hover:border-primary-500/20 transition-all duration-500">
            <h3 className="text-2xl font-display font-bold gradient-text mb-8 text-center">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-primary-500/30 hover:bg-primary-500/5 transition-all duration-300 cursor-default group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesAndSkills;
