import ColdPlungeCard from "./ColdPlungeCard"
import Link from "next/link"
import { Button } from "./ui/button"
import {fetchProducts} from "@/assets/utils/request"




const Cold_Plunge = async () => {

    const product = await fetchProducts()
   const cubes = product.filter(product => product.type.includes("Cold Plunge"))
  //  const recentProducts = cubes.sort(()=> Math.random())
    // .slice(0, )
   // console.log(cubes)
     return (
    <>
    <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
        <h1 className="text-3xl text-center font-bold font-playfair mb-2 mt-4">
               Cold Tubs
               
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
{cubes === 0 ? (<p>No Products found</p>):
cubes.map((product, i)=>(
    <ColdPlungeCard key={i} product= {product} />
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

export default Cold_Plunge
