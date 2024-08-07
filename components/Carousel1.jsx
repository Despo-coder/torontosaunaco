'use client'
import React, { useState, useEffect } from 'react'

import { fetchProducts } from '@/assets/utils/request';
import CarouselDynamic from './CarouselID';

const Carousel1 = () => {
const [carouselItems, setCarouselItems] = useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await fetchProducts()
    
         const items = Object.values(data).filter((x) => x.type !== 'Cold Plunge').map(product => ({
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

console.log(carouselItems)

return (
  <>
    <CarouselDynamic images={carouselItems} />
  </>
)
}
export default Carousel1
