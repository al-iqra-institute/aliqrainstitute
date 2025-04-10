"use client"; // Ab ye sirf client component hai

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % blogs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [blogs.length]);

  return (
    <div>
      {/* Featured Blog Carousel */}
      <Carousel>
        <CarouselContent className="transition-transform ease-in-out duration-500">
          {blogs.slice(0, 3).map((blog, index) => (
            <CarouselItem
              key={blog.slug}
              className={index === currentSlide ? "block" : "hidden"}
            >
              <div className="relative w-full h-80 rounded-lg overflow-hidden group">
                {/* Blog Image with Zoom Effect */}
                <Image
                  src={urlFor(blog.coverImage).url()}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="w-full cursor-pointer h-full object-cover rounded-lg transform transition-all duration-300 ease-in-out group-hover:scale-105"
                />

                {/* Blog Content with Hover Effects */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-6 text-white transition-all duration-300 ease-in-out group-hover:bg-opacity-70">
                  <h2 className="text-xl cursor-pointer font-bold transition-all duration-300 ease-in-out group-hover:text-yellowh">
                    {blog.title}
                  </h2>
                  <p className="text-sm">{blog.excerpt}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Recent Blogs Section */}
      <h2 className="text-2xl text-white py-3 font-semibold">
        Recent Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.slice(0, visibleBlogs).map((blog) => (
          <Card
            key={blog.slug}
            className="group transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]"
          >
            <Link href={`/blog/${blog.slug}`} className="block">
              <CardContent className="p-4">
                {/* Image with Hover Zoom Effect */}
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={urlFor(blog.coverImage).url()}
                    alt={blog.title}
                    width={400}
                    height={200}
                    className="w-full cursor-pointer h-40 object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>

                {/* Title with Hover Effect */}
                <h3 className="text-lg text-greenCustom cursor-pointer font-semibold mt-2 transition-all duration-300 ease-in-out group-hover:text-yellowh">
                  {blog.title}
                </h3>

                {/* Author & Date */}
                <p className="text-sm text-gray-500">
                  {blog.author} •
                  {new Date(blog.date)
                    .toLocaleDateString("en-GB")
                    .replace(/\//g, "-")}
                </p>

                {/* Blog Excerpt */}
                <p className="text-black mt-1">{blog.excerpt}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      {visibleBlogs < blogs.length && (
        <div className="flex justify-center mt-6">
          <Button onClick={() => setVisibleBlogs((prev) => prev + 3)}>
            View More
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
