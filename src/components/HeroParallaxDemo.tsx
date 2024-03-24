"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  
  
  {
    title: "Vedant Portfolio",
    link: "https://vedantmute.netlify.app/",
    thumbnail:
      "https://github.com/Vedant-edu/Portfolio/blob/main/public/portfolio_projects.png?raw=true",
  },
  {
    title: "Sahyadri DCLLP",
    link: "https://sahyadri-llp.netlify.app/",
    thumbnail:
      "https://github.com/Vedant-edu/Portfolio/blob/main/public/sdcllp_projects.png?raw=true",
  },
 
  {
    title: "Invoice to PDF",
    link: "https://github.com/VedantMute/Invoice-Maker/tree/master",
    thumbnail:
      "https://github.com/VedantMute/Invoice-Maker/blob/master/data-input.png?raw=true",
  },
  
];
