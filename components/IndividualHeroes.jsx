import React from "react";
import Image from "next/image";

const IndividualHeroes = () => {
  return (
    <div>
      <section className="px-4 py-2">
        <section className="modern-saunas py-4">
          <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:gap-2">
            {/* Image   src="/images/luna1_8x8.jpg"  */}
            <div className="w-full md:w-[70%]">
              <Image
                src="/images/luna1_8x8.jpg"
                alt="Luna outdoor cedar sauna with modern design and glass windows"
                className="rounded-xl object-cover h-full w-full"
                width={800}
                height={800}
                sizes="(max-width: 768px) 100vw, 70vw"
                priority
              />
            </div>

            {/* Paragraph */}
            <div className="text-center md:text-right w-full md:w-1/3 mb-2 md:mb-0">
              <h2 className="text-4xl font-bold mb-4 text-center text-black">
                Luna Saunas
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2 font-roboto">
                The Luna Sauna is a sleek and contemporary outdoor sauna
                designed to blend seamlessly into any garden or backyard
                setting. With its modern aesthetic and minimalist design, the
                Luna Sauna offers a luxurious retreat that combines
                functionality with style. Crafted from high-quality Canadian
                wood and featuring large glass windows, it allows for ample
                natural light while providing a serene environment for
                relaxation. The Luna Sauna is perfect for those who seek a
                harmonious balance between modern design and the therapeutic
                benefits of traditional sauna experiences.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default IndividualHeroes;
