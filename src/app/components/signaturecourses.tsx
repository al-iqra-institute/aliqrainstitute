"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const courses = [
  {
    id: 1,
    title: "Uloom ul Quran",
    instructor: "Kanwal Qadriya",
    image: "/tajweed_course.jpg",
    instructorImage: "/logo.png",
    link: "/courses/uloom-ul-quran",
  },
  {
    id: 2,
    title: "DRS E NIZAMI",
    instructor: "Ume Noman",
    image: "/ALIQRAA_DRS_E_NIZAMI.jpg",
    instructorImage: "/logo.png",
    link: "/courses/art-of-war",
  },
  {
    id: 3,
    title: "Uloom ul Quran",
    instructor: "Ume Noman",
    image: "/Ulum_ul.jpg",
    instructorImage: "/logo.png",
    link: "/courses/diploma-arabic-language",
  },
  {
    id: 4,
    title: "Diploma Arabic Language",
    instructor: "MARIA QADRIA",
    image: "/Diploma_Arabic.jpg",
    instructorImage: "/logo.png",
    link: "/courses/tafseer-ul-quran",
  },
  {
    id: 5,
    title: "Quran Memorization",
    instructor: "SHABANA QADRIA",
    image: "/quran_memorization.jpg",
    instructorImage: "/logo.png",
    link: "/courses/hadith-studies",
  },
];

const CoursesSlider = () => {
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
      <h2 className="text-3xl md:text-4xl font-bold">
        Explore Our Signature Courses
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
        Discover a diverse selection of courses designed to elevate your skills
        and knowledge, tailored for learners at every level.
      </p>

      <Slider {...settings} className="mt-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="px-4 cursor-pointer"
            onClick={() => router.push(course.link)}
          >
            <Image
              src={course.image}
              alt={course.title}
              width={400}
              height={250}
              className="rounded-lg shadow-md w-full h-48"
            />
            <div className="flex justify-center -mt-6">
              <Image
                src={course.instructorImage}
                alt={course.instructor}
                width={50}
                height={50}
                className="rounded-full border-4 border-white shadow-md"
              />
            </div>
            <p className="font-semibold mt-2">{course.instructor}</p>
            <h3 className="text-lg font-bold">{course.title}</h3>
          </div>
        ))}
      </Slider>

      <button className="mt-6 px-6 py-3 bg-yellowCustom text-white font-semibold rounded-md shadow-md transition hover:bg-yellowh">
        View All Courses
      </button>
    </section>
  );
};

export default CoursesSlider;
