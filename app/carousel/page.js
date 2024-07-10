'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Image from 'next/image';

const page = () => {
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
      <div className="embla__viewport mb-24 max-w-xl mx-auto mt-12 h-64 rounded-xl" ref={emblaRef}>
        <div className="embla__container h-full border border-red-200 rounded-xl">
          <div className="embla__slide flex items-center justify-center"><Image src='/SliderImages/barrel.jpg ' width={250} height={250} sizes='100vw' /></div>
          <div className="embla__slide flex items-center justify-center"><Image src='/SliderImages/CTC.jpg ' width={250} height={250} sizes='100vw' /></div>
          <div className="embla__slide flex items-center justify-center"><Image src='/SliderImages/PCH.jpg ' width={250} height={250} sizes='100vw' /></div>
          <div className="embla__slide flex items-center justify-center"><Image src='/SliderImages/lunas.jpg ' width={250} height={250} sizes='100vw' /></div>
          <div className="embla__slide flex items-center justify-center"><Image src='/SliderImages/Neptunes.jpg ' width={250} height={250} sizes='100vw' /></div>
          <div className="embla__slide flex items-center justify-center"><Image src='/SliderImages/PCT.jpg ' width={250} height={250} sizes='100vw' /></div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[-48px] flex justify-between md:flex-col md:top-1/2 md:left-[20px] md:transform md:-translate-y-1/2 md:inset-x-auto lg:flex-col lg:top-2/3 lg:left-[140px] lg:transform lg:-translate-y-1/2 lg:inset-x-auto">
        <button
          
          onClick={scrollPrev}
        >
         <FaAngleLeft size={40}/>
        </button>
        </div>
        <div className="absolute right-2  bottom-[-40px] flex justify-between md:flex-col md:top-1/2 md:right-[20px] md:transform md:-translate-y-1/2 md:inset-x-auto lg:flex-col lg:top-2/3 lg:right-[140px] lg:transform lg:-translate-y-1/2 lg:inset-x-auto">
        <button
          className=''
          onClick={scrollNext}
        >
        <FaAngleRight size={40} />
        </button>
      </div>
    </div>
  )
}
export default page
