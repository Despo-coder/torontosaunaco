import React from 'react'

const ProductCardV1 = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
        </div>
    </div>
)


export default ProductCardV1
