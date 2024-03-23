import React from 'react';
import { TextGenerateEffectDemo } from './TextGenerateEffectDemo';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { StickyScrollRevealDemo } from './StickyScrollRevealDemo';
const words = `Hello! I'm Vedant Mute, an engineering student with a passion for technology. Proficient in web development, Java programming, and AI enthusiast with expertise in data science. Excited to innovate and create through code. 
`;
const AboutMe = () => {
  return (
    <>
      
      <div className='mx-auto lg:max-w-screen-2xl'>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
        <div style={{ flex: '0 0 50%' }}>
          {/* Left Div Content */}
         
        </div>
        <div style={{ flex: '0 0 50%' }}>
          {/* Right Div Content */}
          <TextGenerateEffect words={words} />
          <div className="flex justify-between  mx-10 p-7">
            <div className='bg-gradient-to-b from-yellow-300  to-blue-500 p-[2px] rounded-lg'>
              <div className="boxes p-7  rounded-lg bg-black"><div className='text-center text-5xl mb-2'>2</div><div className='text-center'>Internship</div></div>
            </div>
            <div className='bg-gradient-to-b from-yellow-300 p-[2px] to-blue-500  rounded-lg'>
              <div className="boxes p-7  rounded-lg bg-black"><div className='text-center text-5xl mb-2'>10+</div><div className='text-center'>Projects</div></div>
            </div>
            <div className='bg-gradient-to-b from-yellow-300 p-[2px] to-blue-500  rounded-lg'>
              <div className="boxes p-7  rounded-lg bg-black"><div className='text-center text-5xl mb-2'>2</div><div className='text-center'>Years Exp.</div></div>
            </div>


          </div>
        </div>
      </div>
      {/* TECH STACK PAGE STARTS HERE */}
      <div className="heading text-left  my-5 text-5xl py-5 border-b mx-auto lg:max-w-7xl w-full border-gray-700">My Skills</div>
      <StickyScrollRevealDemo />
      </div>
    </>
  );
};

export default AboutMe;
