import { useState } from "react";
import { EXPERIENCES } from "../../abhishek-assets/constants";
import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";
const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

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
    >
      {/* Section Header with typing animation */}
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <TypingAnimation text="Work Experience" />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0aff9d]"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.h2>

      {/* Experience List */}
      <motion.div className="space-y-10">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => handleExperienceClick(experience)}
          >
            {/* Year Range */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="absolute top-4 right-6 text-sm text-white"
            >
              <TypingAnimation text={experience.yearRange} />
            </motion.p>

            {/* Role */}
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="text-2xl font-bold mt-4 text-white mb-2"
            >
              <TypingAnimation text={experience.role} />
            </motion.h3>

            {/* Company */}
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="text-lg text-[#0aff9d] mb-4"
            >
              <TypingAnimation text={experience.company} />
            </motion.h4>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for selected experience */}
      {selectedExperience && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-gray-800 p-8 rounded-lg max-w-lg w-full relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              X
            </button>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-100 mb-2"
            >
              <TypingAnimation text={selectedExperience.role} />
            </motion.h3>
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-blue-500 mb-4"
            >
              <TypingAnimation text={selectedExperience.company} />
            </motion.h4>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-gray-300 leading-relaxed"
            >
              <TypingAnimation text={selectedExperience.description} />
            </motion.p>
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedExperience.techStack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.6, delay: 0.5 + idx * 0.2 },
                  }}
                  className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Experience;