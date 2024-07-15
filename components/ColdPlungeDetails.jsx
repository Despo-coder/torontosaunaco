'use client'
import { useState , useEffect } from "react"
import Image from "next/image"
import { Button } from "./ui/button";
import Link from "next/link";

const ColdPlungeDetails = ({product}) => {
const [cost, setCost] = useState(product.price);
    
  return (
    <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              {/* <div className="text-gray-500 mb-4">{product.name}</div> */}
              <div className="flex justify-between">
              <h1 className="text-3xl font-bold mb-4 font-playfair">{product.name}</h1>
             
              <h3 className="text-2xl font-semibold mb-4 font-playfair">${cost.toLocaleString()}.00</h3>
              </div>
              
            
    <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1 border-black border-[1px]">
 
    <div className="container mx-auto px-6 pb-2 flex items-center justify-center">
  <Image 
  // C:\TorontoSauna\torontosaunco\assets\images\new_logo_1 copy 2.jpg
    src="/images/logo.jpg"
    alt="Toronto Sauna Company Logo"
    width={50}
    height={50}
  />
  <div className="flex flex-col">
  <h3 className="ml-4 text-xl font-bold">The Toronto Sauna Company</h3>
  <h6 className="sm:ml-5 md:ml-5 lg:ml-5 text-xs " >copyright @2022</h6>
  </div>
  
</div>
    </section>

            </div>
            <div className="bg-white p rounded-lg shadow-md mt-6">
              <div id="map">
              <Button className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-xl w-full">Add To Cart</Button>
              </div>
            </div>
          </main>
  )
}

export default ColdPlungeDetails
