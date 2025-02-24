import { client } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'



export const metadata = {
  title: "Toronto Sauna Co.",
  description: "Explore premium outdoor and indoor saunas for your home, crafted from high-quality cedar wood. Proudly made in Canada, our cedar barrel and cube saunas, sauna kits, and backyard wellness solutions provide relaxation, health benefits, and timeless luxury. Elevate your space today—cold plunges available!",
  keywords: "sauna, toronto, ontario, canada, wellness, relaxation, steam, Best sauna shop in Ontario, Home Saunas near me",
};


export const revalidate = 30

export const GetData = async () => {
  const query = `*[_type == "blogPost"] | order(_createdAt desc) {
    title,
    slug,
    titleimage,
    "imageUrl": featuredImage.asset->url
}[0...3]`
const data = await client.fetch(query)

return data
}


export default async function BlogPage() {

const data = await GetData()

  return (
   
                

    <div className="container mx-auto py-12 px-4 md:px-12 mt-16">

          <h1 className='text-center font-playfair text-4xl'>BLOGS</h1>
     
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 max-w-6xl mx-auto mt-16">
    {data?.map(post => (
      
        <div key={post.slug.current} className="bg-white rounded-lg shadow-md overflow-hidden border-gray-50 border-2">
           <Link href={`/blog/${post.slug.current}`} className="text-black ">
          <Image
            src={urlFor(post.titleimage).url()}
            alt={post.title}
            className="w-full h-48 object-cover"
            width={450}
            height={450}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
            {/* <p className="text-gray-700">{post.excerpt}</p> */}
            Read more.
          </div>
          </Link>
        </div>
   
      ))}
</div>

    </div>
  )
}


// Local API to use instead of sanity in case of error

// async function fetchBlogs() {
//   const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blogs`);
//   if (!res.ok) throw new Error("Failed to fetch blogs");
//   return res.json();
// }
 
// export default async function BlogPage() {
//   const blogs = await fetchBlogs();
  
//   console.log(blogs.titleimage?.asset._ref);

//   return (
//       <div className="max-w-6xl mx-auto px-4 py-8 md:mt-20">
//           <h1 className="text-4xl font-bold mb-8">Latest Blogs</h1>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {blogs.map((blog) => (
//           <div key={blog.slug.current} className="p-6 border rounded-lg shadow-md">
//             {blog.titleimage?.asset && (
//               <div className="relative h-48 w-full mb-4">
//                 {/* <Image
//                   src={urlFor(blog.titleimage).url()}
//                   alt={blog.title}
//                   fill
//                   className="rounded-lg object-cover"
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                 /> */}
//               </div>
//             )}
//             <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
//             <p className="text-gray-600 line-clamp-2">
//               {blog.content?.length > 0 ? blog.content[0].children[0].text : "Read more..."}
//             </p>
//             <a href={`/blog/${blog.slug.current}`} className="text-blue-600 hover:underline">
//               Read More →
//             </a>
//           </div>))}
//           </div>
        
//       </div>
//   );
// }
