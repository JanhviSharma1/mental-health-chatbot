import { defineQuery } from "next-sanity";

export const BLOGS_QUERY = defineQuery(`
  *[_type == "blog" && defined(slug.current) && 
    (
      !defined($search) || 
      title match $search || 
      description match $search || 
      category[]->title match $search
    )
  ] 
  | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "formattedDate": dateTime(date),
    coverImage,
    category[]->{
      title,
      "slug": slug.current
    },
    author->{
      name,
      username,
      image,
      bio
    }
  }
`);
