import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const BlogsSinglePageList = ({ blog }: { blog: Blog }) => {
  return (
    <div className="bg-black">
      <div className="max-w-[900px] w-[900px]">
        <div className="max-w-[900px] mx-auto p-6">
          {/* Header Image */}
          <div className="relative w-full h-[400px]">
            <Image
              src={urlFor(blog.coverImage).url()}
              alt="Header Image"
              layout="fill"
              className="object-cover rounded-lg"
            />
            {/* <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 text-sm font-bold rounded">
              1020 × 410
            </div> */}
          </div>

          {/* Title and Meta Info */}
          <div className="mt-6">
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <div className="flex items-center text-greenCustom mt-3 text-sm gap-4">
              <span>By {blog.author}</span>
              <span>
                {new Date(blog.date)
                  .toLocaleDateString("en-GB")
                  .replace(/\//g, "-")}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-6 text-white leading-relaxed">
            <PortableText value={blog.content} />
          </div>

          {/* Social Sharing */}
          <div className="mt-8 flex items-center gap-4 text-white">
            <span>Share:</span>
            <div className="flex gap-x-2">
              <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-blue-600" />
              <FaTwitter className="w-6 h-6 cursor-pointer hover:text-blue-400" />
              <FaPinterest className="w-6 h-6 cursor-pointer hover:text-red-500" />
              <FaYoutube className="w-6 h-6 cursor-pointer hover:text-red-600" />
            </div>
          </div>

          {/* Comments Section */}
        </div>
      </div>
    </div>
  );
};

export default BlogsSinglePageList;
