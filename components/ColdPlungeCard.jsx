'use client'
import Image from "next/image"
import Link from "next/link"
import {CldImage} from 'next-cloudinary'

const ColdPlungeCard = ({product}) => {
 //console.log(product)
  return (
    <div>
<div className="rounded-xl">
          <img  
       src={product.images[0]}
      //  width={900}
      //  height={900}
       alt='test'
      //  priority={true}
       className="h-900 w-900 object-cover"
       />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800 font-playfair">{product.name}</h3>
              <div className="flex items-center justify-between">
              <h4 className="text-lg text-gray-800 font-bold font-roboto mt-2">${product.price.toLocaleString()}.00</h4>
             {product.type === "Cold Plunge" ? ( <Link href={`/cold-plunge/${product._id}`} >
            <button className="bg-black text-white text-center  px-4 rounded-lg hover:bg-gray-700">Buy</button>
            </Link>):( <Link href={`/saunas/${product._id}`} >
            <button className="bg-black text-white text-center  px-4 rounded-lg hover:bg-gray-700">Buy</button>
            </Link>)}
          
            </div>
            </div>

          </div>
    </div>
  )
}

export default ColdPlungeCard
