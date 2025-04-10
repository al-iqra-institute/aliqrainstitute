import { client } from "@/sanity/lib/client";
import Dailycontent from "../components/dailycontent";
import Navbar from "../components/navbar";

export const revalidate = 120;

const Page = async () => {
  const query = `*[_type == "dailyContent"] | order(_updatedAt desc){
    hadeesArabic,
    hadeesTranslation,
    hadeesSource,
    ayatArabic,
    ayatTranslation,
    ayatSource,
    dailyQuote,
    quoteAuthor
  }`;

  const ayathadeesfinal = await client.fetch(query);
  const latest = ayathadeesfinal[0];

  return (
    <div>
      <Navbar />
      <div className="pt-28 bg-black">
        <Dailycontent latest={latest} />
      </div>
    </div>
  );
};

export default Page;
