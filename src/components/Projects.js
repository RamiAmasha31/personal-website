import React from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { Card, Reveal, SectionHeader } from "./ui";

const featuredProjects = [
  {
    title: "Video conferencing platform",
    category: "Software Engineering final project",
    description:
      "A video conferencing platform built with React, Node.js and Stream.io, with AI transcription through AssemblyAI that turns meetings into notes. Data is stored in Firebase.",
    technologies: ["React", "Node.js", "Stream.io", "AssemblyAI", "Firebase"],
    githubLink: "https://github.com/RamiAmasha31/rm-video-call",
  },
  {
    title: "Bacterial epidemics in gerbil populations",
    category: "Applied Mathematics final project",
    description:
      "An agent-based model of multi-strain Bartonella spread, built from scratch as part of a joint research project with Ben-Gurion University.",
    technologies: ["Agent-based modeling", "Mathematical modeling", "Research"],
  },
];

const otherProjects = [
  {
    title: "Facial Emotion Recognition",
    category: "Machine Learning",
    description:
      "Detects and classifies facial emotions using computer vision and machine learning.",
    technologies: ["Python", "OpenCV", "TensorFlow"],
    githubLink: "https://github.com/RamiAmasha31/Facial-emotion-recognition",
  },
  {
    title: "PCA Face Detection",
    category: "Applied Mathematics",
    description:
      "Principal Component Analysis for facial recognition and detection, using dimensionality reduction.",
    technologies: ["MATLAB", "Linear Algebra", "Image Processing"],
    githubLink: "https://github.com/RamiAmasha31/PCA",
  },
  {
    title: "Shannon Sampling Theorem",
    category: "Applied Mathematics",
    description:
      "A demonstration of the Shannon-Nyquist theorem that visualizes signal reconstruction and sampling rate.",
    technologies: ["Python", "NumPy", "Matplotlib"],
    githubLink: "https://github.com/RamiAmasha31/Shannon-Sampling-Theorem",
  },
  {
    title: "Flower Shop E-Commerce",
    category: "Full-Stack",
    description:
      "E-commerce platform for a flower shop, with order management and inventory tracking, developed using Agile.",
    technologies: ["Java", "MySQL", "JavaFX"],
    githubLink: "https://github.com/RamiAmasha31/zli",
  },
  {
    title: "Flavor Voyage Restaurant",
    category: "Web",
    description:
      "Responsive restaurant website with an online menu, reservations and a gallery.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    githubLink: "https://github.com/RamiAmasha31/A21-flavor-Voayge",
  },
];

const Technologies = ({ items }) => (
  <div className="flex flex-wrap gap-2 mb-6">
    {items.map((tech) => (
      <span
        key={tech}
        className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-slate-300"
      >
        {tech}
      </span>
    ))}
  </div>
);

const CodeLink = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-auto inline-flex w-fit items-center gap-2 font-medium text-primary-300 hover:text-primary-100 transition-colors group/link"
  >
    <FaGithub />
    View code
    <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
  </a>
);

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <SectionHeader index="05" eyebrow="Projects" title="Things I've" accent="built" />

      {/* Final projects */}
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.1}>
            <Card className="p-8 md:p-10 h-full flex flex-col">
              <p className="eyebrow mb-5">{project.category}</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                {project.title}
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>
              <Technologies items={project.technologies} />
              {project.githubLink && <CodeLink href={project.githubLink} />}
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Other projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {otherProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <Card className="p-7 h-full flex flex-col">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-slate-400 mb-4">
                {project.category}
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-5">{project.description}</p>
              <Technologies items={project.technologies} />
              <CodeLink href={project.githubLink} />
            </Card>
          </Reveal>
        ))}

        <Reveal delay={0.25}>
          <a
            href="https://github.com/RamiAmasha31"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full group"
          >
            <Card className="p-7 h-full min-h-[14rem] flex flex-col justify-between">
              <FaGithub className="text-3xl text-primary-300" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">More on GitHub</h3>
                <p className="flex items-center gap-2 text-slate-400">
                  github.com/RamiAmasha31
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </p>
              </div>
            </Card>
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Projects;
