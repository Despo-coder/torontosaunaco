import ColdPlungeCard from "./ColdPlungeCard"
import Link from "next/link"
import { Button } from "./ui/button"
import {fetchProducts} from "@/assets/utils/request"
import ProductCard from "./ProductCard"




const CanadianTimber = async () => {

    const product = await fetchProducts()
   const cubes = product.filter(product => product.type.includes("Canadian Timber"))
   const recentProducts = cubes.sort((a, b) => (a.price || 0) - (b.price || 0));
    // .slice(0, )
     return (
    <>
    <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
           
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
{recentProducts === 0 ? (<p>No Products found</p>):
recentProducts.map((product, i)=>(
    <ProductCard key={i} product= {product} />
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

export default CanadianTimber
