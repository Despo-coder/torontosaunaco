import React from 'react'


const blogs = [
    {
      id: 1,
      title: 'Blog Post 1',
      image: 'https://via.placeholder.com/300',
      excerpt: 'This is a summary of blog post 1. It gives a brief overview of the content.',
      link: '/blog/1'
    },
    {
      id: 2,
      title: 'Blog Post 2',
      image: 'https://via.placeholder.com/300',
      excerpt: 'This is a summary of blog post 2. It gives a brief overview of the content.',
      link: '/blog/2'
    },
    {
      id: 3,
      title: 'Blog Post 3',
      image: 'https://via.placeholder.com/300',
      excerpt: 'This is a summary of blog post 3. It gives a brief overview of the content.',
      link: '/blog/3'
    },
  ];
  

const page = () => {
    return (
        <div className="container mx-auto py-12 px-4 md:px-12">
        {blogs.map((blog, index) => (
          <div key={blog.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.excerpt}</p>
              <a href={blog.link} className="text-blue-500 hover:underline">Read More</a>
            </div>
            <div className={index % 2 === 1 ? 'md:order-1' : ''}>
              <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        ))}
      </div>
      
      );
}

export default page
