import Image from 'next/image';
import Link from 'next/link';
import Image1 from '@/assets/images/pexels-nick-bulanov-1110438433-20763181.jpg';
import Image2 from '@/assets/images/pexels-heyho-8092430.jpg';
import Image3 from '@/assets/images/pexels-yaroslav-shuraev-5976845.jpg';


// Blog post data array
const blogPosts = [
  {
    slug: 'cold-plunge-benefits',
    title: "The Health Benefits of Regular Sauna Sessions",
    subtitle: 'Why Folks in the GTA Should Embrace the Heat',
    author: "thetorontosaunaco",
    date: "March 15, 2024",
    excerpt: "Discover how cold water immersion can transform your wellness routine and boost recovery times.",
    featuredImage: Image1,
    content: [
      {
        type: 'text',
        text: `Cold plunge therapy has become an essential part of modern wellness routines...`
      },
      {
        type: 'image',
        src: Image3,
        alt: 'Professional ice bath setup'
      }
    ],
    relatedPosts: [
      {
        title: "Sauna vs. Cold Plunge: Finding Your Balance",
        slug: "wellness-routine",
        excerpt: "Learn how to combine heat and cold therapy..."
      }
    ]
  },
  {
    slug: 'wellness-routine',
    title: "Sauna vs. Cold Plunge: Finding Your Balance",
    author: "thetorontosaunaco",
    date: "March 18, 2024",
    featuredImage: Image2,
    content: [
      {
        type: 'text',
        text: `Balancing sauna and cold plunge therapies can optimize...`
      }
    ],
    relatedPosts: [
      {
        title: "Cold Plunge Therapy Guide",
        slug: "cold-plunge-benefits",
        excerpt: "Discover cold water immersion benefits..."
      }
    ]
  },
  {
    slug: 'sauna-accessories-guide',
    title: "Top 5 Recovery Techniques for Athletes",
    author: "thetorontosaunaco",
    date: "March 22, 2024",
    featuredImage: Image3,
    content: [
      {
        type: 'text',
        text: `Professional-grade recovery methods you can use...`
      }
    ],
    relatedPosts: [
      {
        title: "Sauna Therapy Benefits",
        slug: "sauna-vs-cold-plunge",
        excerpt: "Explore heat therapy advantages..."
      }
    ]
  }
];

const BlogLayout = ({params}) => {
  //const pathname = usePathname();
  const currentSlug = params.slug;
  const blogPost = blogPosts.find(post => post.slug === currentSlug);

  if (!blogPost) return <div>Post not found</div>;

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 mt-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
        <div className="flex justify-center items-center space-x-4 text-gray-600">
          <span>By {blogPost.author}</span>
          <time>{blogPost.date}</time>
        </div>
      </header>

      <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
        <Image
          src={blogPost.featuredImage}
          alt="Featured image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>

      {/* Content Sections */}
      <div className="prose max-w-none mb-12">
        {blogPost.content.map((section, index) => (
          <section key={index} className="mb-8">
            {section.type === 'image' ? (
              <div className="relative h-96 my-8 rounded-lg overflow-hidden">
                <Image
                  src={section.src}
                  alt={section.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: section.text }} />
            )}
          </section>
        ))}
      </div>

      {/* Related Articles */}
      <section className="mt-16 border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPost.relatedPosts.map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`}
              key={index}
              className="border p-4 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
};

export default BlogLayout;