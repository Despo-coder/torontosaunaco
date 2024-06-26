//import  products from "@/data/products.json"
import ProductCard from "./ProductCard"
import Link from "next/link"
import { Button } from "./ui/button"
import {fetchProducts} from "@/assets/utils/request"




const HomePageProducts = async () => {

    const product = await fetchProducts()
    const recentProducts = product
    .sort(()=> Math.random())
    .slice(0, 5)
  return (
    <>
    <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-black">
                Premium Saunas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
{recentProducts === 0 ? (<p>No Products found</p>):
recentProducts.map((product, i)=>(
    <ProductCard  key={i} product= {product} />
))

}
            </div>
        </div>
     
    </section>
    <section className="m-auto max-w-lg my-10 px-6">
<Link href="/saunas">
    <Button className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View All Products</Button>
</Link>
    </section>
    </>
  )
}

export default HomePageProducts
