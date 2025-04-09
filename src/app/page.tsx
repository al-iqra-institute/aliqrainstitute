import HeroSection from "./components/herosection";
import AboutSection from "./components/aboutsection";
import Achievement from "./components/achievement";
import ServicesSection from "./components/servicessection";
import CounselingSection from "./components/counselingsection";
import VideoLibrarySection from "./components/explore";
import CoursesSection from "./components/signaturecourses";
import Navbar from "./components/navbar";
import Dailycontent from "./components/dailycontent";
import { client } from "@/sanity/lib/client";

// export default function Home() {
const Home = async () => {
  const query = `*[_type == "dailyContent"] | order(_updatedAt desc){
    hadeesArabic,
    hadeesTranslation,
    hadeesSource,
    ayatArabic,
    ayatTranslation,
    ayatSource,
    dailyQuote,
    quoteAuthor
  }`;

  const ayathadeesfinal = await client.fetch(query);
  const latest = ayathadeesfinal[0];
  console.log(ayathadeesfinal);

  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Achievement />
      <Dailycontent latest={latest} />
      <ServicesSection />
      <CounselingSection />
      <VideoLibrarySection />
      <CoursesSection />
    </div>
  );
};

export default Home;
