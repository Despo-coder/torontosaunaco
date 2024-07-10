'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Image from 'next/image';

const Carousel1 = ({images}) => {
    
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
  <div key={index} className="embla__slide flex items-center justify-center">
    <Image
      src={image}
      width={0}
      height={0}
      sizes="100vw"
      alt={`Slide Image ${index + 1}`}
      className="rounded-xl object-cover h-full w-full"
    />
  </div>
))}
         
          {/* <div className="embla__slide flex items-center justify-center">
            <Image src='/SliderImages/7x10wP.jpg' width={0} height={0} sizes='100vw' alt='Slide Image' className="rounded-xl object-cover h-full w-full" />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image src='/SliderImages/7x11-classic_900.jpg' width={0} height={0} sizes='100vw' alt='Slide Image' className="rounded-xl object-cover h-full w-full" />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image src='/SliderImages/7x12wCR.jpg' width={0} height={0} sizes='100vw' alt='Slide Image' className="rounded-xl object-cover h-full w-full" />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image src='/SliderImages/7x12WP.jpg' width={0} height={0} sizes='100vw' alt='Slide Image' className="rounded-xl object-cover h-full w-full" />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image src='/SliderImages/CLASSIC6x6.jpg' width={0} height={0} sizes='100vw' alt='Slide Image' className="rounded-xl object-cover h-full w-full" />
          </div> */}
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
export default Carousel1
