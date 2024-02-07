import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { AiOutlineDatabase } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";
import covidImg from "@/public/COVID-19_outbreak_USA_per_capita_cases_map_counties.svg";
import swagImg from "@/public/swag2.png";
import campusImg from "@/public/campus.png";
import fourfourImg from "@/public/fourfour.png";
import boltImg from "@/public/bolt.png";
import listr from "@/public/listr.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Undergraduate Researcher for VisualizaXiong Lab",
    location: "Atlanta, GA",
    description:
      "Contributing to ongoing research under Dr. Cindy Xiong Bearfield, examining visual complexity across taxonomy levels in various visualization types.",
    icon: React.createElement(GiMagnifyingGlass),
    date: "January 2024 - present",
  },
  {
    title: "Software Engineer Intern @ AT&T",
    location: "Atlanta, GA",
    description:
      "Deployed an efficient bot platform using Microsoft Bot Framework for MS Azure and TypeScript, enabling alerts to be delivered to 20+ employees within the Performance Engineering Group regarding critical inconsistencies in system CPU usage",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - August 2023",
  },
  {
    title: "Tech Team Software Developer @ Hexlabs Inc.",
    location: "Atlanta, GA",
    description:
      "Fullstack developer(MERN Stack) for the Hexlabs Tech Team, working on the development of the Hexlabs tools for hackathons such as HackGT and Horizons and tools such as Bolt and Swag Shop.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - present",
  },
  {
    title: "Data Integration Engineer for FourFourBeat Project",
    location: "Atlanta, GA",
    description:
      "Implemented Georgia Tech's archive of over 900 hip hop records into algorithm and archival website.",
    icon: React.createElement(AiOutlineDatabase),
    date: "January 2022 - May 2023",
  },
  {
    title: "Software Engineer Intern @ Walmart Global Tech",
    location: "Bentonville, AR",
    description:
      "Innovated supply order management processes by developing a barcode generator using Java and Spring Boot for testing global trade item numbers (GTINs) and integrating it into an API using Insomnia and Spring Boot, resulting in a 15% increase in accuracy of product identification, streamlined operations, and enhanced user accessibility.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2021 - May 2021",
  },
] as const;

export const projectsData = [
  {
    title: "COVID-19 Susceptibility",
    description:
      "Unearthing COVID-19 insights through API-driven visualizations from susceptibility datasets.",
    tags: ["Pandas", "Numpy", "REST API", "Matplotlib"],
    imageUrl: covidImg,
    url: "https://www.youtube.com/watch?v=VjOpc6gOzrY"
  },
  {
    title: "HackGT Swag Shop",
    description:
      "HackGT Swag Shop allows for 1500+ participants to purchase HackGT merchandise using their points.",
    tags: ["React", "TypeScript", "Express.js", "MongoDB", "Node.js"],
    imageUrl: swagImg,
    url: "https://github.com/HackGT/prizes"

  },
  {
    title: "Listr",
    description:
      "Listr allows for users to rate and track their favorite music and shows!",
    tags: ["React", "HTML/CSS", "Spotify API", "MongoDB"],
    imageUrl: listr,
    url: "https://github.com/doddap123/listr"
  },
  {
    title: "Campus Discovery",
    description:
      "Your all-in-one tool for effortless event exploration and management on campus.",
    tags: ["React", "Next.js", "CSS", "MongoDB"],
    imageUrl: campusImg,
    url: "https://github.com/doddap123/campus-discovery"
  },
  {
    title: "Bolt",
    description:
      "Bolt allows for 1500+ participants to rent hardware for the duration of HackGT!",
    tags: ["React", "TypeScript", "Express.js", "MongoDB", "Node.js"],
    imageUrl: boltImg,
    url: "https://github.com/HackGT/bolt"
  },
  {
    title: "HipHop2020 Innovation Archive",
    description:
      "Archival site links Georgia Tech's 900+ hip hop records to a dynamic website!",
    tags: ["Omeka", "HTML/CSS", "REST API"],
    imageUrl: fourfourImg,
    url: "https://hiphop2020.lmc.gatech.edu"
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express.js",
  "MongoDB",
  "Python",
  "MS Azure",
  "Python",
  "SQL",
  "Framer Motion",
  "Swift",
  "Pandas",
  "Numpy",
] as const;