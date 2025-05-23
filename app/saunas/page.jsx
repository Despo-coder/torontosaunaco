import ProductCard from "@/components/ProductCard"
import {fetchProducts} from "@/assets/utils/request"



export const metadata = {
  title: "Toronto Sauna Co.",
  description: "Explore premium outdoor and indoor saunas for your home, crafted from high-quality cedar wood. Proudly made in Canada, our cedar barrel and cube saunas, sauna kits, and backyard wellness solutions provide relaxation, health benefits, and timeless luxury. Elevate your space today—cold plunges available!",
  keywords: "sauna, toronto, ontario, canada, wellness, relaxation, steam, Best sauna shop in Ontario, Home Saunas near me",
};


const Saunas = async() => {
const products = await fetchProducts()

const filteredProducts = Object.values(products).filter((x) => x.type !== 'Cold Plunge');

return (
   <div>
      <section className="px-4 py-6 mt-6">
        
        <h1 className="text-3xl text-center font-bold font-playfair mb-2">Our Saunas</h1>
        {/* Horzontal rule across the screen */}
        {/* <hr className="w-1/2 mx-auto border-b-2 border-black" /> */}
      <div className="container-xl lg:container m-auto px-4 py-6">
        {products.length === 0 ? (<p>No products found</p>) :(
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product, index) => (
      <ProductCard product={product} key={index} /> 
  ))}
  </div>
 )}
 </div>
</section>
</div>
  )
}

export default Saunas
