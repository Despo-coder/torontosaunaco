import React from "react";
import Studio6Card from "@/components/Studio6Card";
import Image from "next/image";

export const metadata = {
  title: "Toronto Sauna Co.",
  description:
    "Explore premium outdoor and indoor saunas for your home, crafted from high-quality cedar wood. Proudly made in Canada, our cedar barrel and cube saunas, sauna kits, and backyard wellness solutions provide relaxation, health benefits, and timeless luxury. Elevate your space today—cold plunges available!",
  keywords:
    "sauna, toronto, ontario, canada, wellness, relaxation, steam, Best sauna shop in Ontario, Home Saunas near me",
};

const Studio6Page = () => {
  return (
    <div>
      <div>
        <section className="px-4 py-2">
          <section className="modern-saunas py-4">
            <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:gap-2">
              {/* Image */}
              <div className="w-full md:w-[70%]">
               
                <Image
                  src="/images/Classic 2.png"
                  alt="Modern Sauna Image"
                  className="rounded-xl object-cover h-full w-full"
                  width={0}
                  height={0}
                  sizes="100vh"
                />
              </div>

              {/* Paragraph */}
              <div className="text-center md:text-left w-full md:w-1/3 mb-2 md:mb-0">
                <h2 className="text-4xl font-bold mb-4 text-center text-black font-playfair">
                 Studio Six
                </h2>
                <p className="text-gray-700 font-semibold mb-2 font-nunito">
                  Introducing the{" "}
                  <span className="font-extrabold text-indigo-700 text-xl">
                    Studio 6 Sauna
                  </span>
                  {" "}- Modern Comfort, Maximized
Step into the next level of sauna luxury with the all-new Studio 6. 
Designed with a sleek, space-efficient footprint and expansive glass walls, 
the Studio 6 delivers a premium wellness experience without compromise. 
Its bold lines and minimalist aesthetic make it a striking addition to any backyard or 
retreat space. Whether you are unwinding solo or sharing the heat with others, 
Studio 6 offers the perfect balance of privacy, openness, and superior craftsmanship.
                </p>
                {/* <p className="text-gray-700 font-semibold mb-2 font-nunito"> Test</p> */}
              </div>
            </div>
          </section>
        </section>
      </div>
      {/* <PureCube /> */}
   <Studio6Card />
    </div>
  );
};

export default Studio6Page;
