"use client";

import CountUp from "react-countup";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import ImageModal from "@/app/components/ImageModal";

const Achievement = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className="relative py-16 px-6 md:px-12 lg:px-5 
      bg-gradient-to-br from-greenCustom via- to-black
      backdrop-blur-3xl text-black"
    >
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          {/* Background "Journey" Text Above Our Achievement with Transparency Effect */}
          <h1
            className="absolute md:-top-8 -top-6 -left-0 md:left-16 text-5xl md:text-6xl 
            font-bold opacity-30 select-none"
            style={{ maskImage: "linear-gradient(to top, transparent, black)" }}
          >
            Journey
          </h1>
          <h2 className="relative text-3xl md:text-4xl font-black md:font-extrabold z-10 text-white">
            Our Achievement
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Alhamdulillah, Al-Iqra initiatives continue to grow to meet our
            community needs. As we strive to support those pursuing sacred
            knowledge and community welfare, we invite you to join us in making
            a meaningful impact.
          </p>
          <button
            onClick={openModal}
            className="mt-6 px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-slate-950"
          >
            Support Al-Iqra
          </button>
          <ImageModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
        <div
          ref={ref}
          className="grid grid-cols-2 gap-6 text-center text-2xl font-semibold"
        >
          <div>
            <p className="text-4xl font-bold text-white">
              <CountUp start={0} end={inView ? 100 : 0} duration={3} />+
            </p>
            <p className="text-lg text-gray-300">Countries</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">
              <CountUp start={0} end={inView ? 100 : 0} duration={3} />+
            </p>
            <p className="text-lg text-gray-300">Courses & Workshops</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">
              <CountUp start={0} end={inView ? 25 : 0} duration={3} />+
            </p>
            <p className="text-lg text-gray-300">Instructors</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">
              <CountUp start={0} end={inView ? 100000 : 0} duration={3} />+
            </p>
            <p className="text-lg text-gray-300">Students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
