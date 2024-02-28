import React from 'react';
import { TextGenerateEffectDemo } from './TextGenerateEffectDemo';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { StickyScrollRevealDemo } from './StickyScrollRevealDemo';
const words = `Hello! I'm Vedant Mute, an engineering student with a passion for technology. Proficient in web development, Java programming, and AI enthusiast with expertise in data science. Excited to innovate and create through code. 
`;
const AboutMe = () => {
  return (
    <>
    <div className="heading text-left mx-14 my-5 text-5xl py-5 border-b border-gray-700">About Me</div>
    <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
      <div style={{ flex: '0 0 50%' }}>
        {/* Left Div Content */}
        <img src="#" alt="" />
      </div>
      <div style={{ flex: '0 0 50%'}}>
        {/* Right Div Content */}
       <TextGenerateEffect words={words} />
        <div className="flex justify-between  mx-10 p-7">
        <div className="boxes p-7 border rounded-lg  border-gray-400"><div className='text-center text-5xl mb-2'>2</div><div className='text-center'>Internship</div></div>
        <div className="boxes p-7 border rounded-lg  border-gray-400"><div className='text-center text-5xl mb-2'>20+</div><div className='text-center'>Projects</div></div>
        <div className="boxes p-7 border rounded-lg  border-gray-400"><div className='text-center text-5xl mb-2'>2</div><div className='text-center'>yrs. Exp.</div></div>
       
        </div>
      </div>
    </div>
    {/* TECH STACK PAGE STARTS HERE */}
    <div className="heading text-left mx-14 my-5 text-5xl py-5 border-b border-gray-700">My Skills</div>
    <StickyScrollRevealDemo/>
    </>
  );
};

export default AboutMe;
