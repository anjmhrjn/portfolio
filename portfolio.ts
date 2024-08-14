import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Anuj Maharjan",
  title: "Hi all, I'm Anuj",
  description:
    "I am a passionate Full Stack web developer with a solid background in creating Full Stack web applications using Django, Node.js, and React.js. My keen interest in learning and applying new technologies drives me to continuously enhance my skills and integrate the latest advancements into my projects. As a self-driven and diligent professional, I am always eager to expand my knowledge and collaborate effectively within a team environment.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "anjmhrjn",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:anjmhrjn1@gmail.com",
  github: "https://github.com/anjmhrjn",
  instagram: "https://www.instagram.com/anjmhrjn",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "devicon:mongodb",
        },
        {
          skillName: "MySQL",
          iconifyTag: "devicon:mysql",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design (React.js, Next.js)",
    progressPercentage: "78",
  },
  {
    Stack: "Backend (Node.js, Django)",
    progressPercentage: "83",
  },
  {
    Stack: "Database (MongoDB, MySQL, PostgreSQL)",
    progressPercentage: "73",
  },
  {
    Stack: "Programming (Python, Javascript)",
    progressPercentage: "87",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "The University of Toledo: College of Engineering",
    subHeader: "Masters of Science: Computer Science and Engineering",
    duration: "August 2024 - Present",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Softwarica College of IT and E-Commerce (Coventry University)",
    subHeader: "Bachelor of Science (Hons.) in Computing",
    duration: "September 2019 - November 2022",
    desc: "",
    grade: "First Class Honors Degree",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developerr",
    company: "Digi Technology Pvt. Ltd.",
    companyLogo: "/img/icons/common/digitechnology.png",
    date: "Aug 2022 - Jul 2024",
    desc: "I crafted backend and frotend for web applications. Created APIs necessary for mobile app development. Implemented scheduling jobs to automate various tasks related to the system. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
  },
  {
    role: "Django Developer",
    company: "Kaii Group",
    companyLogo: "/img/icons/common/kaiigroup.png",
    date: "Aug 2021 - Jul 2022",
    desc: "Crafted robust web application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, and Stripe for efficient development. Designed clean and efficient web frontends using React and jQuery.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "schoolworkspro",
    desc: "Schoolworkspro is a cutting-edge digital learning platform that combines a comprehensive learning management system and school management system. With features like plagiarism detection, digital attendance tracking, and online exams, Schoolworkspro offers a seamless and efficient solution for educational institutions. Leveraging Business Intelligence capabilities, it provides advanced analytics for student performance, teacher effectiveness, and overall school growth. Developed by Digi Technology Pvt. Ltd, Schoolworkspro is revolutionizing the education sector with its innovative approach and commitment to delivering exceptional results.",
    link: "https://schoolworkspro.com",
  },
  {
    name: "UED",
    desc: "UED is a global educational institution and Ed-Tech platform offering unlimited access to diverse academic and alternative courses, as well as research and innovation opportunities. The platform aims to democratize education and training, fostering sustainable socioeconomic development and making a positive global impact. Its goal is to create a world of peace, prosperity, inclusion, and positivity through equal educational opportunities for all.",
    link: "https://www.ued.ai/",
  },
  {
    name: "KOX",
    desc: "KOX is the premier platform for providing consulting services to companies and projects across various industries. The platform aims to aid in the sustainable development of projects and companies, transforming abstract visions into concrete achievements. It prioritizes delivering unparalleled value and opportunities to clients through top-tier services, ensuring excellence in every interaction.",
    link: "https://www.kox.ai/",
  },
  {
    name: "Restaurant Reservation System",
    desc: "The Restaurant Reservation System is a college project that allows users to make online reservations at a restaurant. Users can create accounts, check availability, select their desired date and time, and confirm their reservations. The system also includes features for reservation management, and an admin interface for restaurant staff to oversee bookings.",
    link: "https://youtu.be/Vk9UQ8_o8Hw",
    github: "https://github.com/anjmhrjn/restro-frontend-react",
  },
  {
    name: "Online Counselling Application (Group Work)",
    desc: "The Online Counselling Application is a college group project that enables users to schedule counseling sessions with experts. Users can browse available counselors, select preferred dates and times, and book appointments online. The system also provides reminders and secure communication channels for effective counseling.",
    link: "https://youtu.be/pcBlXA4rSck",
  },
  {
    name: "Web-based Blog Application",
    desc: "The Web-based Blog Application is a college project allowing users to create and share blogs while also following other users' content. Users can register accounts, create personalized profiles, and publish their own blog posts. The platform facilitates interaction and engagement through the ability to follow favorite bloggers.",
    link: "https://youtu.be/oSWCwQj4DXs",
  },
  {
    name: "Anti Theft System Using Raspberry Pi",
    desc: "The Anti-Theft System Using Raspberry Pi is a college project designed to enhance security by capturing images and short 5-second videos of intruders based on detected movement. The system utilizes motion sensors and a camera to monitor the area and automatically records any suspicious activity. This setup provides real-time alerts and evidence to help prevent theft.",
    link: "https://youtu.be/al4FlHfGPhE",
  },
  
];

export const feedbacks: FeedbackType[] = [
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Anuj Maharjan",
  description: greetings.description,
  author: "Anuj Maharjan",
  image: "https://avatars.githubusercontent.com/u/57608084?s=48&v=4",
  url: "https://maharjananuj.com.np",
  keywords: [
    "Anuj",
    "Anuj Maharjan",
    "@anjmhrjn",
    "anjmhrjn",
    "Portfolio",
    "Anuj Portfolio ",
    "Anuj Maharjan Portfolio",
  ],
};
