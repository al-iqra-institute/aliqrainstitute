"use client";

import Image from "next/image";
import Link from "next/link";

const CounselingSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#F8F7F7] flex flex-col md:flex-row items-center gap-8">
      {/* Text Content */}
      <div className="md:w-1/2 md:text-left">
        {/* Background "Counseling" Text Above Support for Personal Growth */}
        <h1
          className="relative top-7 -left-0 md:left-16 text-7xl md:text-6xl 
            font-bold opacity-30 select-none"
          style={{ maskImage: "linear-gradient(to top, transparent, black)" }}
        >
          Counseling
        </h1>
        <h2 className="relative text-center md:text-left text-3xl md:text-4xl font-bold z-10 font-sans">
          Support for Personal Growth
        </h2>
        <p className="mt-4 text-gray-600 text-xs md:text-lg">
          Offering compassionate guidance to help you overcome challenges, and
          achieve personal and spiritual well-being.
        </p>
        {/* Button - Mobile pe center ho use  "justify-center" */}
        <div className="mt-6 md:mt-4 flex md:block">
          <Link href={"/counseling/#convay"}>
            <button className="px-6 py-3 bg-yellowCustom text-white font-semibold rounded-lg shadow-md hover:bg-yellowh transition">
              Schedule a Session
            </button>
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        <Image
          src={"/support for growth.jpg"}
          alt="Counseling Session"
          className="rounded-lg shadow-lg"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
};

export default CounselingSection;
