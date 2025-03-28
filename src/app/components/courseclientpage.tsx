"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star } from "lucide-react";
import Navbar from "@/app/components/navbar";
import { PortableText } from "@portabletext/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { urlFor } from "@/sanity/lib/image";

const CourseClientPage = ({ course }: { course: Course }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const relatedCourses = [
    { id: 1, title: "Quran Recitation", price: "$29.99" },
    { id: 2, title: "Tajweed Mastery", price: "$39.99" },
    { id: 3, title: "Islamic Studies", price: "$19.99" },
    { id: 4, title: "Seerah of Prophet", price: "$34.99" },
    { id: 5, title: "Hadith Studies", price: "$27.99" },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-28 mx-auto p-6 space-y-8">
        {/* Course Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-auto bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src={urlFor(course.image).url() || "/course-banner.jpg"}
              alt="Course"
              width={800}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold">{course.title}</h1>
            <p className="text-gray-600 text-sm md:text-base">
              {course.description ||
                "A detailed description of the course with key highlights."}
            </p>
            <div className="text-2xl font-semibold text-greenCustom">
              ${course.price}
            </div>
            <Button className="w-40">Enroll Now</Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 border-b pb-2 mt-6">
          {["overview", "lectures", "reviews"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-blue-500 font-semibold" : "text-gray-600"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Dynamic Content Based on Tab */}
        {activeTab === "overview" && (
          <div>
            <h2 className="text-2xl font-semibold">Course Overview</h2>
            <div className="text-gray-600 mt-2 text-sm md:text-base">
              <PortableText value={course.overview} />
            </div>
            {/* Instructor Name Section */}
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">
                Instructor:
              </h3>
              <p className="text-blue-600 font-medium">{course.instructor}</p>
            </div>
          </div>
        )}

        {activeTab === "lectures" && (
          <div>
            <h2 className="text-2xl font-semibold">Lectures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {["Introduction", "Basics", "Advanced Topics"].map(
                (lecture, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      Lecture {index + 1} - {lecture}
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h2 className="text-2xl font-semibold">Student Reviews</h2>
            <div className="flex items-center space-x-2 mt-2">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="text-yellow-500" />
              ))}
              <Star className="text-gray-300" />
              <span>(4.0)</span>
            </div>
            <p className="text-gray-600 mt-2">
              "This course was really helpful and informative!"
            </p>
          </div>
        )}

        {/* Related Courses Carousel */}
        <div>
          <h2 className="text-2xl font-semibold">Related Courses</h2>
          <Carousel className="mt-4">
            <CarouselContent className="flex">
              {relatedCourses.map((course) => (
                <CarouselItem
                  key={course.id}
                  className="w-full sm:basis-full md:basis-1/3 lg:basis-1/3"
                >
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <p className="text-gray-600">{course.price}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CourseClientPage;
