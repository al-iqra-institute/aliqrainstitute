"use client";
import React, { useState } from "react";
import {
  Users,
  Globe,
  Lock,
  GraduationCap,
  HandHelping,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import ImageModal from "./ImageModal"; // 👈 Make sure path is correct

const Services = [
  {
    icon: GraduationCap,
    title: "Islamic Courses",
    description:
      "Explore our in-depth Islamic courses, crafted to enrich both knowledge and spirituality.",
    link: "/courses",
  },
  {
    icon: Lock,
    title: "Accessible Education",
    description:
      "High-quality education made accessible with scholarships and competitive pricing.",
    link: "https://wa.me/923272495380",
  },
  {
    icon: Users,
    title: "Counseling Services",
    description:
      "Uplifting communities through support, guidance, and a compassionate approach.",
    link: "/counseling",
  },
  {
    icon: HandHelping,
    title: "Welfare Initiatives",
    description:
      "Providing essential resources to empower communities through educational initiatives.",
    link: "", // handled via modal
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    description:
      "Access a wide range of videos and articles designed to inspire and educate.",
    link: "https://whatsapp.com/channel/0029VaxNRkI84OmD0EY3f51c",
  },
  {
    icon: Globe,
    title: "Global Community",
    description:
      "Connect with a global community of learners, united in the pursuit of authentic Islamic knowledge.",
    link: "https://www.instagram.com/ustaza_kanwal_qadriya?igsh=anh6dmQyeXJkNHRr",
  },
];

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (service) => {
    if (service.title === "Welfare Initiatives") {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="py-16 bg-black text-white px-6 md:px-12 lg:px-24 text-center ">
      <h1
        className="relative top-9 md:top-8 left-1/2 transform -translate-x-1/2 text-7xl 
          font-bold opacity-20 md:opacity-30 select-none"
        style={{ maskImage: "linear-gradient(to top, transparent, black)" }}
      >
        Growth
      </h1>
      <h2 className="relative text-4xl text-greenCustom md:text-4xl font-bold font-sans z-10">
        Empowering Your Journey
      </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Services.map((service, index) => {
          const cardContent = (
            <div
              onClick={() => handleClick(service)}
              className="flex items-center space-x-4 p-6 bg-greenCustom rounded-lg shadow-md 
              transition-all duration-300 hover:shadow-lg group cursor-pointer text-white"
            >
              <div
                className="relative flex items-center justify-center w-44 lg:w-40 h-20 rounded-[100%]
                transition-all duration-300 group-hover:bg-black"
              >
                {React.createElement(service.icon, {
                  className:
                    "w-12 h-12 text-black transition-all duration-300 group-hover:text-white",
                })}
              </div>
              <div className="text-left">
                <h3 className="text-base md:text-xl font-semibold group-hover:text-black">
                  {service.title}
                </h3>
                <p className="text-white mt-1 text-xs md:text-base md:font-medium">
                  {service.description}
                </p>
              </div>
            </div>
          );

          // Welfare: show modal
          if (service.title === "Welfare Initiatives") {
            return <div key={index}>{cardContent}</div>;
          }

          // External links
          if (service.link.startsWith("http")) {
            return (
              <Link
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                {cardContent}
              </Link>
            );
          }

          // Internal Next.js route
          return (
            <Link href={service.link} key={index}>
              {cardContent}
            </Link>
          );
        })}
      </div>

      {/* 👇 Modal */}
      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ServicesSection;
