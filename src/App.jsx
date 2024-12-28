import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import ParticlesComponent from "./particle";

function App() {
  // Custom Section Component
  const Section = ({ children, index }) => {
    return (
      <motion.div
        className="w-full"
        initial={{
          opacity: 0,
          // Slide from right for even, left for odd index
          x: index % 2 === 0 ? 50 : -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide to the original position
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    );
  };

  // PropTypes validation for Section
  Section.propTypes = {
    children: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
  };

  return (
    <div className="relative z-20 min-h-screen text-white bg-black overflow-hidden">
      {/* Particles Background */}
      <ParticlesComponent />

      {/* Other Content */}
      <Navbar />
      <div className="flex-1 ml-12 md:ml-24">
        <div className="container mx-auto px-4 md:px-8">
          <Section index={0}>
            <Hero />
          </Section>

          {/* Projects Section */}
          <Section index={1}>
            <Projects />
          </Section>

          {/* Skills Section */}
          <Section index={2}>
            <Skill />
          </Section>

          {/* Experience Section */}
          <Section index={3}>
            <Experience />
          </Section>

          {/* Education Section */}
          <Section index={4}>
            <Education />
          </Section>

          {/* Contact Section */}
          <Section index={5}>
            <Contact />
          </Section>
        </div>
      </div>
    </div>
  );
}

export default App;
