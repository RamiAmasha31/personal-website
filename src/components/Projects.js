import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

const projectsData = [
  {
    title: "Video Chat Platform",
    category: "Software Engineering",
    emoji: "📹",
    description:
      "Full-featured video chat platform with real-time communication capabilities. Integrated post-meeting transcription service using AssemblyAI for automatic meeting notes and summaries.",
    technologies: ["React", "Node.js", "Stream.io", "AssemblyAI", "WebRTC"],
    githubLink: "https://github.com/RamiAmasha31/rm-video-call",
    highlights: ["Real-time Communication", "AI Transcription", "Scalable Architecture"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Flower Shop E-Commerce",
    category: "Full-Stack Development",
    emoji: "🌸",
    description:
      "Comprehensive e-commerce platform for flower shop management. Developed using Agile methodology with complete order management, inventory tracking, and online shopping.",
    technologies: ["Java", "MySQL", "JavaFX", "Agile", "MVC Pattern"],
    githubLink: "https://github.com/RamiAmasha31/zli",
    highlights: ["Order Management", "Inventory System", "User Authentication"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "PCA Face Detection",
    category: "Applied Mathematics",
    emoji: "🔍",
    description:
      "Implementation of Principal Component Analysis (PCA) for facial recognition and detection. Utilizes dimensionality reduction techniques to identify and classify faces with high accuracy.",
    technologies: ["MATLAB", "Linear Algebra", "Image Processing", "Statistics"],
    githubLink: "https://github.com/RamiAmasha31/PCA",
    highlights: ["Dimensionality Reduction", "Pattern Recognition", "Statistical Analysis"],
    gradient: "from-primary-500 to-purple-500",
  },
  {
    title: "Facial Emotion Recognition",
    category: "Machine Learning",
    emoji: "🧠",
    description:
      "AI-powered system that detects and classifies facial emotions in real-time. Uses computer vision and machine learning algorithms to recognize various emotional states.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Deep Learning", "CNN"],
    githubLink: "https://github.com/RamiAmasha31/Facial-emotion-recognition",
    highlights: ["Real-time Detection", "Deep Learning", "Computer Vision"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Shannon Sampling Theorem",
    category: "Applied Mathematics",
    emoji: "📊",
    description:
      "Interactive demonstration of the Shannon-Nyquist sampling theorem. Visualizes signal reconstruction and illustrates the relationship between sampling rate and signal fidelity.",
    technologies: ["Python", "NumPy", "Matplotlib", "Signal Processing"],
    githubLink: "https://github.com/RamiAmasha31/Shannon-Sampling-Theorem",
    highlights: ["Signal Processing", "Data Visualization", "Mathematical Proof"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Flavor Voyage Restaurant",
    category: "Web Development",
    emoji: "🍽️",
    description:
      "Modern, responsive restaurant website with immersive design and smooth user experience. Features online menu, reservation system, and gallery showcase.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    githubLink: "https://github.com/RamiAmasha31/A21-flavor-Voayge",
    highlights: ["Responsive Design", "Modern UI/UX", "Performance Optimized"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

const categories = ["All", ...new Set(projectsData.map((p) => p.category))];

const Projects = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-600/5 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title */}
        <div ref={titleRef} className={`text-center mb-12 reveal ${titleVisible ? "active" : ""}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            Featured work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-primary-500/20 text-primary-400 border border-primary-500/30 shadow-lg shadow-primary-500/10"
                  : "bg-white/[0.03] text-gray-400 border border-white/[0.06] hover:text-white hover:border-white/[0.15]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="glass rounded-2xl overflow-hidden h-full hover:border-primary-500/20 transition-all duration-500 relative">
        {/* Top gradient bar */}
        <div className={`h-1 bg-gradient-to-r ${project.gradient} transform origin-left transition-transform duration-500 ${isHovered ? "scale-x-100" : "scale-x-50"}`} />

        {/* Content */}
        <div className="p-7">
          {/* Emoji and category */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
              {project.emoji}
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-500 text-xs font-medium">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-gray-500 text-xs hover:text-primary-400 hover:border-primary-500/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <div className="space-y-1.5 mb-6">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.gradient}`} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* GitHub Link */}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group/btn`}
          >
            <FaGithub className="text-base" />
            <span>View Code</span>
            <FaExternalLinkAlt className="text-xs opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
