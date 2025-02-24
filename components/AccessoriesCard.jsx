'use client'
import Image from "next/image"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { addToCart } from "@/redux/slices/cartSlice"
import { useDispatch } from "react-redux"

const AccessoriesCard = ({ product }) => {
  const dispatch = useDispatch(); 

  const handleSubmit = () => {
    const data = {
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    };
    dispatch(addToCart(data));
  }

  return (
     <div className="p-2 bg-gray-50 shadow-lg rounded-lg transition-transform hover:scale-105">
      
      <div className="grid grid-cols-1  gap-8  md:gap-24 text-center mb-4 mt-4">
        
        {/* Image with Tooltip */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex justify-center items-center">
                <Image 
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg object-cover shadow-md"
                  width={200}
                  height={200}
                />
              </div>
            </TooltipTrigger>
            {/* <TooltipContent>
              <Image src={product.image} width={250} height={260} alt={product.name} className="rounded-lg" />
            </TooltipContent> */}
          </Tooltip>
        </TooltipProvider>

        {/* Name and Price */}
        {/* <div className="flex flex-col items-center">
          <h6 className="text-lg font-rubik ">{product.name}</h6>
          <span className="text-lg text-gray-600">${product.price}</span>
        </div> */}

        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
  {/* Name and Price */}
  <div className="flex flex-col items-center md:items-start">
    <h1 className="text-md font-rubik">{product.name}</h1>
    <span className="text-lg text-gray-600">${product.price}</span>
  </div>

  {/* Buttons */}
  <div className="flex justify-center items-center gap-4">
    <button 
      type="button" 
      className="border border-gray-300 text-gray-700 font-medium rounded-lg py-3 px-2 hover:bg-gray-100 transition duration-300"
      onClick={handleSubmit}
    >
      Add To Cart
    </button>
    <Link href="/cart">
      {/* Uncomment if needed
      <button 
        type="button" 
        className="border border-gray-300 text-gray-700 font-medium rounded-lg py-3 px-4 hover:bg-gray-100 transition duration-300"
      >
        View Cart
      </button>
      */}
    </Link>
  </div>
</div>

      </div>
     </div>
  )
}

export default AccessoriesCard;
