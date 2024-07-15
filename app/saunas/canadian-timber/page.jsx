import CanadianTimber from "@/components/CanadianTimber"
import Image from "next/image"

const page = () => {
  return (
    <div>
       <div>
          <section className="px-4 py-2">
          <section className="modern-saunas py-4">
          <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:gap-2">
           
     
    
    {/* Image */}
            <div className="w-full md:w-[70%]">
              <Image 
              
              src="https://res.cloudinary.com/dw4ev5whz/image/upload/v1721007667/torontosaunaco/CTC/Canadian%20Timber/IMG-20240714-WA0013_ptdiat.jpg" 
              alt="Modern Sauna Image" 
              className="rounded-xl object-cover h-full w-full" 
              width={0}
              height={0}
              sizes='100vh'
              />
              
            </div>


      {/* Paragraph */}
      <div className="text-center md:text-right w-full md:w-1/3 mb-2 md:mb-0">
      <h2 className="text-4xl font-bold mb-4 text-center text-black">
                Canadian Timber Saunas
            </h2>
              <p className="text-gray-700 leading-relaxed mb-2 font-roboto">
              The Canadian Timber Collection is an economically priced selection of our best products. Enjoy the unique designs and high quality, built with eastern white cedar and shipped in easy assemble kits.
              </p>
            </div>
          </div>
        </section>
            </section>
        </div>
      <CanadianTimber />
    </div>
  )
}

export default page
