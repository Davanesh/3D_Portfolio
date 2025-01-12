import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    java,
    spring,
    boot,
    aws,
    nextjs,
    doc,
    realestate,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "MERN Stack Developer",
      icon: web,
    },
    {
      title: "Java Developer & Backend Specialist",
      icon: backend,
    },
    {
      title: "Mobile Developer Focused on React Native",
      icon: mobile,
    },
    {
      title: "UI/UX Designer & Front-End Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    // {
    //   name: "Java",
    //   icon: java
    // },
    {
      name: "Java Spring",
      icon: spring
    },
    // {
    //   name: "Spring Boot",
    //   icon: boot
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next js",
      icon: nextjs
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const projects = [
    {
      name: "CloudNest",
      description:
        "A professional and production-ready storage management platform designed to deliver secure, fast, and seamless file storage and sharing for individuals and teams. Built with cutting-edge technologies, this platform provides an intuitive interface and robust backend to handle modern storage needs efficiently.",
      tags: [
        {
          name: "Next.js 15",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "OTP Auth",
          color: "gold-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: doc,
      source_code_link: "https://github.com/Davanesh/CloudNest",
    },
    {
      name: "SyncDocs",
      description:
        "A feature-rich, real-time document collaboration platform inspired by Google Docs. SyncDocs allows multiple users to create, edit, and collaborate on documents simultaneously. The project integrates modern web technologies to deliver a seamless, responsive, and user-friendly experience.",
      tags: [
        {
          name: "Next.js 15",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Convex",
          color: "pink-text-gradient",
        },
        {
          name: "Clerk",
          color: "gold-text-gradient",
        },
        {
          name: "Liveblocks",
          color: "lime-text-gradient",
        },
      ],
      image: doc,
      source_code_link: "https://github.com/Davanesh/Google_Docs_Clone",
    },
    {
      name: "Real-Estate Marketplace",
      description:
        "A dynamic real estate marketplace built on the MERN stack, offering secure property listings for buying and selling. Featuring MongoDB Atlas on AWS for reliable data storage, Firebase authentication, and JWT encryption, this platform ensures smooth navigation and security, backed by Redux Toolkit for efficient state management.",
      tags: [
        {
          name: "MongoDB",
          color: "lime-text-gradient",
        },
        {
          name: "Express.js",
          color: "gold-text-gradient",
        },
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwinf CSS",
          color: "pink-text-gradient",
        },
      ],
      image: realestate,
      source_code_link: "https://github.com/Davanesh/Real-Estate-Marketplace",
    },
  ];
  
  export { services, technologies, projects };