'use client'
import Image from "next/image"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

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
         
          <Link href={`/`} className="h-[36px] bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-center text-sm">
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AccessoriesCard
