import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'



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


const getPostBySlug = async (slug) => {

  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    title,
    slug,
    content,
    titleimage,
  }`

  

  const post = await client.fetch(query, { slug })
  return post
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug)
  const extraPosts = await GetData()

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:mt-20">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Main Content */}
        <article className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
          
          {post.titleimage && (
            <Image
              src={urlFor(post.titleimage).url()}
              alt={post.title}
              width={800}
              height={450}
              className="rounded-lg mb-8"
              priority
            />
          )}

          <div className="prose lg:prose-xl">
            <PortableText value={post.content} />
          </div>
        </article>

        {/* Sidebar with Related Articles */}
        <aside className="space-y-8">
          <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
          {extraPosts
                ?.filter((related) => related.slug.current !== post.slug.current).map((related) => (
            <Link 
              key={related.slug.current}
              href={`/blog/${related.slug.current}`}
              className="block group hover:bg-gray-50 p-4 rounded-lg transition"
            >
              {related.imageUrl && (
                <Image
                  src={related.imageUrl}
                  alt={related.title}
                  width={300}
                  height={200}
                  className="rounded-lg mb-2"
                />
              )}
              <h3 className="font-semibold group-hover:text-blue-600 transition">
                {related.title}
              </h3>
              {related.excerpt && (
                <p className="text-sm text-gray-600 mt-1">{related.excerpt}</p>
              )}
            </Link>
          ))}
        </aside>
      </div>

      {/* Back to All Articles */}
      <div className="mt-12 border-t pt-8">
        <Link 
          href="/blog"
          className="text-blue-600 hover:underline font-medium"
        >
          ← View All Articles
        </Link>
      </div>
    </div>
  )
}