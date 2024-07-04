import Image from "next/image"
import Link from "next/link"

const ProductCard = ({product}) => {
 
  return (
    <div>
      <div className="rounded-xl shadow-md relative bg-slate-100">
        <div className="flex justify-center mx-auto items-center p-4 overflow-hidden">
        <Image src={`${product.images[0]}`}alt={product.name} className="rounded-xl ml-4" width={200} height={200} sizes="100vh" />
        <Image src={`${product.images[1]}`}alt={product.name} className="rounded-xl ml-4" width={200} height={200} />
        </div>
     
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                {/* <div className="text-gray-600">{product.type}</div> */}
                <div className="text-left flex justify-normal gap-4 items-center font-bold">
                <h3 className="text-xl text-left">{product.name}</h3>
               <span className="font-light">${product.price}</span> 
                </div>
               
                <div className="text-gray-600">{product.description}</div>
                {/* Insert a Horizontal Line */}
                {/* <div className="border-b border-gray-300 my-4"></div> */}
                
              </div>
              {/* <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                ${getRates()}
              </h3> */}

              {/* <div className="flex  gap-4 text-gray-500 mb-4">
                <p>
                  <i className="fa-solid fa-bed"></i> 2-4
                  <span className="md:hidden lg:inline">{" "}Seats Available</span>
                </p> */}
                {/* <p>
                  <i className="fa-solid fa-bath"></i> 2
                  <span className="md:hidden lg:inline">Baths</span>
                </p> */}
                {/* <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  {product.square_feet}<span className="md:hidden lg:inline">{" "}sqft</span>
                </p>
              </div> */}
             
              <div
                className="flex items-center gap-4 text-green-900 text-sm mb-4"
              >
               
                {/* <span className="text-lg mr-1">Available Views:</span> */}
                {/* {views?.panoramic && <p><i className="fa-solid fa-money-bill"></i>{`Panoramic: $${views.panoramic}`} </p>} */}
                {/* {views?.regular && <p><i className="fa-solid fa-money-bill"></i> {`$${views.regular}`}</p>} */}
                {/* {views?.standard && <p><i className="fa-solid fa-money-bill"></i> {` Standard: $${views.standard}`}</p>} */}
              </div>
              <div
                className="flex items-center gap-4 text-green-900 text-sm mb-4"
              >
                {/* <span className="text-lg mr-1">Wood Type:</span>
                {wood_type && wood_type?.KWC ?(<p>Knotty Cedar</p>):(<></>)} 
                {wood_type.CC && <p> Clear Cedar </p>}
               */}
              </div>
              <div
                className="flex items-center gap-4 text-green-900 text-sm mb-4"
              >
                {/* <span className="text-lg mr-1">Stove Choice:</span>
                {wood_type && wood_type ? (<p>Knotty Cedar</p>):(<></>)} 
                {wood_type.CC && <p> Clear Cedar </p>} */}
              
              </div>

              <div className="border border-black-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  {/* <i
                    className="fa-solid fa-location-dot text-lg text-orange-700"
                  ></i> */}
                  {/* <span className="text-orange-700"> Boston MA </span> */}
                </div>
                <Link href={`/saunas/${product._id}`}>
                 <span className="h-[36px] bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-center text-sm">
                 Buy
                 </span>
                </Link>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ProductCard
