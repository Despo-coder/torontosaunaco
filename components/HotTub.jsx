import HotTubCard from "./HotTubCard"
import Link from "next/link"
import { Button } from "./ui/button"
import {fetchProducts} from "@/assets/utils/request"




const HotTub = async () => {

    const product = await fetchProducts()
   const cubes = product.filter(product => product.type.includes("Hot Tub"))
   const recentProducts = cubes.sort(()=> Math.random())
   console.log(cubes)
    // .slice(0, )
     return (
    <>
    <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
        <h1 className="text-3xl text-center font-bold font-playfair mb-2 mt-10">
               Hot Tubs
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
{recentProducts === 0 ? (<p>No Products found</p>):
recentProducts.map((product, i)=>(
    <HotTubCard key={i} product= {product} />
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

export default HotTub
