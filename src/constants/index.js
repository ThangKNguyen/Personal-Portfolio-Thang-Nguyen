import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";


export const ABOUT_TEXT = `Raised in the Bay Area, I am currently pursuing a degree in Computer Science at San Jose State University, situated in the heart of Silicon Valley. With professional experience in software development, I specialize in front-end technologies while continuously expanding my skills in full-stack development and machine learning. Outside of academics and work, I am passionate about staying active through weightlifting and running. I also try to keep my mind balance by practicing piano. My diverse interests drive my commitment to growth both in technology and in life.`;

export const EXPERIENCES = [
  {
    year: "April 2024 - Present",
    role: "Software Engineer Intern",
    company: "Jonajo Consulting",
    description: `
   Built a multi-routes UI for a GPT-like virtual assistant app using React and Tailwind CSS, managing frontend functions and Firebase data interactions. Integrated an AI chatbot widget, connecting the frontend to a machine learning model, deployed on the company's site with over 5,000 monthly visits. Converted vanilla JavaScript to React, improving organization and reducing the codebase by 30%.
    `,
    technologies: ["JavaScript", "ReactJS", "Tailwind CSS", "Firebase"],
  },
  {
    year: "June 2024 - September 2024",
    role: "Test Engineer Intern",
    company: "Rocket EMS",
    description: ` Tested and programmed customer hardware units, ensuring full functionality and accurate configuration, consistently
    delivering results 20% faster than expected deadlines.
    Formulated and implemented rigorous testing procedures with senior test engineers, reducing hardware testing errors by
    12% and improving accuracy and quality across all product deliveries`,
    technologies: ["Testing","Hardware Programming", "Procedure Writing",],
  },
];

export const PROJECTS = [
  {
    title: "Fitness Web App",
    image: project1,
    description:
      "A fully functional fitness web application that lets users to search and view tutorials for various exercises.",
    technologies: ["ReactJS","HTML", "CSS", "RapidAPI", "Material UI"],
    demo: "https://muscleforger.netlify.app/",
    github: "https://github.com/ThangKNguyen/React-Fitness-App"
  },
  {
    title: "Personal Portfolio",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["ReactJS", "Taiwind CSS", "Framer Motion"],
    demo: "/",
    github: "https://github.com/ThangKNguyen/Personal-Portfolio-Thang-Nguyen"
  },
  {
    title: "Video Player",
    image: project3,
    description:
      "A video player that allows users to watch selected video files with working subtitles.",
    technologies: ["Java", "JavaFX", "SceneBuilder", "CSS"],
    demo: "https://www.youtube.com/watch?v=sAmM4iigrk8",
    github: "https://github.com/ThangKNguyen/Media-Player-Project"
  },
  {
    title: "Shopping List",
    image: project4,
    description:
      "A shopping app that allows multiple users to edit the cart simultaneously in real-time. ",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    demo: "https://qu1ckcart.netlify.app/",
    github: "https://github.com/ThangKNguyen/ShoppingListApp"   
  },
];

