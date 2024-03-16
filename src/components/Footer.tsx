import React from 'react'
import FitText from './FitText'

export default function Footer() {
  return (
    <div>
     
      <footer className="bg-slate-950" aria-labelledby="footer-heading">

  <div className="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-12 lg:px-20">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="xl:col-span-1">
        <a
          href="/"
          className="text-lg font-bold tracking-tighter transition duration-500 ease-in-out transform text-gray-500 tracking-relaxed lg:pr-8"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 232 232"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M166.524 51.4683L116.367 101.625L65.5235 51.4683L116.367 0.62434L166.524 51.4683ZM231.11 116.054L180.953 166.898L130.796 116.054L180.953 65.8969L231.11 116.054ZM101.939 116.054L51.0948 166.898L0.250934 116.054L51.0948 65.8969L101.939 116.054ZM166.524 181.326L116.367 231.483L65.5235 181.326L116.367 130.482L166.524 181.326Z"
              fill="#0c0c0c"
            />
          </svg>{" "}
        </a>
        <p className="w-1/2 mt-2 text-sm text-gray-500">Unwrapped your mind! <br /><span className="bg-indigo-50 dark:bg-gray-900 dark:text-indigo-300 inline-block border border-dashed border-indigo-600  ">Beta Version 0.0.7</span></p>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="font-bold leading-6 uppercase text-gray-500">
              Page
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="font-semibold leading-6 uppercase text-gray-500">
              Visit
            </h3>
            <ul role="list" className="mt-4   md:gap-8 space-y-3">
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Google Cloud Profile
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  About Site
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  SiteMap
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:justify-end md:grid md:grid-cols-1">
          <div className="w-full mt-12 md:mt-0">
            <div className="mt-8 lg:justify-end xl:mt-0">
              <h3 className="font-semibold leading-6 uppercase text-gray-500">
                FIND ME ON
              </h3>
              <ul role="list" className="mt-4 space-y-3">
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  x.com
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Medium
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Discord
                </a>
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
