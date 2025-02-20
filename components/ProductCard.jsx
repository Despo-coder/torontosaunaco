'use client'
import Image from "next/image"
import Link from "next/link"


const ProductCard = ({product}) => {
  
 
const saunaLink = `/saunas/${product._id}`
const colpluneLink = `/cold-plunge/${product._id}`
///console.log(product)
  return (
    <>
           <div className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
  {product.type !== 'Cold Plunge' ? (
    <Link href={saunaLink} className="block focus:outline-none focus:ring-2 focus:ring-black/20">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 bg-white">
        <h3 className="font-light font-rubik text-gray-900  mb-2" style={{fontSize: '1.25rem', lineHeight: '1.75rem'}}>
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className=" font-extralight font-rubik text-gray-900" style={{fontSize: '1.35rem', lineHeight: '1.25rem'}}>
              ${product.price.toLocaleString()}
              {/* <span className="text-lg font-normal text-gray-500 ml-1">CDN</span> */}
            </span>
          </div>
          <Link href={saunaLink}>
          <button 
  className="px-3 py-2 border border-gray-300 text-black bg-white rounded-lg  hover:bg-black hover:text-white shadow-sm transition-all ease-in duration-300
             focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
 
>
  View More
</button>
</Link>

        </div>
      </div>
    </Link>
  ):(<Link href={colpluneLink}>
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