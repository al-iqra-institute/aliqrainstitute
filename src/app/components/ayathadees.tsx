import { client } from "@/sanity/lib/client";

const Ayathadees = async () => {
  const query = `*[_type == "ayathadees"] | order(_createdAt desc)[0]{
    hadeesArabic,
    hadeesTranslation,
    hadeesSource,
    ayatArabic,
    ayatTranslation,
    ayatSource
  }`;

  const ayathadeesfinal = await client.fetch(query);

  return (
    <div className="flex bg-black text-white flex-col lg:flex-row w-full gap-6 px-4 lg:px-8 py-6">
      {/* Hadees Card */}
      <div className="bg-white text-black flex-1 p-8 flex flex-col justify-between rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 items-center text-center">
        <div>
          <div className="inline-block bg-greenCustom text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Hadees of the Day
          </div>
          <p className="text-3xl py-7 lg:text-5xl font-bold leading-relaxed mb-8">
            {ayathadeesfinal.hadeesArabic}
          </p>
          <p className="mb-6 text-base py-7 md:text-lg lg:text-2xl font-semibold leading-snug">
            {ayathadeesfinal.hadeesTranslation}
          </p>
          <p className="text-sm md:text-base lg:text-base text-gray-600">
            {ayathadeesfinal.hadeesSource}
          </p>
        </div>
        <button className="mt-8 flex items-center gap-2 bg-greenCustom text-white px-6 py-3 rounded-full shadow-md transition duration-200 w-max text-sm md:text-base">
          <i className="fa fa-share" /> Share
        </button>
      </div>

      {/* Ayat Card */}
      <div className="bg-greenCustom text-white flex-1 p-8 flex flex-col justify-between rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 items-center text-center">
        <div>
          <div className="inline-block bg-white text-black px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Ayat of the Day
          </div>
          <p className="text-3xl py-7 lg:text-5xl font-bold leading-relaxed mb-8">
            {ayathadeesfinal.ayatArabic}
          </p>
          <p className="font-semibold py-7 text-base md:text-lg lg:text-2xl mb-6 leading-snug">
            {ayathadeesfinal.ayatTranslation}
          </p>
          <p className="text-sm md:text-base lg:text-base">
            {ayathadeesfinal.ayatSource}
          </p>
        </div>
        <button className="mt-8 flex items-center gap-2 bg-white text-greenCustom px-6 py-3 rounded-full hover:bg-gray-200 shadow-md transition duration-200 w-max text-sm md:text-base">
          <i className="fa fa-share" /> Share
        </button>
      </div>
    </div>
  );
};

export default Ayathadees;
