// import React from 'react'
// import Head from 'next/head'
// import Image from 'next/image';
// import Image1 from '@/assets/images/pexels-nick-bulanov-1110438433-20763181.jpg';
// import Image2 from '@/assets/images/pexels-heyho-8092430.jpg';
// import Image3 from '@/assets/images/pexels-yaroslav-shuraev-5976845.jpg';

// export const metadata = {
//     title: "Toronto Sauna Co.",
//     description: "Explore premium outdoor and indoor saunas for your home, crafted from high-quality cedar wood. Proudly made in Canada, our cedar barrel and cube saunas, sauna kits, and backyard wellness solutions provide relaxation, health benefits, and timeless luxury. Elevate your space today—cold plunges available!",
//     keywords: "sauna, toronto, ontario, canada, wellness, relaxation, steam, Best sauna shop in Ontario, Home Saunas near me",
// };

// const blogs = [
//     {
//       id: 1,
//       title: 'Benefits of Sauna for Health',
//       image: Image1,
//       excerpt: 'Discover the top health benefits of using a sauna regularly, from improved circulation to stress relief.',
//       link: 'blog/cold-plunge-benefits'
//     },
//     {
//       id: 2,
//       title: 'How to Choose the Right Sauna for Your Home',
//       image: Image2,
//       excerpt: 'Looking to buy a sauna? Learn about different types and which one suits your lifestyle best.',
//       link: '/blog/sauna-accessories-guide'
//     },
//     {
//       id: 3,
//       title: 'Traditional vs. Infrared Saunas: Which is Best?',
//       image: Image3,
//       excerpt: 'Understand the key differences between traditional and infrared saunas to make an informed decision.',
//       link: '/blog/wellness-routine'
//     },
// ];

// const BlogPage = () => {
//     return (
//         <>
//            
//             <div className="container mx-auto py-12 px-4 md:px-12 mt-16">
//                 {blogs.map((blog, index) => (
//                     <div key={blog.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
//                         <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}>
//                             <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
//                             <p className="text-gray-700 mb-4">{blog.excerpt}</p>
//                             <a href={blog.link} className="text-blue-500 hover:underline">Read More</a>
//                         </div>
//                         <div className={index % 2 === 1 ? 'md:order-1' : ''}>
//                             <Image src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg shadow-lg" />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {/* <BlogLayout/> */}
//         </>
//     );
// };

// export default BlogPage;


import { client } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'


export const GetData = async () => {
  const query = `*[_type == "blogPost"] | order(_createdAt desc) {
    title,
    slug,
    titleimage,
    "imageUrl": featuredImage.asset->url
  }`
const data = await client.fetch(query)
return data
}


export default async function BlogPage() {
//   const posts = await client.fetch(`
//     *[_type == "blogPost"] {
//       title,
//       slug,
//       "imageUrl": featuredImage.asset->url
//     }
//   `)
// console.log(posts)
const data = await GetData()
//console.log(data)
  return (
   
                

    <div className="container mx-auto py-12 px-4 md:px-12 mt-16">

          
      {/* {data?.map(post => (
        <article key={post.slug.current}>
          <h2>{post.title}</h2>
          {post.imageUrl && (
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
          )}
          <Link href={`/blog/${post.slug.current}`}>Read more →</Link>
        </article>
      ))} */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 max-w-6xl mx-auto mt-16">
    {data?.map(post => (
        <div key={post.slug.current} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={urlFor(post.titleimage).url()}
            alt={post.title}
            className="w-full h-48 object-cover"
            width={450}
            height={450}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-700">{post.excerpt}</p>
            <Link href={`/blog/${post.slug.current}`} className="text-blue-500 hover:underline">Read more →</Link>
          </div>
        </div>
      ))}
</div>

    </div>
  )
}