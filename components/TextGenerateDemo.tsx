"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = ` I am a full-stack web developer with a passion for problem-solving and
              a love for coding that started during my civil engineering studies. My
              expertise lies in JavaScript, React, Node.js, Express, Next.js, and
              TypeScript, enabling me to build robust web applications and scalable
              APIs. I particularly enjoy solving algorithmic challenges, focusing on
              array and string manipulation problems on platforms like
              GeeksforGeeks.When I'm not coding, I unwind by playing chess, which sharpens my strategic thinking and mirrors my approach to overcoming coding challenges. Known for my simplicity and loyalty, these qualities drive my professional endeavors and foster strong team dynamics.My journey into software development began with a fascination for technology's potential to transform ideas into reality`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
