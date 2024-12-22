import  { useRef } from "react";
import { PROJECTS } from "../../abhishek-assets/constants";

const Projects = () => {
  const projects = useRef(null);

  return (
    <div>
      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-20" ref={projects}>
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-lg w-60 h-60 md:w-80 md:h-80"
            >
              {/* Project Image */}
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm"
              />

              {/* Details Overlay */}
              <div
                className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center text-white p-4"
              >
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 text-blue-300 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
