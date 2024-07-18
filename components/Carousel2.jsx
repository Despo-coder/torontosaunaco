'use client'
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '@/assets/utils/request';
import CarouselDynamic2 from './CarouselDymanic2';

const CarouselContainer = () => {
    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fetchProducts()
            const filteredProducts = Object.values(data).filter((x) => x.type !== 'Cold Plunge');
            
           
            const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 10);
      
            const items = selected.map(product => ({
              id: product._id,
              image: product.images[0],
              name: product.name,
              price: product.price
            }));
            
            setCarouselItems(items)
          } catch (error) {
            console.error(error)
          }
        }
        

        
        fetchData()
      }, [])
    return (
        <CarouselDynamic2 images={carouselItems} />
    );
};

export default CarouselContainer;
