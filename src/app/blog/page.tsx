import { client } from "@/sanity/lib/client";
import BlogList from "@/app/components/BlogList";
import Navbar from "@/app/components/navbar";

export const revalidate = 120;

const Page = async () => {
  const query = `*[_type == 'post'] | order(_updatedAt desc){
    title,excerpt,"slug":slug.current,coverImage,content,date,"author": author->name,tags 
  }`;

  // Sanity se blogs fetch karna (Server Side)
  const blogs: Blog[] = await client.fetch(query);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-36 p-6 space-y-8">
        {/* Client Side Component */}
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
};

export default Page;
