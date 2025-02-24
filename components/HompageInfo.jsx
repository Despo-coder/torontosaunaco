import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
  title: "Toronto Sauna Co.",
  description: "Explore premium outdoor and indoor saunas for your home, crafted from high-quality cedar wood. Proudly made in Canada, our cedar barrel and cube saunas, sauna kits, and backyard wellness solutions provide relaxation, health benefits, and timeless luxury. Elevate your space today—cold plunges available!",
  keywords: "sauna, toronto, ontario, canada, wellness, relaxation, steam, Best sauna shop in Ontario, Home Saunas near me",
};

const HompageInfo = () => {
  return (
    <div>
      <section className="px-4 py-6">
      <section className="modern-saunas py-16">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center md:text-left w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold font-roboto mb-4">Transform Your Home into a Haven of Tranquility: Modern Saunas for Ultimate Relaxation.</h2>
          <p className="text-gray-700 leading-relaxed mb-6 font-roboto">
          Unwind. Recharge. Elevate Your Home with a Luxury Sauna. Let the warmth of a suana wrap you, melting away stress and tension. Soft, ambient lighting creates a calming atmosphere, while ergonomically designed seating cradles your body in sumptuous comfort. This isn't just a sauna; it's a portal to a world of rejuvenation and well-being.
          </p>
          <p className="text-gray-700 leading-relaxed font-roboto">
            Our state-of-the-art modern saunas are more than just sleek and stylish. They're a fusion of cutting-edge technology and contemporary design, crafted to offer a luxurious escape within the comfort of your own home. Imagine emerging from your sauna feeling invigorated, muscles relaxed, and your mind clear.
          </p>
          <Link href="/saunas" className="btn mt-4 inline-block px-6 py-2.5 rounded-lg text-center font-bold text-white bg-black  hover:bg-sauna-red-dark focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-sauna-red-dark">
          Start Your Sauna Journey
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <Image 
          
          src="/images/PureCubeHudsonClear_ Web-12.jpg" 
          alt="Modern Sauna Image" 
          className="rounded-xl object-cover h-full w-full" 
          width={0}
          height={0}
          sizes='100vh'
          />
          
        </div>
      </div>
    </section>
        </section>
    </div>
  )
}

export default HompageInfo
