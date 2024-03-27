import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'
import 'tailwindcss/tailwind.css';
export default function sitemap() {
  return (
  <>
  <div>
  <Navbar/>
<div className='bg-gray-950 py-12 pt-32  text-gray-500  px-4 ' ><div className=' text-blue-700 underline  '>
      <a href="https://vedantmute.netlify.app/">https://vedantmute.netlify.app/	</a> <br />
      <a href="https://vedantmute.netlify.app/about">https://vedantmute.netlify.app/about	</a> <br />
      <a href="https://vedantmute.netlify.app/projects">https://vedantmute.netlify.app/projects	</a> <br />
      <a href="https://vedantmute.netlify.app/blogs">https://vedantmute.netlify.app/blogs	</a> <br />
      <a href="https://vedantmute.netlify.app/aboutsite">https://vedantmute.netlify.app/aboutsite	</a> <br />
      <a href="https://vedantmute.netlify.app/sitemap">https://vedantmute.netlify.app/sitemap	</a> <br />
    </div>     
</div>

<Footer/>
</div>
    </>
  )
}
