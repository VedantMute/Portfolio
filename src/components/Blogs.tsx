import React from 'react';
import { BackgroundCellAnimation } from './BackgroundRippleEffect';

export default function Blogs() {
  return (<>
  {/* <BackgroundCellAnimation/> */}
    <div className="bg-black text-white pt-11 pb-11 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-blue-400 after:rounded-full">
            LATEST BLOGS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
          <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://readymadeui.com/Imagination.webp"
              alt="Blog Post 1"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
              <span className="text-sm block text-gray-600 mb-2">
                10 FEB 2023 | BY JOHN DOE
              </span>
              <h3 className="text-xl font-bold">
                A Guide to Igniting Your Imagination
              </h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://readymadeui.com/hacks-watch.webp"
              alt="Blog Post 2"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
              <span className="text-sm block text-gray-600 mb-2">
                7 JUN 2023 | BY MARK ADAIR
              </span>
              <h3 className="text-xl font-bold">
                Hacks to Supercharge Your Day
              </h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://readymadeui.com/prediction.webp"
              alt="Blog Post 3"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
              <span className="text-sm block text-gray-600 mb-2">
                5 OCT 2023 | BY SIMON KONECKI
              </span>
              <h3 className="text-xl font-bold">
                Trends and Predictions
              </h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
