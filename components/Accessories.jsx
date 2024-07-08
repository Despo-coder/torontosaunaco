import AccessoriesCard from "./AccessoriesCard"
import Link from "next/link"
import { Button } from "./ui/button"
import {fetchAccessories} from "@/assets/utils/request"




const Accessories = async () => {

    const product = await fetchAccessories()
    const recentProducts = product
    // .sort(()=> Math.random())
    // .slice(0, 5)
  return (
    <>
    <section className="px-6 py-6 ">
        <div className="container lg:container m-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-black">
                Accessories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2">
{recentProducts === 0 ? (<p>No Products found</p>):
recentProducts.map((product, i)=>(
    <AccessoriesCard  key={i} product= {product} />
))

}
            </div>
        </div>
     
    </section>
    <section className="m-auto max-w-lg my-10 px-6">
{/* <Link href="/saunas">
    <Button className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View All Products</Button>
</Link> */}
    </section>
    </>
  )
}

export default Accessories
