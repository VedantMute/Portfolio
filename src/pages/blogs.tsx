import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'
import 'tailwindcss/tailwind.css';
export default function BlogsPage() {
  return (
    <div>
      <Navbar/>
      <Blogs/>
      <Footer/>
    </div>
  )
}
