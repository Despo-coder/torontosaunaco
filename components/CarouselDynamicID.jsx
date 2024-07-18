'use client';
import React, { useEffect, useRef, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';
import Link from 'next/link';


const CarouselDynamicID = ({id}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setProduct] = useState(null)
    const [loading, setLoading] = useState(true);
    const startX = useRef(0);
    const currentX = useRef(0);
    const isDragging = useRef(false)



    


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [currentIndex]);


    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const handleMouseDown = (e) => {
        startX.current = e.pageX;
        isDragging.current = true;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        currentX.current = e.pageX;
    };

    const handleMouseUp = () => {
        if (!isDragging.current) return;
        const distance = currentX.current - startX.current;
        if (distance > 50) {
            prevSlide();
        } else if (distance < -50) {
            nextSlide();
        }
        isDragging.current = false;
    };

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
        isDragging.current = true;
    };

    const handleTouchMove = (e) => {
        if (!isDragging.current) return;
        currentX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!isDragging.current) return;
        const distance = currentX.current - startX.current;
        if (distance > 50) {
            prevSlide();
        } else if (distance < -50) {
            nextSlide();
        }
        isDragging.current = false;
    };


    return (
        <>
     
            <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group' >
                <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
                  
                    {images && images.length > 0 && (
                       
                            <div className='relative w-full h-full'>
                                <Image
                                    src={images[currentIndex]?.image || ''}
                                    alt={images[currentIndex]?.name || ''}
                                    layout='fill'
                                    objectFit='contain' // Adjust to 'contain' to fit the image within the container
                                    className='rounded-2xl'
                                />
                            </div>
                       
                    )}
                    <div className='absolute flex flex-col bg-black/50 p-1 rounded-lg bottom-20 left-40'>
                        <span className='font-playfair text-white text-lg'>{images[currentIndex]?.name}</span>
                        <span className='font-roboto text-white text-xs font-bold'>
                            ${images[currentIndex]?.price ? images[currentIndex]?.price.toLocaleString() : '0'}.00
                        </span>
                    </div>
                </div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex justify-center py-2'>
                    {images.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-blue-500' : 'text-gray-500'}`}
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CarouselDynamicID;
