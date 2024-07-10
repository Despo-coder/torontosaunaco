//import products from "@/data/products.json"
import ProductCard from "@/components/ProductCard"
import {fetchProducts} from "@/assets/utils/request"



const Saunas = async() => {
const products = await fetchProducts()
  return (
   <div>
      <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {products.length === 0 ? (<p>No products found</p>) :(
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
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
