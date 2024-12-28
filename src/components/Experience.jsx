import { useRef, useState } from "react";
import { EXPERIENCES } from "../../abhishek-assets/constants";
import { motion } from "framer-motion";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const experienceRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section
      id="work"
      className="container mx-auto py-20 px-6"
      ref={experienceRef}
    >
      {/* Section Header with underline animation */}
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-white relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        Work Experience
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0aff9d]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.h2>

      {/* Experience List with hover border and Framer Motion animation */}
      <motion.div
        className="space-y-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            cursor="pointer"
            variants={itemVariants}
            className="relative bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 hover:shadow-xl transition-transform transform hover:scale-105"
            onClick={() => handleExperienceClick(experience)}
            whileHover={{
              border: "2px solid #0aff9d",
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            {/* Year Range */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.1 },
              }}
              className="absolute top-4 right-6 text-sm text-gray-500 dark:text-gray-400"
            >
              {experience.yearRange}
            </motion.p>

            {/* Role */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2 },
              }}
              className="text-2xl font-bold mt-4 dark:text-white mb-2"
            >
              {experience.role}
            </motion.h3>

            {/* Company */}
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.3 },
              }}
              className="text-lg text-[#0aff9d] mb-4"
            >
              {experience.company}
            </motion.h4>

            {/* Description (Removed from here) */}
            {/* Tech Stack (Removed from here) */}
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for selected experience */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
          <div className="bg-gray-800 p-8 rounded-lg max-w-lg w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400"
            >
              X
            </button>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
              className="text-2xl font-bold text-gray-100 mb-2"
            >
              {selectedExperience.role}
            </motion.h3>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.1 },
              }}
              className="text-lg text-blue-500 mb-4"
            >
              {selectedExperience.company}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2 },
              }}
              className="text-sm text-gray-300 leading-relaxed"
            >
              {selectedExperience.description}
            </motion.p>
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedExperience.techStack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6, delay: 0.5 + idx * 0.2 },
                  }}
                  className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
