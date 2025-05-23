"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
// import { useParams } from "next/navigation";
import Slider from "react-slick";
import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchProduct } from "@/assets/utils/request";

export default function SimpleSlider({ id }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        const data = await fetchProduct(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };
  if (loading) return <div>Loading...</div>;

  if (!product || product.length === 0) return <div>No product found</div>;

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-[6px] p-4 md:gap-8 mt-8 px-4 py-6">
      <div>
        <Slider {...settings}>
          {product.images.map((image, index) => (
            <div key={index}>
              <div className="image-wrapper">
                <Image
                  src={image}
                  alt={product.name || "Product Image"}
                  fill
                  priority={index === 0}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="product-info">
          <h2 className="text-2xl font-bold mb-4 font-playfair">
            {product.name}
          </h2>
          <h2 className="font-semibold">
            ${`${product.price.toLocaleString()}.00`}
          </h2>
          <p className="text-gray-600 font-roboto">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
