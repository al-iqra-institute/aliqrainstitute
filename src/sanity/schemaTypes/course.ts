export default {
    name: "course",
    title: "Courses",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: "price",
        title: "Price",
        type: "number",
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: "instructor",
        title: "Instructor",
        type: "string",
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
        validation: (Rule:any) => Rule.required(),
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
  