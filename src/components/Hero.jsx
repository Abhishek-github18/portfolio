import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PROFILE } from "../../abhishek-assets/constants";
import Abhishek from "../../abhishek-assets/public/Abhishek.jpg";
import { RiArrowRightUpLine } from "@remixicon/react";

const Hero = () => {
  const [headingText, setHeadingText] = useState("Welcome!");
  const [isTyping, setIsTyping] = useState(false);
  const [showFullStop, setShowFullStop] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true); // Start typing after 1 second
      setHeadingText(""); // Clear initial "Welcome!" text
    }, 1000); // Delay for the initial "Welcome!" text

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  useEffect(() => {
    if (isTyping) {
      let index = 0;
      let typedText = "";
      const typeTimeout = setTimeout(function type() {
        if (index < "Hey, I'm Abhi".length) {
          typedText += "Hey, I'm Abhi."[index];
          setHeadingText(typedText); // Update heading text on each interval
          index++;
          setTimeout(type, 150); // Continue typing after a delay
        } else {
          setShowFullStop(true); // Show full stop after text
          clearTimeout(typeTimeout);
        }
      }, 150); // Typing speed

      return () => clearTimeout(typeTimeout);
    }
  }, [isTyping]);

  return (
    <section
      className="hero flex flex-col items-center md:flex-row md:items-start justify-between p-4 md:p-8"
      id="hero"
    >
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {headingText} {/* Dynamic text change */}
          {showFullStop && (
            <motion.div
              className="w-4 h-4 bg-[#0aff9d] rounded-full inline-block ml-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            ></motion.div>
          )}
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-gray-700 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          {PROFILE.role}
        </motion.h2>

        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          {PROFILE.subheading}
        </motion.p>

        <motion.a
          href="/Abhishek_Resume_Aug_2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="mt-4 p-4 inline-flex items-center text-blue-500 hover:text-blue-700 transition-all duration-300"
          whileHover={{
            color: "#000",
            scale: 1.1,
            transition: { duration: 0.3 },
            backgroundColor: "#0aff9d",
          }}
        >
          <span>Download Resume</span>
          <RiArrowRightUpLine className="ml-2" />
        </motion.a>
      </div>

      {/* Right Section */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <motion.img
          src={Abhishek}
          alt="Abhishek Profile Picture"
          className="w-48 h-48 md:w-64 md:h-64 rounded-lg border-4 border-gray-300 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
          whileHover={{
            scale: 1.1,
            rotate: 3,
            boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)",
            borderColor: "#0aff9d",
            transition: { duration: 0.3 },
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
