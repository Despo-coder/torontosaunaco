'use client'
import Image from "next/image"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "./ui/button"
import { addToCart } from "@/redux/slices/cartSlice"


const handleSubmit = async () => {
 console.log("Here")
  const data = {
    // name: e.target.name.value,
    // email: e.target.email.value,
    // phone: e.target.phone.value,
    // message: e.target.message.value,
    // subject: product.name,
     id: product._id,
     name: product.name,
     price: product.price,
  }
  console.log(data)
}

const AccessoriesCard = ({ product }) => {
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
        <div className="flex flex-col items-center gap-2">
         <Button type='submit' variant="secondary" className="bg-slate-700 text-white rounded-xl hover:bg-slate-800" onSubmit={handleSubmit}>
           <Link href={`#`} >
            Add To Cart
           </Link>
           </Button>
        </div>
      </div>
    </div>
  )
}

export default AccessoriesCard
