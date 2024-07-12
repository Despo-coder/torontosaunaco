'use client'
import Image from "next/image"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { button } from "./ui/button"
import { addToCart } from "@/redux/slices/cartSlice"
import { useDispatch } from "react-redux"




const AccessoriesCard = ({ product }) => {
  const dispatch = useDispatch(); 

  const handleSubmit = async () => {
 
    
    const data = {
     id: product._id,
     name: product.name,
     price: product.price,
     image: product.image,
     qty:1
   };
   
   dispatch(addToCart(data));
   console.log(data)
   }
  


  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-2">
        {/* Image */}
      
        <TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
    <div className="flex justify-center items-center">
    <Image 
            src={`${product.image}`}
            alt={product.name}
            className="rounded-xl"
            width={50}
            height={50}
            sizes="50vw"
            style={{ width: '150px', height: '150px' }} 
          />
            </div>
      </TooltipTrigger>
    <TooltipContent>
    <Image src={`${product.image}`} width={250} height={260} alt='test' priority={true} style={{width: 'auto'}}/>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
          
      
        
        {/* Name and Price */}
        <div className="flex flex-col items-center justify-center">
            <div>
            <h6 className="font-light">{product.name}</h6>
            </div>
          
          <div>
          <span className="font-light text-lg">${product.price}</span>
          </div>
          
        </div>

        {/* Links */}
        <div className="flex justify-center items-center gap-2">
        <button type='button' variant="secondary" className="bg-black text-white rounded-xl py-2 px-2 hover:bg-slate-800" onClick={handleSubmit}>
            Add To Cart
          </button>
          <Link href={'/cart'}>
          <button type='button' variant="secondary" className="bg-black text-white rounded-xl py-2 px-2 hover:bg-slate-800" >
            View Cart
          </button>
        </Link>
        {/* <button type='button' variant="secondary" className="bg-slate-700 text-white rounded-xl py-2 px-2 hover:bg-slate-800" >
            View Cart
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default AccessoriesCard
