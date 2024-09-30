import React from "react";

const projectsData = [
  {
    title: "Software Engineering Final Project",
    description:
      "Developed a video chat platform using React, Node.js, and Stream.io, featuring post-meeting transcription with AssemblyAI.",
    githubLink: "https://github.com/RamiAmasha31/rm-video-call",
  },
  {
    title: "Flower Shop System",
    description:
      "A system to manage orders and online shopping, developed using Agile methodology.",
    githubLink: "https://github.com/RamiAmasha31/zli",
  },
  {
    title: "PCA (Principal Component Analysis)",
    description: "Face detection project using MATLAB.",
    githubLink: "https://github.com/RamiAmasha31/PCA",
  },
  {
    title: "Facial Emotion Recognition",
    description: "A system that detects facial emotions using Python.",
    githubLink: "https://github.com/RamiAmasha31/Facial-emotion-recognition",
  },
  {
    title: "Shannon Sampling Theorem",
    description: "Project demonstrating the theorem using Python.",
    githubLink: "https://github.com/yourusername/shannon-sampling-theorem",
  },
  {
    title: "Restaurant Website",
    description:
      "An immersive website for a restaurant, built with React and Tailwind CSS.",
    githubLink: "https://github.com/RamiAmasha31/A21-flavor-Voayge",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.title}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
