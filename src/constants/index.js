import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = 
 `I am a dedicated full-stack developer currently pursuing a B.Tech in Computer Science with hands-on experience in building robust and scalable web applications. Through impactful  personal projects, I’ve honed my skills in front-end technologies like React.js, Next.js, and Tailwind CSS, and back-end stacks including Node.js, Express.js, and MongoDB. 
    My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a strong passion for creating efficient and user-centric web applications. I have hands-on experience with technologies such as React.js, Next.js, Node.js, MongoDB, MySQL, and Supabase, gained through real-world projects. I actively practice Data Structures and Algorithms which has significantly strengthened my problem-solving skills. I thrive in collaborative environments, enjoy tackling complex technical challenges, and continuously seek opportunities to learn and grow. Outside of coding, I enjoy exploring new technologies, staying active, and contributing to open-source projects`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Food Ordering Website",
    image: project1,
    description:
      "A responsive canteen website built using the MERN stack, offering a seamless food ordering experience with real-time order tracking and secure online payments. Designed to enhance efficiency and user convenience in campus dining",
    technologies: [  "MongoDB", "Express" , "React", "Node.js","Tailwind CSS"],
    github: "https://github.com/josum06/bpitcanteen"
  },
  {
    title: "Campus Connect",
    image: project3,
    description:
      "Campus Connect is a campus networking platform that enables students to share projects and connect through real-time chat. It supports secure one-to-one and group messaging with connection requests. Faculty and admins can post official notices and events. The platform fosters seamless communication and collaboration across the campus.",
    technologies: ["MongoDB", "Express" , "React", "Node.js","Tailwind CSS"],
    github: "https://github.com/josum06/CC"
  },
  {
    title: "Natours",
    image: project2,
    description:
      "A feature-rich tour booking website developed with Node.js, Express, and MongoDB. It includes secure user authentication, Stripe-based payment integration, and efficient booking management to deliver a smooth travel planning experience.",
    technologies: ["Express","Node.js", "Pug", "MongoDB"],
    github: "https://github.com/josum06/Natours"
  },
  {
    title: "Book Ease",
    image: project4,
    description:
      "Book Ease is a hotel management web app built with Next.js and Supabase, offering real-time guest data tracking, seamless authentication, and an intuitive booking experience. It streamlines operations and improves efficiency in hospitality management",
    technologies: ["Next.js", "supabase"],
    github: "https://github.com/josum06/book-ease-Next"
  },
];

export const CONTACT = {
  address: "Sant Nagar, North Delhi, Delhi 110084 ",
  phoneNo: "+91 8287075528",
  email: "sumit.joshi0616@gmail.com",
};
