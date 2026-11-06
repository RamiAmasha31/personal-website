import React from "react";
import { FaLaptopCode, FaSquareRootAlt } from "react-icons/fa";
import { Card, Reveal, SectionHeader } from "./ui";

const educationData = [
  {
    degree: "B.Sc. Software Engineering",
    institution: "Braude Academic College",
    period: "2020 - 2024",
    icon: <FaLaptopCode />,
    finalProject: "Video conferencing platform with AI transcription.",
    courses: [
      "Object-Oriented Programming",
      "Web Development",
      "Database Management",
      "Software Engineering Methodologies",
      "Agile Development",
      "System Analysis & Design",
    ],
  },
  {
    degree: "B.Sc. Applied Mathematics",
    institution: "Braude Academic College",
    period: "2020 - 2024",
    icon: <FaSquareRootAlt />,
    finalProject: "Agent-based model of multi-strain Bartonella spread, with Ben-Gurion University.",
    courses: [
      "Mathematical Modeling",
      "Fourier Analysis",
      "Numerical Methods",
      "Linear Algebra & Calculus",
      "Probability & Statistics",
      "Optimization Theory",
    ],
  },
];

const Education = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <SectionHeader index="03" eyebrow="Education" title="Two degrees," accent="one mindset" />

      <div className="grid md:grid-cols-2 gap-5">
        {educationData.map((edu, index) => (
          <Reveal key={edu.degree} delay={index * 0.1}>
            <Card className="p-7 md:p-9 h-full">
              <div className="flex justify-between items-start mb-7">
                <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.04] text-primary-300 text-lg flex items-center justify-center">
                  {edu.icon}
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs text-slate-300">
                  {edu.period}
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-white mb-1">
                {edu.degree}
              </h3>
              <p className="text-primary-300 mb-6">{edu.institution}</p>

              <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-slate-400 mb-2">
                Final project
              </h4>
              <p className="text-slate-300 leading-relaxed mb-6">{edu.finalProject}</p>

              <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-slate-400 mb-3">
                Key courses
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course) => (
                  <span key={course} className="chip">
                    {course}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
