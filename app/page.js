import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Carousel2 from "@/components/Carousel2";
import HompageInfo from "@/components/HompageInfo";
import WoodTypes from "@/components/WoodTypes";
import Image from "next/image";
import LCL from "@/public/images/Leisurecraft logo 3.jpg";
import HL from "@/public/images/humm_logo.jpg";
import HarL from "@/public/images/Harvia.jpg";
import HomePageImage from "@/components/HomePageImage";
import BlogPage from "./blog/page";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <HompageInfo />
      <WoodTypes />
      <h1 className=" mt-4 text-3xl text-center font-bold font-playfair mb-2">
        Popular Saunas
      </h1>
      <Carousel2 />
      <BlogPage />
      <HomePageImage />
      <Contact />
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-8 max-w-2xl mx-auto w-full">
          <div className="col-span-1">
            <Image
              src={LCL}
              alt="Logo"
              width={150}
              height={150}
              className="mx-auto"
              priority
            />
          </div>
          <div className="col-span-1">
            <Image
              src={HL}
              alt="Logo"
              width={150}
              height={150}
              className="mx-auto"
              priority
            />
          </div>
          <div className="col-span-2 mt-8 md:mt-0">
            <Image
              src={HarL}
              alt="Logo"
              width={150}
              height={150}
              className="mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
