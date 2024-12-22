import movieverse from "../assets/moviverse.png"
import ipu from "../assets/ipu-iif.png"
import primePlace from "../assets/primeplace.png"

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Hey I'm Abhi",
  role: "I'm Full Stack Developer",
  subheading:
    "With 1 years of full-stack development experience, I build efficient, scalable web applications. Not on the job hunt, but always curious about interesting projects.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "MovieVerse",
    description:
      "Developed a web application for movie and TV show search, featuring a trending section and genre filter for enhanced user experience. Integrated APIs for fetching data and implemented responsive designs for seamless usage across devices.",
    techStack: ["React", "Node.js", "Express", "Material UI"],
    imgSrc: movieverse, // Replace this with the correct image source
    link: "https://movieverse-show.netlify.app",
    sourceCode: "https://github.com/Abhishek-github18/Entertainment-HUB",
  },
  {
    id: 2,
    title: "IPU-Innovation and Incubation Center Website",
    description:
      "Developed a full-stack web application for GGSIPU-IIF, providing students with real-time access to event details, notices, and updates. Integrated MongoDB for efficient data storage and retrieval of events and user data.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    imgSrc: ipu, // Replace this with the correct image source
    link: "https://ipu-iif.netlify.app",
    sourceCode: "https://github.com/Abhishek-github18/IPU-IIF",
  },
  {
    id: 3,
    title: "PrimePlace",
    description:
      "A real estate website where users can search for properties to rent or buy and add their properties for listing. Features include property management and Firebase integration for image storage.",
    techStack: ["React", "Node.js", "Express", "Redux", "Tailwind CSS", "Firebase"],
    imgSrc: primePlace, // Replace this with the correct image source
    link: "https://prime-place.vercel.app",
    sourceCode: "https://github.com/Abhishek-github18/primePlace",
  },
];


export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "GraphQL",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Dec 2023 - Present",
    role: "System Engineer",
    company: "Tata Consultancy Services",
    description:
      "Working on Metlife’s MetDental project, a Dental Provider Servicing Application in the US. Developed a Multi-User Admin Tool allowing one admin per office to invite others for registration and manage their roles. Built a custom registration page integrated with PING Identity for secure invitation-based registration, streamlining the onboarding process and enhancing control over user access for dental offices.",
    techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "PING Identity", "Azure DevOps", "SonarQube", "VeraCode"],
  },
  {
    yearRange: "Jul 2022 - Sep 2022",
    role: "Summer Intern",
    company: "ACM USICT",
    description:
      "Developed a movie/TV show search app using ReactJS, with features like filtering options based on genres. Focused on delivering a seamless and user-friendly experience.",
    techStack: ["ReactJS", "Material UI", "REST APIs"],
  },
];


export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "University School of Information, Communication, and Technology (USICT)",
    duration: "2019 - 2023",
    description: "Graduated with a C.G.P.A of 8.7, focusing on algorithms, data structures, and full-stack development.",
  },
  {
    id: 2,
    degree: "Class XII, CBSE",
    institution: "Central Board of Secondary Education",
    duration: "2018 - 2019",
    description: "Achieved an excellent academic record with a percentage of 94.3%.",
  },
];
