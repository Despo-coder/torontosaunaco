"use client"; // Required for fetching data inside a React component

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity"; // Ensure you have this imported!

const GetData = async () => {
  const query = `*[_type == "blogPost"] | order(_createdAt desc) {
    title,
    slug,
    "imageUrl": featuredImage.asset->url
  }`;

  return await client.fetch(query);
};

const HomeInfoV2 = async() => {
  const data = await GetData()
const blogs = data
  return (
    <section className="bg-gray-50 mt-4 py-12 md:py-24">
      <div className="blog-grid grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 max-w-6xl mx-auto">
        
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <article key={blog.slug.current} className="blog-card group flex flex-col h-full">
              <div className="relative h-60 w-full overflow-hidden rounded-lg">
                {blog.imageUrl && (
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-2">{blog.title}</h3>
              <Link 
                href={`/blog/${blog.slug.current}`} 
                className="text-blue-600 hover:underline font-medium self-start"
              >
                Read More →
              </Link>
            </article>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">No blog posts found.</p>
        )}
        
      </div>
    </section>
  );
};

export default HomeInfoV2;
