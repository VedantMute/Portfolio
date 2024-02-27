import React from 'react';
import { TextGenerateEffectDemo } from './TextGenerateEffectDemo';
import { TextGenerateEffect } from './ui/text-generate-effect';
const words = `Hello! I'm Vedant Mute, an engineering student with a passion for technology. Proficient in web development, Java programming, and AI enthusiast with expertise in data science. Excited to innovate and create through code. 
`;
const AboutMe = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ flex: '0 0 50%' }}>
        {/* Left Div Content */}
        My Profile pic
      </div>
      <div style={{ flex: '0 0 50%' }}>
        {/* Right Div Content */}
       <TextGenerateEffect words={words} />

      </div>
    </div>
  );
};

export default AboutMe;
