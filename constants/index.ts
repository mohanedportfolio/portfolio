import { FaYoutube, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: FaLinkedin,
    link: "linkedin.com/in/mohaned-ahmed-650b84166/",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "github.com/mohaneduestc",
  },

] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
   {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
   {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
   {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Admin Dashboards",
    description:
      'Development of alot frontend admin dashboards for fintech and bussiness  projects using Next.js, and React.js. Features include: transaction mapping, merchant information, admin authorizations, and system configuration. Styling and APIs: Utilizing Tailwind CSS for responsive design. Integrated GraphQL Client for efficient caching and handling of queries and mutations.',
    image: "/projects/project-1.png",
    link: "",
  },
  {
    title: "Ligeet",
    description:
      'Ligeet is a mobile application that helps patients to look for medicines based on their locations . The patients can check their medicine and view the pharmacies locations in the application map. The App also maintains a points based system to reward the pharmacies with the most responses. The app has received a warm welcome from pharmacies, as indicated here',
    image: "/projects/project-2.png",
    link: "https://play.google.com/store/apps/details?id=com.ligeet.pharmacy&hl=en",
  },
  {
    title: "Cubstales",
    description:
      'Cubstales is a mobile platform designed to nurture a love for reading in children. Explore a diverse collection of engaging, interactive stories in a safe environment that inspires learning and imagination',
    image: "/projects/project-3.png",
    link: "https://play.google.com/store/apps/details?id=io.softolite.cubstales",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "Linkedin",
        icon: FaLinkedin,
        link: "linkedin.com/in/mohaned-ahmed-650b84166/",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "github.com/mohaneduestc",
      },
      // {
      //   name: "Discord",
      //   icon: RxDiscordLogo,
      //   link: "https://discord.com",
      // },
    ],
  },

  {
    title: "About",
    data: [
      // {
      //   name: "Become Sponsor",
      //   icon: null,
      //   link: "https://youtube.com",
      // },
      // {
      //   name: "Learning about me",
      //   icon: null,
      //   link: "#",
      // },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:mohaneduestc@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
