'use client'
import Image from "next/image"
import Link from "next/link"
import {CldImage} from 'next-cloudinary'

const ColdPlungeCard = ({product}) => {
 //console.log(product)
  return (
    <div>
      <div className="rounded-xl shadow-md relative bg-slate-100">
        <div className=" relative flex justify-center mx-auto items-center p-4 overflow-hidden">
        {/* <Image src={`/video?url=${encodeURIComponent(product.type)}`} className="rounded-xl ml-4" width={200} height={200} sizes="100vw"  style={{width:'auto', height:'auto'}}/>   */}
        <Image src={`${product.images[0]}`}alt={product.name} className="rounded-xl ml-4" width={150} height={150} sizes="100vw" style={{width:'auto', height:'auto', maxWidth:'100%'}}/>
        <div className='absolute left-8 top-6 bg-slate-800 text-white font-semibold p-1 rounded-xl text-xs'>
        {product.series || 'Default Info'} Series 
          </div>
        </div>
     
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                {/* <div className="text-gray-600">{product.type}</div> */}
                <div className="text-left flex justify-normal gap-4 items-center font-bold">
                <h3 className="text-lg text-left">{product.name}</h3>
                <span className="font-medium">${product.price.toLocaleString()}.00</span> 
                </div>
               
                <div className="text-gray-600">{product.description}</div>
                {/* Insert a Horizontal Line */}
                {/* <div className="border-b border-gray-300 my-4"></div> */}
                
              </div>
             
              {/* <div
                className="flex items-center gap-4 text-green-900 text-sm mb-4"
              >
               Series: <span className=" text-lg font-semibold">{product.series}</span>
              </div> */}
              <div
                className="flex items-center gap-4 text-green-900 text-sm mb-4"
              >
                Collection: {product.collectionType}
               
              </div>
              <div
                className="flex items-center gap-4 text-green-900 text-sm mb-4"
              >
                Dimensions: {product.dimension}
                {/* <span className="text-lg mr-1">Stove Choice:</span>
                {wood_type && wood_type ? (<p>Knotty Cedar</p>):(<></>)} 
                {wood_type.CC && <p> Clear Cedar </p>} */}
              
              </div>

              <div className="border border-black-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                 
                </div>
                {/* <Link href={`/saunas/${product._id}`}>
                 <span className="h-[36px] bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-center text-sm">
                 Learn More
                 </span>
                </Link> */}
              </div>
            </div>
          </div>
    </div>
  )
}

export default ColdPlungeCard
