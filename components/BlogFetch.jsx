import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/blog');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="border p-4 rounded-lg shadow-lg">
            <Link href={`/blog/${post.slug}`}>
              <Image 
                src={post.image} 
                alt={post.title} 
                width={400} 
                height={250} 
                className="rounded-md mb-4 cursor-pointer"
              />
            </Link>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline mt-2 inline-block">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}


// import { ReactNode } from "react";
// import Link from "next/link";

// const BlogLayout = ({ children }) => {
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <header className="flex justify-between items-center py-4 border-b">
//         <h1 className="text-2xl font-bold">Blog</h1>
//         <nav>
//           <ul className="flex space-x-4">
//             <li>
//               <Link href="/blog">
//                 <a className="text-blue-500 hover:underline">Home</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/">
//                 <a className="text-blue-500 hover:underline">Back to Site</a>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <main className="mt-6">{children}</main>
//     </div>
//   );
// };

// export default BlogLayout;