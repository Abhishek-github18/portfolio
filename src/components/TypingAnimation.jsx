import PropTypes from "prop-types";
import { motion } from "framer-motion";

const TypingAnimation = ({ text }) => {
    const words = text.split(" ");
    return (
      <span>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i * 0.15,
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </span>
    );
  };
  
  TypingAnimation.propTypes = {
    text: PropTypes.string.isRequired,
  };

export default TypingAnimation;