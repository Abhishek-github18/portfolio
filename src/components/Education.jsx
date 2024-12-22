import  { useRef } from "react";
import { EDUCATION } from "../../abhishek-assets/constants";

const Education = () => {
    const educationRef = useRef(null);
  return (
    <section id="education" className="container mx-auto py-20 px-6" ref={educationRef}>
      <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
      <div className="space-y-10">
        {EDUCATION.map((edu) => (
          <div
            key={edu.id}
            className="relative bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-xl transition-transform transform hover:scale-105"
          >
            {/* Degree and Institution */}
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {edu.degree}
            </h3>
            <h4 className="text-lg text-blue-500 mb-4">{edu.institution}</h4>

            {/* Duration */}
            <p className="absolute top-4 right-6 text-sm text-gray-500 dark:text-gray-400">
              {edu.duration}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
