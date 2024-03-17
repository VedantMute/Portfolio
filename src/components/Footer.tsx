import React from 'react'
import FitText from './FitText'
import Link from "next/link";
export default function Footer() {
  return (
    <div>
     
      <footer className="bg-slate-950" aria-labelledby="footer-heading">

  <div className="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-12 lg:px-20">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="xl:col-span-1">
        <Link
          href="/"
          className="text-lg font-bold tracking-tighter transition duration-500 ease-in-out transform text-gray-500 tracking-relaxed lg:pr-8"
        >
         <svg width="111" height="48" viewBox="0 0 708 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M196.978 9.03552L237.268 18.8028L265.025 45.0723L163.047 237.633L95 201.596L196.978 9.03552Z" fill="#EBF765"/>
<g filter="url(#filter0_d_1_6)">
<path d="M0 111.305L40.5 92.725L61.4169 64.8623L180.5 206.225L164 238.127L95.902 238.127L0 111.305Z" fill="white"/>
<path d="M96.1508 237.627L0.774247 111.5L40.7085 93.1795L40.8237 93.1266L40.8999 93.0252L61.4394 65.6651L179.903 206.292L163.696 237.627L96.1508 237.627Z" stroke="url(#paint0_linear_1_6)" stroke-opacity="0.18"/>
</g>
<path d="M258.983 239.227C253.307 239.227 248.411 237.974 244.294 235.469C240.203 232.938 237.045 229.409 234.821 224.884C232.622 220.332 231.523 215.04 231.523 209.006C231.523 202.972 232.622 197.653 234.821 193.051C237.045 188.423 240.139 184.818 244.102 182.236C248.091 179.628 252.744 178.324 258.062 178.324C261.131 178.324 264.161 178.835 267.152 179.858C270.143 180.881 272.866 182.543 275.321 184.844C277.776 187.119 279.732 190.136 281.189 193.895C282.646 197.653 283.375 202.281 283.375 207.778V211.614H237.966V203.79H274.17C274.17 200.466 273.506 197.5 272.176 194.892C270.872 192.284 269.006 190.226 266.577 188.717C264.173 187.209 261.335 186.455 258.062 186.455C254.457 186.455 251.338 187.349 248.705 189.139C246.097 190.903 244.089 193.205 242.683 196.043C241.277 198.881 240.574 201.923 240.574 205.17V210.386C240.574 214.835 241.341 218.607 242.875 221.7C244.435 224.768 246.595 227.108 249.357 228.719C252.118 230.304 255.327 231.097 258.983 231.097C261.361 231.097 263.509 230.764 265.426 230.099C267.369 229.409 269.044 228.386 270.45 227.031C271.857 225.651 272.943 223.937 273.71 221.892L282.455 224.347C281.534 227.312 279.987 229.92 277.814 232.17C275.641 234.395 272.956 236.134 269.76 237.386C266.564 238.614 262.972 239.227 258.983 239.227ZM319.388 239.227C314.479 239.227 310.145 237.987 306.386 235.507C302.628 233.001 299.688 229.473 297.565 224.922C295.443 220.345 294.382 214.938 294.382 208.699C294.382 202.511 295.443 197.142 297.565 192.591C299.688 188.04 302.641 184.524 306.425 182.044C310.209 179.564 314.581 178.324 319.541 178.324C323.376 178.324 326.406 178.963 328.631 180.241C330.881 181.494 332.594 182.926 333.77 184.537C334.972 186.122 335.905 187.426 336.57 188.449H337.337V159.455H346.388V238H337.643V228.949H336.57C335.905 230.023 334.959 231.378 333.732 233.014C332.504 234.625 330.753 236.07 328.477 237.348C326.202 238.601 323.172 239.227 319.388 239.227ZM320.615 231.097C324.246 231.097 327.314 230.151 329.82 228.259C332.325 226.341 334.23 223.695 335.534 220.32C336.838 216.919 337.49 212.994 337.49 208.545C337.49 204.148 336.851 200.3 335.572 197.001C334.294 193.678 332.402 191.095 329.896 189.254C327.391 187.388 324.297 186.455 320.615 186.455C316.78 186.455 313.584 187.439 311.027 189.408C308.496 191.351 306.591 193.997 305.312 197.347C304.06 200.67 303.433 204.403 303.433 208.545C303.433 212.739 304.072 216.548 305.351 219.974C306.655 223.375 308.572 226.085 311.104 228.105C313.661 230.099 316.831 231.097 320.615 231.097ZM381.557 239.381C377.824 239.381 374.436 238.678 371.393 237.271C368.351 235.839 365.935 233.781 364.145 231.097C362.355 228.386 361.46 225.114 361.46 221.278C361.46 217.903 362.125 215.168 363.455 213.071C364.784 210.949 366.561 209.287 368.786 208.085C371.01 206.884 373.464 205.989 376.149 205.401C378.859 204.787 381.582 204.301 384.318 203.943C387.898 203.483 390.8 203.138 393.024 202.908C395.274 202.652 396.911 202.23 397.933 201.642C398.982 201.054 399.506 200.031 399.506 198.574V198.267C399.506 194.483 398.47 191.543 396.399 189.446C394.354 187.349 391.247 186.301 387.08 186.301C382.759 186.301 379.371 187.247 376.916 189.139C374.462 191.031 372.736 193.051 371.739 195.199L363.148 192.131C364.682 188.551 366.727 185.764 369.284 183.77C371.866 181.75 374.679 180.344 377.722 179.551C380.79 178.733 383.807 178.324 386.773 178.324C388.665 178.324 390.838 178.554 393.293 179.014C395.773 179.449 398.163 180.357 400.464 181.737C402.791 183.118 404.722 185.202 406.256 187.989C407.79 190.776 408.557 194.509 408.557 199.188V238H399.506V230.023H399.045C398.432 231.301 397.409 232.669 395.977 234.126C394.545 235.584 392.641 236.824 390.263 237.847C387.885 238.869 384.983 239.381 381.557 239.381ZM382.938 231.25C386.517 231.25 389.534 230.547 391.989 229.141C394.469 227.734 396.335 225.919 397.588 223.695C398.866 221.47 399.506 219.131 399.506 216.676V208.392C399.122 208.852 398.278 209.274 396.974 209.658C395.696 210.016 394.213 210.335 392.526 210.616C390.864 210.872 389.24 211.102 387.655 211.307C386.095 211.486 384.83 211.639 383.858 211.767C381.506 212.074 379.307 212.572 377.261 213.263C375.241 213.928 373.605 214.937 372.352 216.293C371.125 217.622 370.511 219.437 370.511 221.739C370.511 224.884 371.675 227.261 374.001 228.872C376.354 230.457 379.332 231.25 382.938 231.25ZM434.128 202.562V238H425.077V179.091H433.821V188.295H434.588C435.969 185.304 438.066 182.901 440.878 181.085C443.691 179.244 447.321 178.324 451.77 178.324C455.759 178.324 459.249 179.142 462.24 180.778C465.232 182.389 467.559 184.844 469.221 188.142C470.882 191.415 471.713 195.557 471.713 200.568V238H462.662V201.182C462.662 196.554 461.461 192.949 459.057 190.366C456.654 187.759 453.355 186.455 449.162 186.455C446.273 186.455 443.691 187.081 441.415 188.334C439.165 189.587 437.388 191.415 436.084 193.818C434.78 196.222 434.128 199.136 434.128 202.562ZM513.872 179.091V186.761H483.344V179.091H513.872ZM492.241 164.977H501.293V221.125C501.293 223.682 501.663 225.599 502.405 226.878C503.172 228.131 504.143 228.974 505.32 229.409C506.521 229.818 507.787 230.023 509.116 230.023C510.114 230.023 510.932 229.972 511.571 229.869C512.21 229.741 512.722 229.639 513.105 229.562L514.946 237.693C514.332 237.923 513.476 238.153 512.376 238.384C511.277 238.639 509.884 238.767 508.196 238.767C505.639 238.767 503.134 238.217 500.679 237.118C498.25 236.018 496.23 234.344 494.619 232.094C493.034 229.844 492.241 227.006 492.241 223.58V164.977Z" fill="white"/>
<defs>
<filter id="filter0_d_1_6" x="0" y="54.8623" width="191.5" height="183.265" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="8" dy="-7"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_6"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_6" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1_6" x1="34.5846" y1="85.1527" x2="155.261" y2="244.736" gradientUnits="userSpaceOnUse">
<stop stop-color="#8E8282"/>
<stop offset="0.26" stop-color="#7D7171"/>
<stop offset="1" stop-color="#140606"/>
</linearGradient>
</defs>
</svg>
{" "}
        </Link>
        <p className="w-1/2 mt-2 text-sm text-gray-500">Unwrapped your mind! <br /><span className="bg-indigo-50 dark:bg-gray-900 dark:text-indigo-300 inline-block border border-dashed border-indigo-600  px-2 ">Beta Version 0.0.11</span></p>
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
                  href="https://www.cloudskillsboost.google/"
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
          <div className="w-full mt-12 md:mt-0">
            <div className="mt-8 lg:justify-end xl:mt-0">
              <h3 className="font-semibold leading-6 uppercase text-gray-500">
                FIND ME ON
              </h3>
              <ul role="list" className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  x.com
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Medium
                </Link>
              </li>
              <li>
                <Link
                  href="/"
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
