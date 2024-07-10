'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';


const datafile = [
    {
      name: 'Cube Saunas',
      image: '/SliderImages/770CPW.jpg'
     
    },
    {
      name: 'Luna Saunas',
      image: 'https://images.unsplash.com/photo-1517496522623-80ceb1927c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      
    },
    {
      name: 'Canadian Timber',
      image: 'https://images.unsplash.com/photo-1517496522623-80ceb1927c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
     
    },
    {
      name: 'Indoor Saunas',
      image: 'https://images.unsplash.com/photo-1517496522623-80ceb1927c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      
    },
    {
      name: 'Barrel Saunas',
      image: 'https://images.unsplash.com/photo-1517496522623-80ceb1927c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      
    },
    {
      name: 'Cold Plunes',
      image: 'https://images.unsplash.com/photo-1517496522623-80ceb1927c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      
    },
]


const SwiperSlides = () => {
 

   
    //     if (typeof window !== 'undefined') {
    //       const swiper = new Swiper('swiper', {
    //         slidesPerView: 1,
    //         spaceBetween: 30,
    //         loop: true,
    //         autoplay: {
    //           delay: 4000,
    //           disableOnInteraction: false,
    //         },
    //         breakpoints: {
    //           640: {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //           },
    //           768: {
    //             slidesPerView: 4,
    //             spaceBetween: 40,
    //           },
    //           1024: {
    //             slidesPerView: 5,
    //             spaceBetween: 50,
    //           },
    //         },
    //         freeMode: true,
    //         // modules: [Navigation, Pagination, Autoplay],
    //       });
    
    //     //   return () => {
    //     //     swiper.destroy();
    //     //   };
    //     }
    //   }, []);
    
  return (
    <div className='h-96'>
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
{datafile.map((slide, i) => (
    <SwiperSlide key={i} className="bg-cover bg-center h-full" style={{backgroundImage: `url(${slide.image})`}}>
      <div className="flex justify-center items-center h-full">
        <div className="px-4 py-6">
          <h2 className="text-4xl font-bold mb-4 text-center text-black">
            {slide.name}
          </h2>
          {/* <Link href={`/saunas/${slide.id}`}>
            <Button className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View All Products</Button>
          </Link> */}
        </div>
      </div>
    </SwiperSlide>
  )
)}

        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>

{/* 
      <div className="swiper">
 
  <div className="swiper-wrapper">
   
   {datafile.map((slide, i) => (
      <div className="swiper-slide" key={i}>
        <div className="bg-cover bg-center h-96" style={{backgroundImage: `url(${slide.image})`}}>
          <div className="flex justify-center items-center h-full">
            <h1 className="text-white text-2xl">{slide.name}</h1>
          </div>
        </div>
      </div>
    ))} */}
    {/* <div className="swiper-slide">Slide 1</div>
    <div className="swiper-slide">Slide 2</div>
    <div className="swiper-slide">Slide 3</div>
    ... */}
  {/* </div> */}
 
  {/* <div className="swiper-pagination"></div> */}

  {/* <!-- If we need navigation buttons -->
  <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div> */}

  {/* <!-- If we need scrollbar -->
  <div className="swiper-scrollbar"></div> */}
{/* </div> */}
    </div>
  )
}

export default SwiperSlides
