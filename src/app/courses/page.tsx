import Navbar from "@/app/components/navbar";
import { CiSearch } from "react-icons/ci";
import React from "react";
import Link from "next/link";
import Coursescard from "../components/coursescard";
import { client } from "@/sanity/lib/client";

export const revalidate = 120;

const Page = async () => {
  const category = [
    { name: "Sandwiches" },
    { name: "Burger" },
    { name: "Chicken Chup" },
    { name: "Drink" },
    { name: "Pizza" },
    { name: "Veg" },
    { name: "Non Veg" },
    { name: "Uncategorized" },
  ];

  const query = `*[_type == 'course'] | order(_updatedAt desc){
    title, price, instructor, description, "slug": slug.current, image,overview
  }`;

  const courses: Course[] = await client.fetch(query);

  return (
    <div>
      <Navbar />
      <div className="max-w-[1920px] lg:h-[1230px] mt-24 flex py-20 justify-center">
        <div className=" w-full max-w-[1500px] gap-3 flex justify-center">
          <Coursescard course={courses} />
          <div className=" max-w-[300px] hidden md:block w-full">
            {/* Search Bar */}
            <div className="w-full max-w-[350px] flex justify-center items-center mb-3">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search Your Keyword.."
                className="p-[10px] flex-[80%] border-[1px] "
              />{" "}
              <button className="bg-yellowCustom flex-[20%] p-[14px] flex justify-center items-center px-4 pb-4 hover:bg-yellowh text-white">
                {" "}
                <CiSearch className="font-bold text-base" />{" "}
              </button>
            </div>

            {/* Saddam profile */}
            <div className="max-h-[335px] w-full max-w-sm mx-auto border border-gray-200 rounded-lg shadow-lg p-6">
              <h2 className="font-bold text-xl">Category</h2>
              {category.map((item, index) => (
                <div key={index} className="font-normal text-lg">
                  <input type="checkbox" name="" id="" />{" "}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>

            {/* Filter by menu */}

            {/* Product Tags */}
            <div className="max-h-[228px] h-full w-full max-w-sm mx-auto mt-4 border border-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">Product Tags</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Services",
                  "Our Menu",
                  "Pizza",
                  "Cupcake",
                  "Burger",
                  "Cookies",
                  "Our Shop",
                  "Tandoori Chicken",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-gray-600 text-sm font-medium border-yellowh cursor-pointer hover:text-yellowh hover:border-b-[1px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
