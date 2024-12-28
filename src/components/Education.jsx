import { useRef } from "react";
import { EDUCATION } from "../../abhishek-assets/constants";
import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation"; 

const Education = () => {
  const educationRef = useRef(null);

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

  return (
    <section id="education" className="container mx-auto py-20 px-6" ref={educationRef}>
      {/* Section Header with Typing Animation and Underline Animation */}
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <TypingAnimation text="Education" />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0aff9d]"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.h2>

      {/* Education List with Framer Motion */}
      <motion.div
        className="space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {EDUCATION.map((edu) => (
          <motion.div
            key={edu.id}
            variants={itemVariants}
            className="relative bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 hover:shadow-xl transition-transform transform hover:scale-105 hover:border-2 hover:border-[#0aff9d]"
          >
            {/* Degree and Institution */}
            <h3 className="text-2xl mt-4 font-bold text-white mb-2">
              <TypingAnimation text={edu.degree} />
            </h3>
            <h4 className="text-lg text-[#0aff9d] mb-4">
              <TypingAnimation text={edu.institution} />
            </h4>

            {/* Duration */}
            <p className="absolute top-4 right-6 text-sm text-white">
              <TypingAnimation text={edu.duration} />
            </p>

            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed">
              <TypingAnimation text={edu.description} />
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
