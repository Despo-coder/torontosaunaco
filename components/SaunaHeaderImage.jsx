'use client'
import Image from 'next/image'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const SaunaHeaderImage = ({ images }) => {
  const options = { loop: true };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    options, [Autoplay()]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  return (
    <div className='embla mt-12 max-w-4xl '>
      <div className='embla__viewport h-[400px] w-full  ' ref={emblaRef}>
        <div className='embla__container h-full'>
          {images.map((image, index) => (
            <div key={index} className='embla__slide'>
              <Image 
                src={image}
                height={400}
                width={600}
                priority={true}
                alt='Sauna Image'
                style={{ objectFit: 'contain' }} // Ensure images are not cut
              />
            </div>
          ))}
        </div>
      </div>

      <div className='mt-3 flex justify-between'>
        <button
          className='w-20 bg-black px-2 py-1 text-sm text-white'
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className='w-20 bg-black px-2 py-1 text-sm text-white'
          onClick={scrollNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default SaunaHeaderImage
