import { BackgroundBoxesDemo } from "@/components/BackgroundBoxesDemo";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";
import { NavbarDemo } from "@/components/NavbarDemo";
import { TextGenerateEffectDemo } from "@/components/TextGenerateEffectDemo";
import AboutMe from "@/components/AboutMe";
import ScreenFitText from "@/components/ScreenFitText";
// import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
export default function Home() {
  return (
    <div className="">
      {/* <Navbar/> */}
      <Navbar/>
      {/* <NavbarDemo/> */}
      <BackgroundBoxesDemo/>
      <AboutSection/>
      {/* <AboutMe/> */}
      
      <GoogleGeminiEffectDemo/>
    <Footer/>
    
    </div>
  );
}
