'use client'
import Image from "next/image"
import Link from "next/link"


const HotTubCard = ({product}) => {

  return (

    <div>
      {product.type ==='Hot Tub'  && (
        // <Link href={`/cold-plunge/${product._id}`}> </Link>
        <div className="rounded-xl">
          <div className="relative aspect-square overflow-hidden">
                 <Image 
                   src={product.images[0]} 
                   alt={product.name} 
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                   width={450}
                   height={450}
                 />
               </div>
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
         
          <Link href={`/hot-tub/${product._id}`}>
                  <div
                    className="px-3 py-2 border border-gray-300 text-black bg-white rounded-lg hover:bg-black hover:text-white shadow-sm transition-all ease-in duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    
                    View More
                 
                  </div>
                  </Link>
                
        </div>
      </div>

          </div>
      
     )}

    </div>
  )
}

export default HotTubCard
