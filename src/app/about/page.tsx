"use client";

import Image from "next/image";
import Navbar from "../components/navbar";

const Page = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 py-12 mt-24 px-6  md:px-12">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-serif font-bold text-primary">
              About Al Iqra
            </h2>
            <p className="mt-3 text-xl text-gray-700 font-semibold">
              It's Your Journey to the Quran and Islamic Studies
            </p>
            <p className="mt-3  text-gray-600 leading-relaxed">
              You can browse profiles of hand-picked online Quran teachers who
              teach Quran courses like Noorani Qaida, Quran Recitation, Tajweed,
              Quran memorization, and Arabic language. We also offer Islamic
              subjects like Hadith, Fiqh, Tafsir, Sirah, Aqidah, and Tareekh.
            </p>
            <button className="mt-6 bg-yellowCustom text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellowh transition">
              Start Learning Now
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={"/about1.png"}
              alt="Islamic Books"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-12">
        <div className="container mx-auto text-center">
          {/* Decorative Top Border */}
          <div className="w-24 h-1 mx-auto bg-yellowCustom rounded-full mb-4"></div>

          {/* Animated Heading */}
          <h2 className="text-4xl font-serif md:text-5xl  font-bold text-primary">
            What is Al Iqra?
          </h2>

          {/* Content Grid */}
          <div className="mt-8 grid grid-cols-1 text-sm md:grid-cols-2 gap-8 text-gray-700">
            <p className="md:text-lg leading-relaxed border-l-4 border-yellowCustom pl-4">
              The Holy Quran is the greatest book in the world and is the source
              of all kinds of knowledge. As a Muslim, it is obligatory for
              everyone to learn the Qur’an. Deeni Madrasa has made the journey
              of learning the Qur’an easier, ensuring Tarbiyah and Akhlaq
              alongside pure knowledge.
            </p>

            <p className="md:text-lg leading-relaxed border-l-4 border-yellowCustom pl-4">
              In addition, you will be able to learn all the subjects of Islam
              from graduate scholars Lorem ipsum dolor sit amet consectetur
              adipisicing elit. of higher Islamic institutions. These are the
              male and female teachers we have hand-picked for you.
            </p>
          </div>

          {/* Closing Statement with Border */}
          <p className="mt-6 text-lg font-semibold text-gray-800 border-t-2 border-yellowCustom pt-4">
            Welcome to Al Iqra: Your journey to Quranic, Arabic, and Islamic
            excellence.
          </p>
        </div>
      </section>

      <div className="md:pl-12 bg-cover bg-center py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Follow us for Daily Islamic Quotes & Updates
            </h2>
            <p className="text-gray-700 mt-2">
              Subscribe to our News Letter for a daily dose of spiritual
              enrichment.
            </p>
          </div>

          {/* Right Side - Input & Button Section */}
          <div className="md:w-1/2 flex flex-col md:flex-row items-center gap-3 md:gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:w-2/3 px-4 py-3 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5A2D0C]"
            />
            <button className="w-full md:w-auto bg-yellowCustom text-white px-8 py-3 rounded-lg shadow-md hover:bg-yellowh transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
