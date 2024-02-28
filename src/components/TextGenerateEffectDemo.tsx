"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Hello! I'm Vedant Mute, an engineering student with a passion for the technology. Proficient in web development, Java programming, and AI enthusiast with expertise in data science. Excited to innovate and create through code. 
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
