"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView("About");
  
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a computer science student at <span className="font-medium">Georgia Institute of Technology</span> with concentrations in <span className="font-medium">Media</span> and <span className="font-medium">Information Internetworks</span>. I have a passion for continuously learning. My aim in computer science is to leverage my skills to drive impactful projects in the tech industry. 

      </p>

      <p>
      <span className="italic">When I'm not coding</span>, I enjoy watching/playing sports, listening to music, and watching TV shows. I also enjoy working out and eating good food!
      </p>
    </motion.section>
  );
}