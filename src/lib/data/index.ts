import { Github, Instagram, Linkedin } from "lucide-react";
import { INavLink } from "../../types/common";
import { createElement } from "react";
import {
  AiFillHtml5,
} from "react-icons/ai";
import { FaNode } from "react-icons/fa6";
import {
  BiLogoReact,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoTailwindCss,
} from "react-icons/bi";
import {
  SiNextdotjs,
  SiVuedotjs,
  SiBootstrap,
  SiFigma,
  SiMongodb,
  SiPrisma,
  SiMarkdown,
  SiExpress,
  SiUpwork,
} from "react-icons/si";
export const navLink: INavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/project" },
];

export const social = [
  {
    icon: createElement(Github, {
      size: 20,
    }),
    link: "https://github.com/faturrahman82/",
  },
  {
    icon: createElement(Instagram, {
      size: 20,
    }),
    link: "https://www.instagram.com/maulvifttr_eeee/",
  },
  {
    icon: createElement(SiUpwork, {
      size: 20,
    }),
    link: "https://www.upwork.com/freelancers/~01c75e568498eb183e",
  },
  {
    icon: createElement(Linkedin, {
      size: 20,
    }),
    link: "https://www.linkedin.com/in/maulvi-ilmullah-faturrahman-al-afghani-59704b268/",
  },
];

export const techItems = [
  {
    label: "HTML5",
    icon: AiFillHtml5,
  },
  {
    label: "CSS3",
    icon: BiLogoCss3,
  },
  {
    label: "Javascript",
    icon: BiLogoJavascript,
  },
  {
    label: "Typescript",
    icon: BiLogoTypescript,
  },
  {
    label: "Node.js",
    icon: FaNode,
  },
  {
    label: "React",
    icon: BiLogoReact,
  },
  {
    label: "Next.js",
    icon: SiNextdotjs,
  },
  {
    label: "TailwindCSS",
    icon: BiLogoTailwindCss,
  },
  {
    label: "Bootstrap",
    icon: SiBootstrap,
  },
  {
    label: "Figma",
    icon: SiFigma,
  },
  {
    label: "MongoDB",
    icon: SiMongodb,
  },
  {
    label: "Prisma",
    icon: SiPrisma,
  },
  {
    label: "Express",
    icon: SiExpress,
  },
];
export const projectPortofolio = [
  {
    img: "/img1.png",
    title: "Portofolio V1",
    text: "My portofolio with html css js",
  },
  {
    img: "/img2.png",
    title: "Project Tim",
    text: "My Project with tim",
  },
  {
    img: "/im3.png",
    title: "Project Tim",
    text: "My Project with tim",
  },
  {
    img: "/img4.png",
    title: "Project Tim",
    text: "My Project with tim",
  },
];
