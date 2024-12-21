import  { useRef } from "react";

const Skill = () => {
    const skillRef = useRef(null);
  return (
    <div className="container mx-auto py-20" ref={skillRef}>
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
        {[
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
        ].map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transform hover:bg-blue-100 dark:hover:bg-blue-800 hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            {skill.class ? (
              <i className={`${skill.class} text-6xl`} title={skill.name}></i>
            ) : (
              <img
                src={skill.src}
                alt={skill.name}
                className="w-16 h-16 mx-auto"
              />
            )}
            <p className="mt-2 text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mt-20 mb-10">Tools Used</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
        {[
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
          {class:'devicon-sonarqube-plain-wordmark', name:'SonarQube'},
        ].map((tool, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transform hover:bg-blue-100 dark:hover:bg-blue-800 hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            {tool.class ? (
              <i className={`${tool.class} text-6xl`} title={tool.name}></i>
            ) : (
              <img
                src={tool.src}
                alt={tool.name}
                className="w-16 h-16 mx-auto"
              />
            )}
            <p className="mt-2 text-sm font-medium">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
