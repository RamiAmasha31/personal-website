import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "Video Chat Platform",
    category: "Software Engineering Final Project",
    description:
      "Full-featured video chat platform with real-time communication capabilities. Integrated post-meeting transcription service using AssemblyAI for automatic meeting notes and summaries. Features include screen sharing, recording, and multi-participant support.",
    technologies: ["React", "Node.js", "Stream.io", "AssemblyAI", "WebRTC"],
    githubLink: "https://github.com/RamiAmasha31/rm-video-call",
    highlights: [
      "Real-time Communication",
      "AI Transcription",
      "Scalable Architecture",
    ],
  },
  {
    title: "Flower Shop E-Commerce System",
    category: "Full-Stack Development",
    description:
      "Comprehensive e-commerce platform for flower shop management. Developed using Agile methodology with complete order management, inventory tracking, and online shopping capabilities. Includes admin dashboard and customer-facing interface.",
    technologies: ["Java", "MySQL", "JavaFX", "Agile", "MVC Pattern"],
    githubLink: "https://github.com/RamiAmasha31/zli",
    highlights: ["Order Management", "Inventory System", "User Authentication"],
  },
  {
    title: "PCA Face Detection",
    category: "Applied Mathematics",
    description:
      "Implementation of Principal Component Analysis (PCA) for facial recognition and detection. Utilizes dimensionality reduction techniques to identify and classify faces with high accuracy. Demonstrates practical application of linear algebra and statistical methods.",
    technologies: [
      "MATLAB",
      "Linear Algebra",
      "Image Processing",
      "Statistics",
    ],
    githubLink: "https://github.com/RamiAmasha31/PCA",
    highlights: [
      "Dimensionality Reduction",
      "Pattern Recognition",
      "Statistical Analysis",
    ],
  },
  {
    title: "Facial Emotion Recognition System",
    category: "Machine Learning",
    description:
      "AI-powered system that detects and classifies facial emotions in real-time. Uses computer vision and machine learning algorithms to recognize various emotional states including happiness, sadness, anger, and surprise.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Deep Learning", "CNN"],
    githubLink: "https://github.com/RamiAmasha31/Facial-emotion-recognition",
    highlights: ["Real-time Detection", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Shannon Sampling Theorem Demonstration",
    category: "Applied Mathematics",
    description:
      "Interactive demonstration of the Shannon-Nyquist sampling theorem. Visualizes signal reconstruction and illustrates the relationship between sampling rate and signal fidelity. Educational tool for understanding fundamental concepts in signal processing.",
    technologies: ["Python", "NumPy", "Matplotlib", "Signal Processing"],
    githubLink: "https://github.com/RamiAmasha31/Shannon-Sampling-Theorem",
    highlights: [
      "Signal Processing",
      "Data Visualization",
      "Mathematical Proof",
    ],
  },
  {
    title: "Flavor Voyage Restaurant Website",
    category: "Web Development",
    description:
      "Modern, responsive restaurant website with immersive design and smooth user experience. Features online menu, reservation system, and gallery showcase. Built with contemporary web technologies for optimal performance.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    githubLink: "https://github.com/RamiAmasha31/A21-flavor-Voayge",
    highlights: ["Responsive Design", "Modern UI/UX", "Performance Optimized"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_60%)]"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold mb-4 text-white">Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-t-4 border-blue-500 hover:border-cyan-400 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <span className="text-sm font-semibold text-blue-400 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {project.title}
              </h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 mb-4 leading-relaxed text-base">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-cyan-300 px-3 py-1.5 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6 space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 group"
                  >
                    <span className="text-blue-400 mr-3 text-lg group-hover:scale-125 transition-transform">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* GitHub Link */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
              >
                <FaGithub className="mr-2 text-lg" />
                View on GitHub
                <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
