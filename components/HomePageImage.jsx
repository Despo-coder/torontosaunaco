import Image from "next/image";
import { Button } from "./ui/button";

const HomePageImage = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dw4ev5whz/image/upload/v1740247723/torontosaunaco/latvia-912341_1920_new_mvdep7.png"
        alt="Sauna by the sea"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-3xl md:text-5xl font-bold font-atkinson mb-4">
          Discover the Ultimate Sauna Experience
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mb-6 font-nunito">
          Unwind in handcrafted cedar saunas built for relaxation, health, and wellness. Explore our premium outdoor and indoor sauna collections today.
        </p>
    
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col gap-2  md:flex-row">
          
          <Button variant='none' className="border-white text-black px-6 py-3 bg-[#eeb35a]   rounded-lg font-semibold hover:bg-white hover:text-black transition">
          View Saunas
          </Button>

          <Button variant="outline" className="border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
          Request a Quote
          </Button>
          
        </div>
      </div>
    </div>
  );
};

export default HomePageImage;
