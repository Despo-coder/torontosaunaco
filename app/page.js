import Carousel1 from "@/components/Carousel1";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero"
import HomeInfoV2 from "@/components/HomeInfoV2";
import Carousel2 from "@/components/Carousel2";
import HompageInfo from "@/components/HompageInfo";
import WoodTypes from "@/components/WoodTypes";



const HomePage = () => {


  return (
    <div className="">
      <Hero />
      <HompageInfo />
      <WoodTypes />
      <h1 className=" mt-4 text-3xl text-center font-bold font-playfair mb-2">Popular Saunas</h1>
       <Carousel2 />
      <HomeInfoV2 />
      <Contact />
    
    </div>
  )
}

export default HomePage
