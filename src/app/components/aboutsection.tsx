import { MapPin, Monitor } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="relative w-full py-20 flex flex-col items-center">
      {/* Discover Card */}
      <div className="relative z-10 bg-black text-white md:pl-16 p-10 md:p-14 md:rounded-[40px] rounded-2xl max-w-5xl shadow-lg -mt-48 md:-mt-44 lg:-mt-56 w-[90%] md:w-[80%] lg:w-[80%]">
        <h2 className="text-2xl md:text-3xl font-normal font-serif">About</h2>
        <h1 className="text-2xl md:text-4xl font-bold mt-2">
          Discover Al-Iqra
        </h1>
        <p className="mt-4 md:pr-24 text-sm font-light md:text-lg md:font-normal">
          At Al-Iqra Institute, we are committed to making Islamic knowledge
          accessible through thoughtfully designed courses and events that
          combine traditional teachings with modern educational methods. Our
          mission is to nurture spiritual growth, empowering individuals to
          deepen their faith and lead purposeful lives.
        </p>
        <Link href={"/about"}>
          <button className="mt-6 px-5 py-2 rounded-xl md:py-4 bg-yellowCustom text-white md:rounded-2xl text-lg font-semibold flex items-center gap-2 hover:bg-yellowh">
            Discover More
          </button>
        </Link>
      </div>

      {/* Onsite & Online Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 md:mt-20 max-w-6xl px-6 w-[95%] md:w-[85%] lg:w-[75%]">
        <div className="bg-black text-white p-10 md:p-12 rounded-2xl shadow-lg flex flex-col items-center text-center w-full md:w-auto">
          <MapPin size={60} />
          <h2 className="text-4xl font-bold mt-4">Onsite</h2>
          <p className="mt-2 text-base md:text-lg">
            Programs and events with the complete in-person experience
          </p>
          <Link href={"/courses"}>
            <button className="mt-4 text-yellowCustom md:text-xl font-semibold flex items-center gap-2 hover:text-yellowh">
              Join Now →
            </button>
          </Link>
        </div>
        <div className="bg-black text-white p-10 md:p-12 rounded-2xl shadow-lg flex flex-col items-center text-center w-full md:w-auto">
          <Monitor size={60} />
          <h2 className="text-4xl font-bold mt-4">Online</h2>
          <p className="mt-2 text-base md:text-lg">
            Experience Iqra from the comfort of your home through our portal and
            programs
          </p>
          <Link href={"/courses"}>
            <button className="mt-4 text-yellowCustom md:text-xl font-semibold flex items-center gap-2 hover:text-yellowh">
              Join Now →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
