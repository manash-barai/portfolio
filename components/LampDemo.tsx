"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function LampDemo() {
    return (
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-orange-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl relative "
          >
            About Me
          </motion.h1>
          <div className="container lg:px-28 md:px-16 px-0">
            <p className="text-center mt-0 lg:mt-20">
              I am a full-stack web developer with a passion for problem-solving and
              a love for coding that started during my civil engineering studies. My
              expertise lies in JavaScript, React, Node.js, Express, Next.js, and
              TypeScript, enabling me to build robust web applications and scalable
              APIs. I particularly enjoy solving algorithmic challenges, focusing on
              array and string manipulation problems on platforms like
              GeeksforGeeks.When I am not coding, I unwind by playing chess, which sharpens my strategic thinking and mirrors my approach to overcoming coding challenges. Known for my simplicity and loyalty, these qualities drive my professional endeavors and foster strong team dynamics.My journey into software development began with a fascination for technology potential to transform ideas into reality.
            </p>
          </div>
        </LampContainer>
      );
}
