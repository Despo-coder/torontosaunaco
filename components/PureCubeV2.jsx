'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import {fetchProducts} from "@/assets/utils/request"
import  SimpleSlider from "./PureCube1"
import React, { useState, useEffect } from 'react';




const PureCubeV2 = async () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])

   // const product = await fetchProducts()
    console.log(product)
    if (!product || !Array.isArray(product)) {
        return <p>No products available</p>
    }

   const cubes = product.filter(product => product.type === "Pure Cube")
   const recentProducts = cubes.sort((a, b) => (a.price || 0) - (b.price || 0));

   useEffect(() => {
    const fetchData = async () => {
        const data = await fetchProducts()
        setProduct(data)
        console.log(data)
        setLoading(false)
    }
    fetchData()
}, [])

if (loading) {
    return <p>Loading...</p>
}

    // .slice(0, )
     return (
    <>
    <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
{recentProducts === 0 ? (<p>No Products found</p>):
recentProducts.map((product, i)=>(
   <SimpleSlider  key={i} product={product} />
   
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

export default PureCubeV2
