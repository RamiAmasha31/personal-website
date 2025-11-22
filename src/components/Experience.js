import React from "react";
import { FaBriefcase, FaUserGraduate } from "react-icons/fa";

const experienceData = [
  {
    icon: <FaBriefcase className="text-4xl text-blue-600" />,
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
      "Managed all core Software Development Kits (SDKs), driving critical maintenance and upgrading cycles across the development ecosystem to ensure security and forward compatibility.",
      "Led the integration and successful upgrade of new product versions across a polyglot environment, including Python, Java, NodeJS, PHP, Ruby, and C#."
    ],
    categories: ["Systems & Cloud Migration", "Data Management & Optimization", "Software Development Lifecycle (SDLC)"]
  },
  {
    icon: <FaUserGraduate className="text-4xl text-green-600" />,
    title: "Academic Mentor",
    company: "Braude College",
    period: "Jan 2020 - Jan 2022",
    description: "Provided academic and transitional mentoring to university freshmen, guiding them through course selection, study strategies, and resource utilization. Successfully assisted students in improving course navigation and achieving academic goals during their critical first year.",
    responsibilities: [],
    categories: []
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold mb-4 text-white">Experience</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border-l-4 border-blue-500 hover:border-cyan-400 transition-all duration-500 card-hover">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  {exp.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-xl text-blue-300 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-white font-medium mt-2 md:mt-0 bg-blue-500/80 px-4 py-2 rounded-full shadow-lg">{exp.period}</span>
                  </div>
                  {exp.categories.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {exp.categories.map((cat, idx) => (
                        <span key={idx} className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-400 transition-colors">
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}
                  {exp.description && (
                    <p className="text-gray-300 leading-relaxed text-lg mb-4">{exp.description}</p>
                  )}
                  {exp.responsibilities.length > 0 && (
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start group">
                          <span className="text-blue-400 mr-3 text-xl group-hover:scale-125 transition-transform">•</span>
                          <span className="text-gray-300">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
