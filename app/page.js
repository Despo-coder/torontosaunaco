import Carousel1 from "@/components/Carousel1";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero"
import HomeInfoV2 from "@/components/HomeInfoV2";
import HomePageProducts from "@/components/HomePageProducts";
import HompageInfo from "@/components/HompageInfo";
import WoodTypes from "@/components/WoodTypes";



const HomePage = () => {


  return (
    <div className="">
      <Hero />
      <HompageInfo />
      <WoodTypes />
      <h1 className=" mt-4 text-3xl text-center font-bold font-playfair mb-2">Popular Saunas</h1>
   
       
      <Carousel1 />
      <HomeInfoV2 />
     
      <Contact />
      {/* <HomePageProducts /> */}
      {/* <div className="bg-white border border-gray-300 rounded-lg  dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
        <div className="bg-slate-100 dark:bg-gray-800 py-3 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100 flex justify-between items-center">
          <h2>Products</h2>
          <Button className='w-32 px-6'>
          <Link
            className="bg-slate-700 hover:bg-slate-600 duration-300 transition-all text-slate-50 rounded-xl px-4 py-2"
            href="/cart"
          >
            Cart (<CartCOunt />) 
          </Link>
          </Button>
        </div>
        <div className="bg-white dark:bg-slate-700 p-4">
          <ProductList products={products} />
        </div>
      </div> */}
    </div>
  )
}

export default HomePage
