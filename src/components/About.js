import React from "react";
import { FaServer, FaShieldAlt, FaBolt, FaSquareRootAlt } from "react-icons/fa";
import { Card, Reveal, SectionHeader } from "./ui";

const stats = [
  { number: "2+", label: "Years in backend & DevOps" },
  { number: "6", label: "SDK languages owned" },
  { number: "2", label: "B.Sc. degrees" },
  { number: "3", label: "Spoken languages" },
];

const focusAreas = [
  {
    icon: <FaServer />,
    title: "Reliability",
    description:
      "Zero-downtime cutovers, staging before production, tested backups, and migrations that can resume when standard tooling fails at volume.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security",
    description:
      "Secrets management, access policies as code, audit logging, just-in-time access and automatic secret rotation.",
  },
  {
    icon: <FaBolt />,
    title: "Developer productivity",
    description:
      "Faster builds and releases through private worker pools and optimized Docker images, plus SDKs, internal tooling and documentation teams can rely on.",
  },
  {
    icon: <FaSquareRootAlt />,
    title: "Mathematical foundation",
    description:
      "A second degree in Applied Mathematics, including a research project building an agent-based model of how bacterial infections spread.",
  },
];

const About = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <SectionHeader index="01" eyebrow="About" title="Engineering that" accent="holds up" />

      <div className="grid lg:grid-cols-12 gap-5 mb-5">
        <Reveal className="lg:col-span-7">
          <Card className="p-8 md:p-10 h-full">
            <p className="text-xl md:text-2xl leading-relaxed text-white mb-6">
              I'm a backend and DevOps engineer with dual B.Sc. degrees in Software
              Engineering and Applied Mathematics.
            </p>
            <p className="text-lg leading-relaxed text-slate-400">
              At Copyleaks I lead a company-wide secrets management migration, own the
              core SDKs across six languages, and work on cloud and data migrations where
              standard tooling doesn't always keep up.
            </p>
          </Card>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.1}>
          <div className="grid grid-cols-2 gap-5 h-full">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-5 md:p-6 flex flex-col justify-between gap-3">
                <div className="holo-text text-4xl md:text-5xl font-semibold tracking-tight w-fit">
                  {stat.number}
                </div>
                <div className="text-sm leading-snug text-slate-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {focusAreas.map((area, index) => (
          <Reveal key={area.title} delay={index * 0.05}>
            <Card className="p-7 md:p-8 h-full">
              <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] text-primary-300 flex items-center justify-center mb-5">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
              <p className="text-slate-400 leading-relaxed">{area.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;
