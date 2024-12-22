import { useRef } from "react";
import { EXPERIENCES } from "../../abhishek-assets/constants";

const Experience = () => {
  const experienceRef = useRef(null);

  return (
    <section id="work" className="container mx-auto py-20 px-6" ref={experienceRef}>
      <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>
      <div className="space-y-10">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="relative bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-xl transition-transform transform hover:scale-105"
          >
            {/* Year Range */}
            <p className="absolute top-4 right-6 text-sm text-gray-500 dark:text-gray-400">
              {experience.yearRange}
            </p>

            {/* Role */}
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {experience.role}
            </h3>

            {/* Company */}
            <h4 className="text-lg text-blue-500 mb-4">{experience.company}</h4>

            {/* Description */}
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {experience.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-500 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
