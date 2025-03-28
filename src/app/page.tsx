import Image from "next/image";
import HeroSection from "./components/herosection";
import AboutSection from "./components/aboutsection";
import Achievement from "./components/achievement";
import ServicesSection from "./components/servicessection";
import CounselingSection from "./components/counselingsection";
import VideoLibrarySection from "./components/explore";
import CoursesSection from "./components/signaturecourses";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Achievement />
      <ServicesSection />
      <CounselingSection />
      <VideoLibrarySection />
      <CoursesSection />
    </div>
  );
}
