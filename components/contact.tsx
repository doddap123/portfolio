"use client";
import Head from 'next/head';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SectionHeading from './section-heading';
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
const { ref } = useSectionInView("Contact");
  return (
    <motion.section
    id="contact"
    ref={ref}
    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1,
    }}
    viewport={{
      once: true,
    }}
  >
      <SectionHeading>
        Contact Me
      </SectionHeading>
      <div className="text-lg font-semibold mb-10">
        Feel free to reach out to me!
      </div>
      <div className="flex justify-center items-center space-x-8">
      <a href="mailto:doddapranit@gmail.com" 
          className="bg-gray-100 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack">
          <SiGmail className="h-8 w-8 text-red-500" />
      </a>
      <a
          href="https://www.linkedin.com/in/pranit-dodda"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
        >
          <FaLinkedin className="h-8 w-8 text-blue-500" />
        </a>
        </div>
    </motion.section>
  );
};

export default Contact;
