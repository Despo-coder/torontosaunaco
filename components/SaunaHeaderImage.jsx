'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import Image from 'next/image';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/autoplay'

const SaunaHeaderImage = ({images}) => {

const [thumbsSwiper, setThumbsSwiper] = useState(null)
const shouldLoop = images.length > 1

  return (
    <>
    <section>
      <div className='container mx-auto'>
        <Swiper
          loop={shouldLoop}
          spaceBetween={12}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className='mt-1 h-[250px] w-1/3 rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center bg-slate-700 rounded-xl shadow-xl'>
               
                <Image
                  src={image}
                  alt={image}
                  width={300}
                  height={300}
                  priority={true}
                  className='rounded-xl border-4 border-white'
                />
              
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={shouldLoop}
          spaceBetween={6}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs mt-1 h-32 w-full rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center gap-4 justify-between '>
              <button >
                <Image
                  src={image}
                  alt={image}
                  width={0}
                  height={0}
                  sizes='25vh'
                  className='block h-full w-full object-cover rounded-xl shadow-xl'
                />
              </button>
              </div>
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>     
    </>
  )
}

export default SaunaHeaderImage
