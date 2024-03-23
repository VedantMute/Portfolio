import { BackgroundBoxesDemo } from "@/components/BackgroundBoxesDemo";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ContactMe from "@/components/ContactMe";
export default function Home() {
  return (
    <div >
    <Navbar/>
    <BackgroundBoxesDemo/>
    <AboutSection/>      
    <GoogleGeminiEffectDemo/>
    <ContactMe/>
    <Footer/>
    
    </div>
  );
}
