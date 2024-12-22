import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {
  // Custom Section Component
  const Section = ({ children }) => {
    const ref = useRef(null); // Create a ref for the section
    const isInView = useInView(ref, { once: true }); // Track visibility, trigger animation once

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 75 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined} // Animate only if in view
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        {children}
      </motion.div>
    );
  };

  // PropTypes validation for Section
  Section.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 ml-12 md:ml-24 overflow-hidden">
        {/* Container for Sections */}
        <div className="container mx-auto px-4 md:px-8">
          {/* Hero Section */}
          <Section>
            <Hero />
          </Section>

          {/* Projects Section */}
          <Section>
            <Projects />
          </Section>

          {/* Skills Section */}
          <Section>
            <Skill />
          </Section>

          {/* Experience Section */}
          <Section>
            <Experience />
          </Section>

          {/* Education Section */}
          <Section>
            <Education />
          </Section>

          {/* Contact Section */}
          <Section>
            <Contact />
          </Section>
        </div>
      </div>
    </div>
  );
}

export default App;
