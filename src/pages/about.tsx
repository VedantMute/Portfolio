import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import 'tailwindcss/tailwind.css';

const About = () => {
  return (
    
        <div className="bg-black text-white">
          <Navbar/>
        <AboutSection/>
        <Footer/>
        </div>
     
  );
};

export default About;
