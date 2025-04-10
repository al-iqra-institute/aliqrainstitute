"use client";

import Image from "next/image";
import Navbar from "../components/navbar";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <section className=" py-12 pt-40 px-6  md:px-12">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl text-white font-serif font-bold text-primary">
              About Al Iqra
            </h2>
            <p className="mt-3 text-xl text-white font-semibold">
              It&apos;s Your Journey to the Quran and Islamic Studies
            </p>

            <p className="mt-3  text-white leading-relaxed">
              You can browse profiles of hand-picked online Quran teachers who
              teach Quran courses like Noorani Qaida, Quran Recitation, Tajweed,
              Quran memorization, and Arabic language. We also offer Islamic
              subjects like Hadith, Fiqh, Tafsir, Sirah, Aqidah, and Tareekh.
            </p>
            <Link href={"/contact"}>
              <button className="mt-6 bg-greenCustom text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellowh transition">
                Start Learning Now
              </button>
            </Link>
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

      <section className="relative bg-greenCustom py-16 px-6 md:px-12">
        <div className="container mx-auto text-center">
          {/* Decorative Top Border */}
          <div className="w-24 h-1 mx-auto bg-white rounded-full mb-4"></div>

          {/* Animated Heading */}
          <h2 className="text-4xl font-serif md:text-5xl  font-bold text-primary">
            What is Al Iqra?
          </h2>

          {/* Content Grid */}
          <div className="mt-8 grid grid-cols-1 text-sm md:grid-cols-2 gap-8 text-black">
            <p className="md:text-lg leading-relaxed border-l-4 border-l-white pl-4">
              The Holy Quran is the greatest book in the world and is the source
              of all kinds of knowledge. As a Muslim, it is obligatory for
              everyone to learn the Qur’an. Deeni Madrasa has made the journey
              of learning the Qur’an easier, ensuring Tarbiyah and Akhlaq
              alongside pure knowledge.
            </p>

            <p className="md:text-lg leading-relaxed border-l-4 border-l-white pl-4">
              Learn all essential subjects of Islam from qualified male and
              female scholars graduates of renowned Islamic institutions,
              carefully selected for their knowledge and character.
            </p>
          </div>

          {/* Closing Statement with Border */}
          <p className="mt-6 text-lg font-semibold text-black border-t-2 border-white pt-4">
            Welcome to Al Iqra: Your journey to Quranic, Arabic, and Islamic
            excellence.
          </p>
        </div>
      </section>

      <div className="md:pl-12 bg-cover bg-center py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl text-white md:text-3xl font-bold text-primary">
              Follow us for Daily Islamic Quotes &amp; Updates
            </h2>

            <p className="text-white mt-2">
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
            <button className="w-full md:w-auto bg-greenCustom text-white px-8 py-3 rounded-lg shadow-md hover:bg-yellowh transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
