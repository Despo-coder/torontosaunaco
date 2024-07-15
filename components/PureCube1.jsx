'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchProducts } from "@/assets/utils/request";


export default function SimpleSlider() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const cubes = product.filter(product => product.type === "Pure Cube")
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProducts()
            setProduct(data)
            
            setLoading(false)
        }
        fetchData()
        if (cubes.length > 0) {
          setCurrentSlide(cubes.length + 1);
        }
    }, [])

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      //arrows: true,
      afterChange: (index) => setCurrentSlide(index),
    };


    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
<div className="slider-container">
    <Slider {...settings} initialSlide={currentSlide}>
      {cubes.map((x, index) => (
        <div key={index}>
        <div className="image-wrapper">
  <Image 
    src={x.images[0]}
    alt={x.name || "Product Image"}
    layout="fill"
    objectFit="cover"
  />
</div>
        </div>
      ))}
    </Slider>
            </div>
            <div className="flex flex-col items-center justify-center">
            <div className="product-info sm:mt-4 md:mt-6 lg:mt-8">
                <h2 className="text-2xl font-bold mb-4">{cubes[currentSlide]?.name}</h2>
                <p className="text-gray-600">{cubes[currentSlide]?.description}</p>
            </div>
            </div>
        </div>
    );
  }