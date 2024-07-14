'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const CarouselDynamic = ({images}) => {
  
  //const test = Object.values(images).map(p => p.images)
 // console.log(images)
  //  console.log(test)
  const options = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options, [Autoplay({
      delay: 4000,
      stopOnInteraction: false
    })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  return (
    <div className='relative embla'>
      <div className="embla__viewport mb-24 mx-auto mt-12 w-full md:w-2/3 lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] rounded-xl" ref={emblaRef}>
        <div className="embla__container h-full">
        {images.map((image, index) => (
  <div key={index} className="embla__slide flex items-center justify-center relative">
    <Link href={`/saunas/${image.id}`}>
    <Image
      src={image.image}
      width={250}
      height={250}
      sizes="100vw"
      alt={`Slide Image ${index + 1}`}
      className="rounded-xl object-cover h-full w-full"
    />
    </Link>
    <div className=' absolute flex flex-col bg-black/50 p-1 rounded-lg bottom-10 left-10 '>
    <span className='font-playfair text-white text-lg'>{image.name}</span>
    <span className='font-roboto text-white text-xs font-bold'>
  ${image.price ? image.price.toLocaleString() : '0'}.00
    </span>
    </div>
    
  </div>
))}
      </div>
      </div>
      <div className="absolute inset-x-0 bottom-1/2 flex justify-between md:flex-col md:top-1/2 md:left-[20px] md:transform md:-translate-y-1/2 md:inset-x-auto lg:flex-col lg:top-1/2 lg:left-[20px] lg:transform lg:-translate-y-1/2 lg:inset-x-auto">
        <button onClick={scrollPrev}>
          <FaAngleLeft size={40} className='text-[#FFA726]'/>
        </button>
      </div>
      <div className="absolute right-2 bottom-1/2 flex justify-between md:flex-col md:top-1/2 md:right-[20px] md:transform md:-translate-y-1/2 md:inset-x-auto lg:flex-col lg:top-1/2 lg:right-[20px] lg:transform lg:-translate-y-1/2 lg:inset-x-auto">
        <button onClick={scrollNext}>
          <FaAngleRight size={40} className='text-[#FFA726]'/>
        </button>
      </div>
    </div>
  )
}
export default CarouselDynamic
