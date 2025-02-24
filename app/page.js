import  LLCL from '@/public/images/LeisureCraftLogo.png'
import Contact from "@/components/Contact";
import Hero from "@/components/Hero"
import HomeInfoV2 from "@/components/HomeInfoV2";
import Carousel2 from "@/components/Carousel2";
import HompageInfo from "@/components/HompageInfo";
import WoodTypes from "@/components/WoodTypes";
import Image from 'next/image';
import LCL from '@/public/images/Leisurecraft logo 3.jpg'
import HomePageImage from '@/components/HomePageImage';
import BlogPage from './blog/page';



const HomePage = () => {


  return (
    <div className="">
      {/* <div className="bg-white flex flex-end justify-end">
        <Image src={LLCL} alt="Leisure Craft Logo" />
      </div> */}
      <Hero />
      <HompageInfo />
      <WoodTypes />
     
      <h1 className=" mt-4 text-3xl text-center font-bold font-playfair mb-2">Popular Saunas</h1>
      <Carousel2 />
      <BlogPage />
      <HomePageImage />
      <Contact />
      <Image src={LCL} alt="Logo" width={150} height={150} className='mx-auto' />
    </div>
  )
}

export default HomePage
