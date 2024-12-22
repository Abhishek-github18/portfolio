import { useState } from "react";
import { PROJECTS } from "../../abhishek-assets/constants";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div>
      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-300 hover:border-blue-500 transition-all duration-300"
            >
              {/* Project Image */}
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover"
              />

              {/* Expanding Details Section */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    className="absolute inset-0 bg-gray-900 text-white rounded-lg p-4 flex flex-col overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Scrollable Content */}
                    <div className="overflow-y-auto h-full custom-scrollbar">
                      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                      <p className="text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-blue-500 px-3 py-1 rounded-full text-xs font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Links */}
                    <div className="flex gap-4 mt-4">
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-blue-300 hover:underline"
                      >
                        <i className="devicon-github-original"></i>
                        GitHub
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-300 flex items-center gap-2 hover:underline"
                      >
                        <i className="devicon-vercel-original"></i>
                        Demo
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
