"use client";
import Link from 'next/link'
import React from 'react'

const Dailycontent = ({ latest }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 px-4 lg:px-8 py-6 bg-black text-white">
      {/* Hadees Card */}
      <div className="bg-white text-black flex-1 p-8 flex flex-col justify-between rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 items-center text-center">
        <div>
          <div className="inline-block bg-greenCustom text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Hadees of the Day
          </div>
          <p className="text-2xl pt-7 md:text-3xl lg:text-4xl xl:text-[2rem] font-bold leading-relaxed mb-8">
            {latest.hadeesArabic || "No Hadees Available"}
          </p>
          <p className="mb-6 text-base py-7 md:text-lg lg:text-2xl font-semibold leading-snug">
            {latest.hadeesTranslation || "No Translation Available"}
          </p>
          <p className="text-sm md:text-base text-gray-600">
            {latest.hadeesSource || "Source not provided"}
          </p>
        </div>
        <Link href={"https://www.facebook.com/share/15koQxy1Bb/?mibextid=qi2Omg"} >
        <button className="mt-8 flex items-center gap-2 bg-greenCustom text-white px-6 py-3 rounded-full shadow-md transition duration-200 text-sm md:text-base">
          <i className="fa fa-share" /> Share
        </button>
        </Link>
      </div>

      {/* Ayat Card */}
      <div className="bg-greenCustom text-white flex-1 p-8 flex flex-col justify-between rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 items-center text-center">
        <div>
          <div className="inline-block bg-white text-black px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Ayat of the Day
          </div>
          <p className="text-2xl pt-7 md:text-3xl lg:text-4xl xl:text-[2rem] font-bold leading-relaxed mb-8">
            {latest.ayatArabic || "No Ayat Available"}
          </p>

          <p className="font-semibold py-7 text-base md:text-lg lg:text-2xl mb-6 leading-snug">
            {latest.ayatTranslation || "No Translation Available"}
          </p>
          <p className="text-sm md:text-base">
            {latest.ayatSource || "Source not provided"}
          </p>
        </div>
        <Link href={"https://www.facebook.com/share/15koQxy1Bb/?mibextid=qi2Omg"} >
        <button className="mt-8 flex items-center gap-2 bg-white text-greenCustom px-6 py-3 rounded-full hover:bg-gray-200 shadow-md transition duration-200 text-sm md:text-base">
          <i className="fa fa-share" /> Share
        </button>
        </Link>
      </div>

      {/* Daily Quote Card */}
      <div className="bg-white text-black flex-1 p-8 flex flex-col justify-between rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 items-center text-center">
        <div>
          <div className="inline-block bg-greenCustom text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Quote of the Day
          </div>
          <p className="text-2xl py-7 md:text-3xl lg:text-4xl italic leading-snug mb-8">
            “{latest.dailyQuote || "No Quote Available"}”
          </p>
          <p className="text-sm md:text-base text-gray-700 font-semibold">
            — {latest.quoteAuthor || "Author not provided"}
          </p>
        </div>
        <Link href={"https://www.facebook.com/share/15koQxy1Bb/?mibextid=qi2Omg"} >
        <button className="mt-10 flex items-center gap-2 bg-greenCustom text-white px-6 py-3 rounded-full shadow-md transition duration-200 text-sm md:text-base">
          <i className="fa fa-share" /> Share
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Dailycontent
