import React from "react";
import PureCube from "@/components/PureCube";
import Image from "next/image";

export const metadata = {
  title:
    "Cube Saunas | Toronto Sauna Co.| Ontario | Sauna for Sale| outdoor sauna for sale | custome sauna Toronto",
  description:
    "Explore premium outdoor and indoor saunas for your home, crafted from high-quality cedar wood. Proudly made in Canada, our cedar barrel and cube saunas, sauna kits, and backyard wellness solutions provide relaxation, health benefits, and timeless luxury. Elevate your space today—cold plunges available!",
};

const PureCubePage = () => {
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
                  alt="Modern cedar sauna with glass front"
                  className="rounded-xl object-cover h-full w-full"
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Paragraph */}
              <div className="text-center md:text-left w-full md:w-1/3 mb-2 md:mb-0">
                <h2 className="text-4xl font-bold mb-4 text-center text-black font-playfair">
                  Pure Cube Saunas
                </h2>
                <p className="text-gray-700 font-semibold mb-2 font-nunito">
                  The Cube Sauna stands out with its bold, geometric design that
                  adds a touch of contemporary elegance to any outdoor space.
                  This modern sauna features clean lines and a spacious
                  interior, providing a luxurious environment for relaxation and
                  rejuvenation. Constructed from sustainably sourced Canadian
                  wood, the Cube Sauna is designed to deliver exceptional
                  performance and longevity. Its large windows and comfortable
                  seating make it perfect for social gatherings or solitary
                  retreats, offering a versatile and stylish solution for those
                  seeking a high-end sauna experience.
                </p>
                {/* <p className="text-gray-700 font-semibold mb-2 font-nunito"> Test</p> */}
              </div>
            </div>
          </section>
        </section>
      </div>
      <PureCube />
    </div>
  );
};

export default PureCubePage;
