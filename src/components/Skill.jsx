import { useRef } from "react";
import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";

const Skill = () => {
  const skills = useRef(null);

  const skillsData = [
    { class: "devicon-html5-plain-wordmark colored", name: "HTML5" },
    { class: "devicon-css3-plain-wordmark colored", name: "CSS3" },
    { class: "devicon-bootstrap-plain-wordmark", name: "Bootstrap" },
    { class: "devicon-javascript-plain colored", name: "JavaScript" },
    { class: "devicon-react-original colored", name: "React" },
    { class: "devicon-reactrouter-plain-wordmark colored", name: "React Router" },
    { class: "devicon-nodejs-plain-wordmark colored", name: "Node.js" },
    { class: "devicon-express-original-wordmark", name: "Express" },
    { class: "devicon-mongodb-plain-wordmark colored", name: "MongoDB" },
    { class: "devicon-mongoose-original-wordmark colored", name: "Mongoose" },
    { class: "devicon-mysql-plain-wordmark", name: "MySQL" },
    { class: "devicon-java-plain-wordmark", name: "Java" },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      name: "C++",
    },
    { class: "devicon-tailwindcss-plain-wordmark", name: "Tailwind CSS" },
    { class: "devicon-materialui-plain colored", name: "Material UI" },
    { class: "devicon-redux-original", name: "Redux" },
  ];

  const toolsData = [
    { class: "devicon-git-plain-wordmark colored", name: "Git" },
    { class: "devicon-github-original-wordmark", name: "GitHub" },
    { class: "devicon-vscode-plain-wordmark", name: "VS Code" },
    { class: "devicon-atom-original-wordmark", name: "Atom" },
    { class: "devicon-eclipse-plain-wordmark", name: "Eclipse" },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
      name: "IntelliJ",
    },
    { class: "devicon-azuredevops-plain colored", name: "Azure DevOps" },
    { class: "devicon-azure-plain-wordmark", name: "Azure" },
    { class: "devicon-sonarqube-plain-wordmark", name: "SonarQube" },
  ];

  const renderIcons = (data) =>
    data.map((item, index) => (
      <motion.div
        key={index}
        className="p-2 sm:p-4 bg-gray-800 dark:bg-gray-800 rounded-lg shadow-md hover:bg-blue-800 dark:hover:bg-blue-800 transition-transform duration-300 cursor-pointer relative group flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true }}
      >
        {item.class ? (
          <i
            className={`${item.class} text-4xl sm:text-5xl`}
            title={item.name}
          ></i>
        ) : (
          <img
            src={item.src}
            alt={item.name}
            className="w-12 sm:w-14 h-12 sm:h-14 mx-auto"
            title={item.name}
          />
        )}
        {/* Tooltip */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-black text-white px-2 py-1 rounded-lg shadow-lg">
          {item.name}
        </div>
      </motion.div>
    ));

  return (
    <div id="skills" className="container mx-auto px-4 py-20" ref={skills}>
      {/* Skills Section */}
      <motion.h2
              className="text-4xl font-bold text-center mb-16 text-white relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <TypingAnimation text="Skills" />
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0aff9d]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {renderIcons(skillsData)}
      </div>

      {/* Tools Section */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mt-20 mb-10">
        Tools Used
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {renderIcons(toolsData)}
      </div>
    </div>
  );
};

export default Skill;
