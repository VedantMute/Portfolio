"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Web Developement",
    description:
      "Passionate about crafting responsive and modern websites using HTML, CSS, JavaScript, and React JS. Used many tools like webflow, DhiWise, Acertinity UI , Tailwind CSS to enhance the productivity",
  },
  {
    title: "JAVA Programming",
    description:
      "Navigating the Java landscape with a solid foundation in Data Structures and Algorithms (DSA), specializing in the art of JDBC and MySQL",
  },
  {
    title: "Data Analyst",
    description:
      "Navigating the Java landscape with a solid foundation in Data Structures and Algorithms (DSA), specializing in the art of JDBC and MySQL",
  },
  {
    title: "Cloud and AI",
    description:
      "Hands on google cloud through GDSC SCOE. Also profiecient with many AI tools like ChatGPT, Copilot and so on",
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
