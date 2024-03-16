import { HeroParallaxDemo } from '@/components/HeroParallaxDemo'
import 'tailwindcss/tailwind.css';
import React from 'react'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function MyProjects() {
  return (
    <div>
      <Navbar/>
      <HeroParallaxDemo/>
      <Footer/>
    </div>
  )
}
