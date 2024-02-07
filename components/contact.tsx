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
      <div className="text-lg font-semibold mb-4">
        Feel free to reach out to me!
      </div>
      <p className="text-gray-700">
        <SiGmail className="h-5 w-5 inline-block mr-2 text-blue-500" />
        Email: <a href="mailto:doddapranit@gmail.com" className="text-blue-500">your-email@gmail.com</a>
      </p>
      <p className="text-gray-700">
        <FaLinkedin className="h-5 w-5 inline-block mr-2 text-blue-500" />
        LinkedIn: <a href="https://www.linkedin.com/in/pranit-dodda" target="_blank" rel="noopener noreferrer" className="text-blue-500">Your LinkedIn Profile</a>
      </p>
    </motion.section>
  );
};

export default Contact;
