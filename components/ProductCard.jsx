'use client'
import Image from "next/image"
import Link from "next/link"


const ProductCard = ({product}) => {
  
 
const saunaLink = `/saunas/${product._id}`
const colpluneLink = `/cold-plunge/${product._id}`
  return (
    <>
           <div className="rounded-xl overflow-hidden shadow-xs bg-white">
          {product.type !=='Cold Plunge' ? (<Link href={saunaLink}>
            <img src={product.images[0]} alt='test' className="h-900 w-900 object-cover"/>
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800 font-playfair">{product.name}</h3>
              <div className="flex items-center justify-between">
              <h4 className="text-lg text-gray-800 font-bold font-roboto mt-2">${`${product.price.toLocaleString()}.00`}</h4>
            <button className="bg-black text-white text-center  px-4 rounded-lg hover:bg-gray-700">Buy</button>
            </div></div>
          </Link>):(<Link href={colpluneLink}>
            <img src={product.images[0]} alt='test' className="h-900 w-900 object-cover"/>
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800 font-playfair">{product.name}</h3>
              <div className="flex items-center justify-between">
              <h4 className="text-lg text-gray-800 font-bold font-roboto mt-2">${`${product.price.toLocaleString()}.00`}</h4>
            <button className="bg-black text-white text-center  px-4 rounded-lg hover:bg-gray-700">Buy</button>
            </div></div>
          </Link>)}
          </div>
    </>
   
  )
}
export default ProductCard