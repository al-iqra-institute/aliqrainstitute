"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const images = [
  "/explore1.png",
  "/explore2.png",
  "/explore3.png",
  "/explore4.png",
];

const VideoLibrarySection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white text-center">
      <p className="text-yellowCustom font-semibold italic text-lg md:text-xl">
        Inspiring Video Library
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">Explore</h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-xs md:text-base">
        Dive into a collection of insightful videos that provide knowledge, and
        practical guidance for learners of all levels.
      </p>

      {/* Slider Section */}
      <div className="mt-8">
        <Slider {...settings} className="w-full">
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Watch Now Button */}

      <button
        onClick={() =>
          window.open(
            "https://www.youtube.com/@AlIqra",
            "_blank",
            "noopener,noreferrer"
          )
        }
        className="mt-6 px-6 py-3 bg-yellowCustom text-white font-semibold rounded-md shadow-md transition hover:bg-yellowh"
      >
        Watch Now
      </button>
    </section>
  );
};

export default VideoLibrarySection;
