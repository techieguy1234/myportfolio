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
    redux,
    tailwind,
    nodejs,
   
    git,
    figma,
   
    coders,
    ert,
    pomo,
    rise,
    age,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Editor",
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
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
  ];
  
  const experiences = [
    {
      title: "Content Editor",
      company_name: "10000coders",
      icon: coders,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "As a video editor at '10kcoders,' I specialize in creating compelling visual content tailored for diverse social media platforms.",
        "Utilizing my skills in video editing, I contribute to the dynamic presentation of content that resonates with our audience.",
        "Working closely with the team, I ensure the seamless integration of videos on various social media channels.",
        "Additionally, I actively engage in refining and perfecting video content to enhance our company's online presence and reach.",
      ],
    },
    {
      title: "UI Developer",
      company_name: "ERT",
      icon: ert,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - April 2022",
      points: [
        "As a UI developer, I specialize in crafting and managing web applications using React.js and related technologies.",
"My expertise extends to developing applications that seamlessly adapt to various devices, ensuring optimal user experiences across platforms.",
 "Collaborating effectively with cross-functional teams, including designers and product managers, is a key aspect of my approach to delivering high-quality products.",
"Additionally, I actively participate in code reviews, offering constructive feedback to support continuous improvement among fellow developers.",
],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Kethan proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kethan does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Mithra optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pomodoro Timer",
      description:
        "Introducing our Pomodoro Timer App – a sleek web platform for efficient work intervals. Set, track, and customize Pomodoro timers seamlessly. Elevate your productivity with our user-friendly solution.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: pomo,
      source_code_link: "https://github.com/mithra000/pomodorotimer",
    },
    {
      name: "Sunrise & Sunset tracker",
      description:
      "Sunrise & Sunset Time Tracker: A web app helping users discover sunrise and sunset times across all locations. Easily view and track daylight hours wherever you are. Simplifying your daily routine with accurate and accessible sunrise and sunset information.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: rise,
      source_code_link: "https://github.com/mithra000/SunScape-City-Insights",
    },
    {
      name: "Age Calculator",
      description:
      "Age Calculator: A user-friendly web tool to effortlessly calculate your age. Simplify the process of determining age and make birthday planning easier. Your go-to solution for quick and accurate age calculations.",
      tags: [
        {
          name: "JS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: age,
      source_code_link: "https://github.com/mithra000/age-calculator",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };