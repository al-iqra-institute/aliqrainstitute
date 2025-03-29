export default {
  name: "course",
  title: "Courses",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: string) => Rule, 
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: string) => Rule, 
    },
    {
      name: "instructor",
      title: "Instructor",
      type: "string",
      validation: (Rule: string) => Rule, 
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: string) => Rule, 
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
    },
    {
      name: "image",
      title: "Course Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "overview",
      title: "Course Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
