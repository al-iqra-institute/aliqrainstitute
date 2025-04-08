import Navbar from "@/app/components/navbar";
import { FaYoutube, FaPinterest, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import React from "react";
import Link from "next/link";
import BlogsSinglePageList from "@/app/components/BlogsSinglePageList";
import { client } from "@/sanity/lib/client";

const page = async ({ params }: { params: { slug: string } }) => {
  const query = `*[_type == 'post' && slug.current == "${params.slug}"][0]{
    title,"slug":slug.current,coverImage,content,date,"author": author->name,tags
  }`;

  const blog: Blog = await client.fetch(query);

  return (
    <div>
      <Navbar />
      <div className="max-w-[1920px] h-auto mt-24 flex py-20 justify-center">
        <div className=" w-full max-w-[1400px] flex justify-center">
          <BlogsSinglePageList blog={blog} />
          <div className="hidden md:block max-w-[350px] w-full">
            {/* Search Bar */}
            <div className="w-full max-w-[350px] flex justify-center items-center mb-3">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search Your Keyword.."
                className="p-[10px] flex-[80%] border-[1px] "
              />{" "}
              <button className="bg-greenCustom flex-[20%] p-[14px] flex justify-center items-center px-4 pb-4 hover:bg-yellowh text-white">
                {" "}
                <CiSearch className="font-bold text-base" />{" "}
              </button>
            </div>

            {/* Saddam profile */}
            <div className="max-h-[335px] w-full max-w-sm mx-auto border border-gray-200 rounded-lg shadow-lg text-center p-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-300">
                <Image
                  src="/logo.png"
                  alt="Responsive example image"
                  width={74}
                  height={50}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-bold">Farhan Khan</h3>
              <p className="text-gray-500 text-sm mb-2">Blogger/Photographer</p>

              {/* Ratings */}

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">
                I'm a passionate Islamic blogger dedicated to sharing authentic
                knowledge and spiritual insights. Through thoughtful articles
                and Quranic reflections
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <Link
                  href="https://www.facebook.com/share/15koQxy1Bb/?mibextid=qi2Omg"
                  className="text-gray-500 hover:text-blue-600"
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://youtube.com/@aliqrainstitute?si=_sdxZp2A8yMgk8fX"
                  className="text-gray-500 hover:text-red-500"
                  target="_blank"
                >
                  <FaYoutube />
                </Link>
                <Link
                  href="https://www.instagram.com/aliqrainstitute5?utm_source=qr&igsh=MjhyYjh2cDRsemxw"
                  className="text-gray-500 hover:text-pink-500"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://t.me/AlIqrainstitute123"
                  className="text-gray-500 hover:text-blue-500"
                  target="_blank"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>

            {/* Recent post */}

            {/* Filter by menu */}

            {/* Popular Tags */}
            <div className="max-h-[228px] h-full w-full max-w-sm mx-auto mt-4 border border-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full cursor-pointer hover:bg-greenCustom hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Photo Gallery */}

            {/* Follow Us */}
            <div className="max-h-[135px] h-full w-full max-w-sm mx-auto mt-4 border border-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { icon: <FaFacebook />, bg: "bg-blue-500 text-white" },
                  { icon: <FaTwitter />, bg: "bg-gray-100 text-blue-500" },
                  { icon: <FaYoutube />, bg: "bg-red-500 text-white" },
                  { icon: <FaPinterest />, bg: "bg-orange-500 text-white" },
                  { icon: <FaInstagram />, bg: "bg-pink-500 text-white" },
                ].map((social, index) => (
                  <div
                    key={index}
                    className={`${social.bg} p-3 rounded-full hover:cursor-pointer text-xl cursor-pointer hover:opacity-80`}
                  >
                    <Link
                      href="https://www.facebook.com/share/15koQxy1Bb/?mibextid=qi2Omg"
                      target="_blank"
                    >
                      {social.icon}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
