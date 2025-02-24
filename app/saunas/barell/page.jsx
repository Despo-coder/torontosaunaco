import React from 'react'
import Image from 'next/image'
import BarrelPage from '@/components/Barrel'



export const metadata = {
  title: "Toronto Sauna Co.",
  description: "Explore premium outdoor and indoor saunas for your home, crafted from high-quality cedar wood. Proudly made in Canada, our cedar barrel and cube saunas, sauna kits, and backyard wellness solutions provide relaxation, health benefits, and timeless luxury. Elevate your space today—cold plunges available!",
  keywords: "sauna, toronto, ontario, canada, wellness, relaxation, steam, Best sauna shop in Ontario, Home Saunas near me",
};

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
              
              src="https://res.cloudinary.com/dw4ev5whz/image/upload/v1720930176/torontosaunaco/Barrell/7x8wP_oq9au4.jpg" 
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
                Barrel Saunas
            </h2>
              <p className="text-gray-700 leading-relaxed mb-2 font-roboto">
              The Barrel Sauna is a timeless classic, recognized for its distinctive cylindrical shape that offers superior heat circulation and efficiency. Made from premium Canadian cedar, the Barrel Sauna is not only visually appealing but also durable and weather-resistant. Its compact and unique design allows for easy installation in various outdoor spaces, making it an ideal choice for those with limited space. The Barrel Sauna's cozy interior provides an intimate setting for relaxation and detoxification, making it a popular choice among sauna enthusiasts.
              </p>
            </div>
          </div>
        </section>
            </section>
        </div>
        <BarrelPage />
    </div>
  )
}

export default page
