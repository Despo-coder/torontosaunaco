'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ClientSlider = ({ children, settings }) => {
  return <Slider {...settings}>{children}</Slider>
}

export default ClientSlider
