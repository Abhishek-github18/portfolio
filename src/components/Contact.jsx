import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import TypingAnimation from "./TypingAnimation";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-900 py-16 px-6">
      {/* Heading */}
      <motion.h2
              className="text-4xl font-bold text-center mb-16 text-white relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <TypingAnimation text="Let's Connect" />
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0aff9d]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.h2>
      {/* Contact Icons Container */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        {/* Contact Item Component */}
        {[
          {
            href: "mailto:abhishekrock796@gmail.com",
            icon: <CiMail className="text-5xl text-white" />,
            label: "Email",
            description: "abhishekrock796@gmail.com",
          },
          {
            href: "https://www.linkedin.com/in/abhishek-anand-365b06193/",
            icon: <FaLinkedin className="text-5xl text-white" />,
            label: "LinkedIn",
            description: "linkedin.com/in/abhishek-anand-365b06193/",
          },
          {
            href: "https://github.com/Abhishek-github18",
            icon: <FaGithub className="text-5xl text-white" />,
            label: "GitHub",
            description: "github.com/Abhishek-github18",
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-40 h-40 flex items-center justify-center rounded-full bg-gray-800 shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
          >
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-full border-4"
              style={{
                borderColor: "#0aff9d",
              }}
              initial={{ rotate: 0, borderColor: "#0077b6" }}
              whileHover={{
                rotate: 360,
                borderColor: "#0aff9d",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            ></motion.div>
            {/* Icon and Text */}
            <div className="flex flex-col items-center justify-center text-center p-4">
              {item.icon}
              <p className="mt-2 text-lg font-semibold text-white">
                {item.label}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                {item.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
