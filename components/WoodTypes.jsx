import React from 'react';
import Image from 'next/image';

const WoodTypes = () => {
    const woodData = [
        {
          title: "Wood Type",
          description: "Discover the finest wood types used in our saunas, known for their durability, beauty, and excellent heat retention.",
          image: "/SliderImages/WT.jpg"
        },
        {
          title: "Ethically Sourced",
          description: "We ensure all our wood is ethically sourced, supporting sustainable forestry practices and eco-friendly management.",
          image: "/SliderImages/8220ethical.jpg"
        },
        {
          title: "Health Benefits",
          description: "Experience the numerous health benefits of our saunas, from improved circulation to detoxification and stress relief.",
          image: "/SliderImages/R.png"
        }
      ];
      
      return (
        <section className="wood-types py-[120px] bg-gray-100">
        <div className="container mx-auto flex flex-wrap">
          {woodData.map((wood, index) => (
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0" key={index}>
              <div className="text-center flex flex-col h-full">
                <h3 className="text-xl font-bold mb-2 font-playfair">{wood.title}</h3>
                <p className="text-gray-700 font-roboto flex-grow">{wood.description}</p>
                <div className="w-full border border-gray-400 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </section>
      );
    }
export default WoodTypes;