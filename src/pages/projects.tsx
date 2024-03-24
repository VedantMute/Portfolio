import { HeroParallaxDemo } from '@/components/HeroParallaxDemo'
import 'tailwindcss/tailwind.css';
import React from 'react'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AllProjects from '@/components/AllProjects';

export default function MyProjects() {
  return (
    <div>
      <Navbar/>
      <HeroParallaxDemo/>
      <AllProjects/>
      <Footer/>
    </div>
  )
}
