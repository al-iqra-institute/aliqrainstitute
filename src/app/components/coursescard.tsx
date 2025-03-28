"use client";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Coursescard = ({ course }: { course: Course[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setItemsPerPage(5);
      } else if (screenWidth < 1024) {
        setItemsPerPage(7);
      } else {
        setItemsPerPage(9);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(course.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = course.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="max-w-[1100px] w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
          {displayedItems.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white"
            >
              <Link href={`/courses/${item.slug}`} className="block">
                {/* Image Section */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    width={600}
                    height={262}
                    className="w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Course Details */}
                <div className="p-4">
                  {/* Course Title with Hover Underline */}
                  <h3 className="text-lg font-semibold text-gray-800 hover:underline cursor-pointer">
                    {item.title}
                  </h3>

                  {/* Instructor Name */}
                  <p className="text-gray-600 text-sm mt-1">
                    By
                    <span className="font-medium text-blue-600">
                      {" "}
                      {item.instructor}
                    </span>
                  </p>

                  {/* Price Section */}
                  <p className="text-yellowCustom text-lg font-bold mt-2">
                    ${item.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          <button
            className="border px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-yellowh hover:text-white transition"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <MdKeyboardDoubleArrowLeft className="text-2xl" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`border px-4 py-2 rounded-lg transition ${
                currentPage === i + 1
                  ? "bg-yellowCustom text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="border px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-yellowh hover:text-white transition"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            <MdKeyboardDoubleArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coursescard;
