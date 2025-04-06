"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { FaYoutube, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b font-serif from-greenCustom to-black  text-white py-10 px-8 md:px-16 lg:px-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <Image src="/logo.png" alt="Al Midrar Logo" width={160} height={60} />
          <h3 className="text-xl font-semibold mt-2 lg:text-xl">About us</h3>
          <p className="text-base mt-3">
            At Al-Iqra Institute, we provide accessible Islamic knowledge
            through courses and events that blend tradition with modern
            learning.
          </p>
          <div className="flex space-x-6 mt-6">
            <Link
              href={
                "https://www.facebook.com/share/15koQxy1Bb/?mibextid=qi2Omg"
              }
            >
              <SiFacebook className="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-400" />
            </Link>
            <Link
              href={
                "https://www.instagram.com/aliqrainstitute5?utm_source=qr&igsh=MjhyYjh2cDRsemxw"
              }
            >
              <SiInstagram className="w-6 h-6 text-pink-500 cursor-pointer hover:text-pink-400" />
            </Link>
            <Link
              href={"https://youtube.com/@aliqrainstitute?si=_sdxZp2A8yMgk8fX"}
            >
              <FaYoutube className="w-6 h-6 text-red-500 hover:text-red-700 cursor-pointer" />
            </Link>
            <Link href={"https://t.me/AlIqrainstitute123"}>
              <FaTelegramPlane className="w-6 h-6 text-blue-500 hover:text-blue-700 cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Quick Links Section (Visible on large screens) */}
        <div className="hidden lg:block ml-10">
          <h3 className="text-xl lg:text-xl font-semibold">Quick Links</h3>
          <ul className="mt-9 lg:text-lg space-y-5 text-base">
            {[
              "Home",
              "Courses",
              "Instructors",
              "Counselling",
              "Welfare",
              "FAQs",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="hover:underline"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses Section */}
        <div className="hidden md:block">
          <h3 className="text-xl font-semibold lg:text-xl">Courses</h3>
          <ul className="mt-9 lg:text-lg space-y-5 text-base">
            {[
              "Islamic Knowledge",
              "Advisory & Mentorship",
              "Skill Development",
              "Counselling",
              "Online Business",
              "Video Creation",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="hover:underline"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold lg:text-xl">Contact us</h3>
          <div className="mt-9 lg:text-lg space-y-5 text-base">
            <p className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-green-500" />{" "}
              <span>+92 327-2495380</span>
            </p>
            <p className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-red-500" />{" "}
              <span className="text-base w-[100%]">
                aliqrainstitute01@gmail.com
              </span>
            </p>
            <p className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-yellow-500" />
              <span className="text-sm w-[100%]">
                Frere Market, Akbar Road, Rambagh Quarter Rambagh Quarters,
                Karachi, Pakistan
              </span>
            </p>
          </div>
          <div className="mt-6 flex items-center bg-gray-100 rounded-full overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-black outline-none bg-transparent text-base"
            />
            <button className="bg-yellowCustom px-6 py-3 rounded-full hover:bg-yellowh transition">
              <Mail className="text-white w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-600 pt-6">
        &copy; 2025 aliqrainstitute.com | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
