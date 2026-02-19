import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaUserGraduate } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

const experienceData = [
  {
    icon: <FaBriefcase className="text-2xl" />,
    title: "Backend Developer",
    company: "Copyleaks",
    period: "Nov 2024 - Present",
    description: "",
    responsibilities: [
      "Executed end-to-end migration and integration of core business platforms from HubSpot to Salesforce.",
      "Managed strategic relocation and migration of high-volume data buckets within the GCP environment.",
      "Improved system efficiency by migrating GCP functions and triggers to the 2nd Generation environment.",
      "Drove significant database performance optimization through re-indexing, structural enhancements, and performance tuning.",
      "Managed the migration of critical data tables from Datastore to BigQuery.",
      "Optimized datastore performance by analyzing and implementing sophisticated datastore indexes.",
      "Accelerated developer productivity by optimizing Docker containers and triggers for faster build times.",
      "Managed all core Software Development Kits (SDKs), driving critical maintenance and upgrading cycles across the development ecosystem.",
      "Led the integration and successful upgrade of new product versions across a polyglot environment, including Python, Java, NodeJS, PHP, Ruby, and C#.",
    ],
    categories: [
      "Systems & Cloud Migration",
      "Data Management & Optimization",
      "Software Development Lifecycle (SDLC)",
    ],
    gradient: "from-primary-500 to-blue-500",
    dotColor: "bg-primary-500",
  },
  {
    icon: <FaUserGraduate className="text-2xl" />,
    title: "Academic Mentor",
    company: "Braude College",
    period: "Jan 2020 - Jan 2022",
    description:
      "Provided academic and transitional mentoring to university freshmen, guiding them through course selection, study strategies, and resource utilization. Successfully assisted students in improving course navigation and achieving academic goals during their critical first year.",
    responsibilities: [],
    categories: [],
    gradient: "from-emerald-500 to-teal-500",
    dotColor: "bg-emerald-500",
  },
];

const Experience = () => {
  const [titleRef, titleVisible] = useScrollReveal();

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Title */}
        <div ref={titleRef} className={`text-center mb-20 reveal ${titleVisible ? "active" : ""}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            My journey
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <TimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ exp, index }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div ref={ref} className={`relative pl-16 md:pl-20 reveal ${isVisible ? "active" : ""}`} style={{ transitionDelay: `${index * 0.2}s` }}>
      {/* Timeline dot */}
      <div className={`absolute left-4 md:left-6 top-2 w-5 h-5 rounded-full ${exp.dotColor} border-4 border-[#030014] shadow-lg z-10`}>
        <div className={`absolute inset-0 rounded-full ${exp.dotColor} animate-ping opacity-20`} />
      </div>

      <motion.div
        whileHover={{ x: 5 }}
        className="glass rounded-2xl p-7 md:p-8 hover:border-primary-500/20 transition-all duration-500 group"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-5">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {exp.icon}
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-400 transition-colors">
                {exp.title}
              </h3>
              <p className="text-primary-400/80 font-medium">{exp.company}</p>
            </div>
          </div>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium">
            {exp.period}
          </span>
        </div>

        {/* Categories */}
        {exp.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {exp.categories.map((cat, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-primary-500/10 text-primary-300 text-xs font-medium border border-primary-500/20"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        {exp.description && (
          <p className="text-gray-400 leading-relaxed mb-5">
            {exp.description}
          </p>
        )}

        {/* Responsibilities */}
        {exp.responsibilities.length > 0 && (
          <ul className="space-y-3">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-3 group/item">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {resp}
                </span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default Experience;
