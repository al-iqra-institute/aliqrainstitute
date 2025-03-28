type Course = {
    title: string;
    price: number;
    instructor: string;
    description: string;
    slug: string;
    image: string;   // ✅ Fixed
    overview: TypedObject[];
};

type Blog = {
    title: string;
    excerpt: string;
    slug: string;
    coverImage: string;   
    content: TypedObject[];
    // alt: string;
    date: string;
    author: string;
    tags: string[];
};

// TypedObject[]