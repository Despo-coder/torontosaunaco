import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image"


const ColdPlunge = () => {
  return (
    <div className="flex justify-center items-center h-screen">
     <TooltipProvider>
  <Tooltip>
    <TooltipTrigger>See Larger Image</TooltipTrigger>
    <TooltipContent>
    <Image src={'/images/neptune.png'} width={250} height={260} alt='test' priority={true} style={{width: 'auto'}}/>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

    </div>
  )
}

export default ColdPlunge
