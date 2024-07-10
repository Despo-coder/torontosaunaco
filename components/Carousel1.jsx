'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Image from 'next/image';

const Carousel1 = () => {
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
          <div className="embla__slide flex items-center justify-center">
            <Image src='/SliderImages/barrel.jpg' width={0} height={0} sizes='100vw' alt='Slide Image' className="rounded-xl object-cover h-full w-full" />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image src='/SliderImages/CTC.jpg' width={0} height={0} sizes='100vw' alt='Slide Image' className="rounded-xl object-cover h-full w-full" />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image src='/SliderImages/PCH.jpg' width={0} height={0} sizes='100vw' alt='Slide Image' className="rounded-xl object-cover h-full w-full" />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image src='/SliderImages/lunas.jpg' width={0} height={0} sizes='100vw' alt='Slide Image' className="rounded-xl object-cover h-full w-full" />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image src='/SliderImages/Neptunes.jpg' width={0} height={0} sizes='100vw' alt='Slide Image' className="rounded-xl object-cover h-full w-full" />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image src='/SliderImages/PCT.jpg' width={0} height={0} sizes='100vw' alt='Slide Image' className="rounded-xl object-cover h-full w-full" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[-48px] flex justify-between md:flex-col md:top-1/2 md:left-[20px] md:transform md:-translate-y-1/2 md:inset-x-auto lg:flex-col lg:top-1/2 lg:left-[20px] lg:transform lg:-translate-y-1/2 lg:inset-x-auto">
        <button onClick={scrollPrev}>
          <FaAngleLeft size={40} />
        </button>
      </div>
      <div className="absolute right-2 bottom-[-40px] flex justify-between md:flex-col md:top-1/2 md:right-[20px] md:transform md:-translate-y-1/2 md:inset-x-auto lg:flex-col lg:top-1/2 lg:right-[20px] lg:transform lg:-translate-y-1/2 lg:inset-x-auto">
        <button onClick={scrollNext}>
          <FaAngleRight size={40} />
        </button>
      </div>
    </div>
  )
}
export default Carousel1
