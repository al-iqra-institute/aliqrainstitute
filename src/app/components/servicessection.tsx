import React from "react";
import {
  Users,
  Globe,
  Lock,
  GraduationCap,
  HandHelping,
  BookOpen,
} from "lucide-react";

const Services = [
  {
    icon: GraduationCap,
    title: "Islamic Courses",
    description:
      "Explore our in-depth Islamic courses, crafted to enrich both knowledge and spirituality.",
  },
  {
    icon: Lock,
    title: "Accessible Education",
    description:
      "High-quality education made accessible with scholarships and competitive pricing.",
  },
  {
    icon: Users,
    title: "Counseling Services",
    description:
      "Uplifting communities through support, guidance, and a compassionate approach.",
  },
  {
    icon: HandHelping,
    title: "Welfare Initiatives",
    description:
      "Providing essential resources to empower communities through educational initiatives.",
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    description:
      "Access a wide range of videos and articles designed to inspire and educate.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description:
      "Connect with a global community of learners, united in the pursuit of authentic Islamic knowledge.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 text-center bg-white">
      <h1
        className="relative top-9 md:top-8 left-1/2 transform -translate-x-1/2 text-7xl 
          font-bold opacity-20 md:opacity-30 select-none"
        style={{ maskImage: "linear-gradient(to top, transparent, black)" }}
      >
        Growth
      </h1>
      <h2 className="relative text-4xl md:text-4xl font-bold font-sans z-10">
        Empowering Your Journey
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Services.map((service, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-6 bg-gray-100 rounded-lg shadow-md 
                transition-all duration-300 hover:shadow-lg group cursor-pointer"
          >
            <div
              className="relative flex items-center justify-center w-44 lg:w-40 h-20 rounded-[100%]
                transition-all duration-300 group-hover:bg-yellowh"
            >
              {React.createElement(service.icon, {
                className:
                  "w-12 h-12 text-yellowCustom transition-all duration-300 group-hover:text-white",
              })}
            </div>
            <div className="text-left">
              <h3
                className="text-base md:text-xl font-semibold transition-all duration-300 
                    group-hover:text-yellowh"
              >
                {service.title}
              </h3>
              <p className="text-gray-600 mt-1 text-xs md:text-base md:font-medium">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
