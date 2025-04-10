import CounselingForm from "@/app/components/counselingform";
import Navbar from "@/app/components/navbar";
import Link from "next/link";

const CounselingPage = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-greenCustom  text-white pb-20 pt-40 px-4 text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">
          Islamic Counseling Services
        </h1>
        <p className="mt-3 text-sm md:text-lg max-w-2xl mx-auto">
          Seek guidance and inner peace through Islamic teachings and
          professional counseling.
        </p>

        <Link href={"#convay"}>
          <button className="mt-6 bg-black hover:cursor-pointer px-6 py-2 md:px-8 md:py-3 rounded-lg text-white font-semibold hover:bg-gray-900 transition shadow-md cursor-pointer ">
            Book a Session
          </button>
        </Link>
      </section>

      {/* New Stylish Services Section */}
      <div className="container mx-auto py-12 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center">
          Our Counseling Services
        </h2>
        <p className="text-center text-xs md:text-base mt-2 max-w-xl mx-auto">
          We offer Islamic guidance on various aspects of life including mental
          health, relationships, and spiritual well-being.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-greenCustom p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-black">Mental Health</h3>
            <p className="mt-2">
              Find peace and clarity with our faith-based mental health
              guidance.
            </p>
          </div>
          <div className="bg-greenCustom p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-black">
              Marriage & Family
            </h3>
            <p className=" mt-2">
              Strengthen your family bonds with Islamic counseling.
            </p>
          </div>
          <div className="bg-greenCustom p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-black">
              Spiritual Guidance
            </h3>
            <p className=" mt-2">
              Deepen your connection with Allah through personalized guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Testimonials Section */}
      <div className="bg-greenCustom py-12 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <p className="text-white italic">
              “This counseling has transformed my life. Alhamdulillah, I found
              the peace I was searching for.”
            </p>
            <p className="mt-4 font-semibold text-greenCustom">
              - A Grateful Client
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <p className="text-white italic">
              “The Islamic perspective truly made a difference in my personal
              struggles. Highly recommended.”
            </p>
            <p className="mt-4 font-semibold text-greenCustom">
              - Another Happy Client
            </p>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div id="convay" className="container mx-auto py-12 px-4 md:px-6">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="text-2xl md:text-3xl text-greenCustom font-semibold text-center">
            Book a Counseling Session
          </h2>
          <CounselingForm />
        </div>
      </div>

      {/* Quranic Ayah Section */}
      <section className="bg-gray-200 py-10 text-center px-4">
        <h2 className="text-2xl text-black md:text-3xl font-semibold">
          Quranic Wisdom
        </h2>
        <p className="mt-3 italic text-base md:text-lg text-gray-700">
          “And We have certainly created man and We know what his soul whispers
          to him, and We are closer to him than [his] jugular vein.” - (Quran
          50:16)
        </p>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 text-black space-y-4">
          <details className="bg-white p-4 rounded-lg shadow-md group transition-all duration-300">
            <summary className="font-semibold cursor-pointer group-open:text-greenCustom">
              How can I book a session?
            </summary>
            <p className="mt-2 text-gray-700 text-sm md:text-base group-open:animate-fadeIn">
              You can book a session by filling out the form above or contacting
              us via email.
            </p>
          </details>

          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold cursor-pointer">
              Is my information kept confidential?
            </summary>
            <p className="mt-2 text-gray-700 text-sm md:text-base">
              Yes, all your details remain strictly confidential as per our
              privacy policy.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold cursor-pointer">
              Are these sessions free?
            </summary>
            <p className="mt-2 text-gray-700 text-sm md:text-base">
              Some sessions are free while others may have a minimal charge.
              Contact us for more details.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default CounselingPage;
