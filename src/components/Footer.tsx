import React from 'react'
import FitText from './FitText'

export default function Footer() {
  return (
    <div>
     
      <footer className="bg-dark" aria-labelledby="footer-heading">
  <h2 id="footer-heading" className="sr-only">
    Footer
  </h2>
  <div className="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-12 lg:px-20">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="xl:col-span-1">
        <a
          href="/"
          className="text-lg font-bold tracking-tighter transition duration-500 ease-in-out transform text-black tracking-relaxed lg:pr-8"
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
        <p className="w-1/2 mt-2 text-sm text-gray-500">Unwrapped your mind</p>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="font-semibold leading-6 uppercase text-black">
              Solutions
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Commerce
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Insights
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="font-semibold leading-6 uppercase text-black">
              Support
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Alpine.js
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  API Status
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:justify-end md:grid md:grid-cols-1">
          <div className="w-full mt-12 md:mt-0">
            <div className="mt-8 lg:justify-end xl:mt-0">
              <h3 className="font-semibold leading-6 uppercase text-black">
                Subscribe to our newsletter
              </h3>
              <p className="mt-4 text-sm font-light text-gray-500 lg:ml-auto">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <div className="inline-flex items-center gap-2 mt-12 list-none lg:ml-auto">
                <form
                  className="flex flex-col items-center justify-center max-w-sm mx-auto"
                  action=""
                >
                  <div className="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                    <input
                      name="email"
                      type="email"
                      className="block w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50"
                      placeholder="Enter your email..."
                     
                    />
                    <button
                      type="button"
                      className="items-center inline-flex  justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                    >
                      <div style={{ position: "relative" }} />
                      Subscribe{/* */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-auto ml-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="px-5 py-12 mx-auto border-t max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
    <div className="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
      <span className="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
        <a className="w-6 h-6 transition fill-black hover:text-blue-500">
          <span className="sr-only"> github</span>
          
        </a>
        <a className="w-6 h-6 transition fill-black hover:text-blue-500">
          <span className="sr-only"> twitter</span>
          
        </a>
        <a className="w-6 h-6 transition fill-black hover:text-blue-500">
          <span className="sr-only">Instagram</span>
          
        </a>
        <a className="w-6 h-6 transition fill-black hover:text-blue-500">
          <span className="sr-only">Linkedin</span>
         
        </a>
      </span>
    </div>
    <div className="mt-8 md:mt-0 md:order-1">
      
    </div>
  </div>
</footer>
<FitText/>
    </div>
  )
}
