import React from 'react'
import FitText from './FitText'
import Link from "next/link";
export default function Footer() {
  return (
    <div className='mx-auto lg:max-w-screen-2xl'>
     
      <footer className="bg-slate-950 "  aria-labelledby="footer-heading">

  <div className="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-12 lg:px-20">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="xl:col-span-1">
        <Link
          href="/"
          className="text-lg font-bold tracking-tighter transition duration-500 ease-in-out transform text-gray-500 tracking-relaxed lg:pr-8"
        >
         Vedant
{" "}
        </Link>
        <p className="w-1/2 my-2 text-sm text-gray-500">Unwrapped your mind! <br /><span className="bg-indigo-50 dark:bg-gray-900 dark:text-indigo-300 inline-block border border-dashed border-indigo-600  px-2 ">Beta Version 0.0.11</span></p>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="font-bold leading-6 uppercase text-gray-500">
              Page
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="font-semibold leading-6 uppercase text-gray-500">
              Visit
            </h3>
            <ul role="list" className="mt-4   md:gap-8 space-y-3">
              <li>
                <Link
                  href="https://github.com/VedantMute/VedantMute"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.cloudskillsboost.google/public_profiles/aaf82b53-0b20-4905-9ffd-fcaa0c5660dc"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Google Cloud Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutsite"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  About Site
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutsite"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  SiteMap
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" lg:justify-end md:grid md:grid-cols-1">
          <div className="w-full ">
            <div className=" lg:justify-end xl:mt-0">
              <h3 className="font-semibold leading-6 uppercase text-gray-500">
                FIND ME ON
              </h3>
              <ul role="list" className="mt-4 space-y-3">
              <li>
                <Link
                  href="https://www.linkedin.com/in/vedant-mute/"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/vedaannntt?t=WMI3oX7K_oNxSm88wr0YZw&s=08"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  x.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://medium.com/@TheVedant"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Medium
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.bing.com/ck/a?!&&p=475e9ff389823af1JmltdHM9MTcxMTE1MjAwMCZpZ3VpZD0zYmIxZmQ2MC03MzhmLTY5YjYtMjhjMS1lOTU2NzIxNDY4NjImaW5zaWQ9NTIyMA&ptn=3&ver=2&hsh=3&fclid=3bb1fd60-738f-69b6-28c1-e95672146862&psq=discord&u=a1aHR0cHM6Ly9kaXNjb3JkLmNvbS8&ntb=1"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Discord
                </Link>
              </li>
            </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</footer>
<FitText/>
    </div>
  )
}
