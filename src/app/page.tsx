import { BackgroundBoxesDemo } from "@/components/BackgroundBoxesDemo";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";
import { NavbarDemo } from "@/components/NavbarDemo";
import { TextGenerateEffectDemo } from "@/components/TextGenerateEffectDemo";
import AboutMe from "@/components/AboutMe";
import ScreenFitText from "@/components/ScreenFitText";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-1560 mx-auto">
      <NavbarDemo/>
      <BackgroundBoxesDemo/>
      <AboutMe/>
      {/* <TextGenerateEffectDemo/> */}
      <GoogleGeminiEffectDemo/>
      {/* <ScreenFitText/> */}
    </div>
  );
}
