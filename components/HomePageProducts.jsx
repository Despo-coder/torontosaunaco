import SwiperSlides from "./SwiperSlides"
import Link from "next/link"
import { Button } from "./ui/button"
import {fetchProducts} from "@/assets/utils/request"

const HomePageProducts = async () => {

    const product = await fetchProducts()
    const recentProducts = product.filter((product)=> product.type !=='Cold Plunge').sort((a, b) => Math.random() - 0.5).slice(0, 10);
    //console.log(recentProducts)
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
    <SwiperSlides key={i} product= {product} />
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
