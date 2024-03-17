import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'
import 'tailwindcss/tailwind.css';
export default function aboutsite() {
  return (
    <div>
        <Navbar/>
      <p className='bg-gray-950 py-12 pt-48 text-xl text-gray-500  px-24 ' >This personal portfolio website is built using <b>Next.js</b>  for server-side rendering and client-side routing, <b>Tailwind CSS</b> for rapid styling with utility classes, and selectively incorporates components from <b>Acertinity UI</b> for enhanced visual appeal and functionality. The project is managed using npm for package management and script execution. Together, these technologies combine to create a responsive, visually appealing, and feature-rich portfolio website that showcases the creator's skills and projects effectively while providing a seamless browsing experience for visitors.      
      </p>
      <p className='text-4xl font-bold bg-gray-950 text-gray-500 px-24'>Hope you liked it</p>
      <p className='text-xl font-bold bg-gray-950 text-gray-500 py-12 px-24'>Made with 💖 in India.</p>
      <Footer/>
    </div>
  )
}
