import React from 'react'
import Indoors from '@/components/Indoors'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div>
       <div>
          <section className="px-4 py-2">
          <section className="modern-saunas py-4">
          <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:gap-2">
           
     
    
    {/* Image */}
            <div className="w-full md:w-[70%]">
              <Image 
              
              src="/images/indoor.jpg" 
              alt="Modern Sauna Image" 
              className="rounded-xl object-cover h-full w-full" 
              width={0}
              height={0}
              sizes='100vh'
              />
              
            </div>


      {/* Paragraph */}
      <div className="text-center md:text-right w-full md:w-1/3 mb-2 md:mb-0">
      <h2 className="text-4xl font-bold mb-4 text-center text-black">
                Indoor Saunas
            </h2>
              <p className="text-gray-700 leading-relaxed mb-2 font-roboto">
              The Indoor Sauna is designed to bring the therapeutic benefits of sauna bathing into the comfort of your home. Tailored to fit seamlessly into various interior spaces, the Indoor Sauna is ideal for bathrooms, basements, or home gyms. Made from high-quality wood and equipped with advanced heating technology, it provides a soothing and efficient sauna experience. The Indoor Sauna's compact design makes it suitable for smaller spaces without compromising on comfort or performance. Enjoy the health and wellness benefits of regular sauna use with the convenience and privacy of an indoor setting.
              </p>
            </div>
          </div>
        </section>
            </section>
        </div>
     <Indoors />
    </div>
  )
}

export default page
