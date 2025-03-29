import { client } from "@/sanity/lib/client";
import CourseClientPage from "@/app/components/courseclientpage";

const CoursePage = async ({ params }: { params: { slug: string } }) => {
  const query = `*[_type == 'course' && slug.current == "${params.slug}"][0]{
    title, price, instructor, description, image, overview
  }`;

  const course: Course = await client.fetch(query);

  return <CourseClientPage course={course} />;
};

export default CoursePage;
