'use client'
import { useState , useEffect } from "react"
import Image from "next/image"
import { Button } from "./ui/button";
import Link from "next/link";

const ColdPlungeDetails = ({product}) => {
const [cost, setCost] = useState(product.price);
    
  return (
    <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              {/* <div className="text-gray-500 mb-4">{product.name}</div> */}
              <div className="flex justify-between">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
             
              <h3 className="text-2xl font-semibold mb-4">${cost.toLocaleString()}.00</h3>
              </div>
              

              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <i
                  className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                ></i>
                {/* <p className="text-orange-700">
                  Available Options For this Sauna.
                </p> */}
              </div>


    <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1 border-red-600 border-[1px]">
      {/* <!-- Features Container --> */}
      <div className="container mx-auto px-6 pb-2">
      <h3 className="text-lg  my-6 bg-gray-50 rounded-xl text-black text-center font-light p-2">
              Options & Rates 
              </h3>
        {/* <!-- First Row --> */}
        <div
          className="flex flex-col space-y-12 text-center md:flex-row md:space-y-0 "
        >
          {/* <!-- Item 1 --> */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2 ">
            <div className="flex items-center justify-center h-14 mb-2">
              <h2>Select From Available Stoves</h2>
              {/* <Image src="/images/neptune.png" alt="" height={50} width={50} /> */}
              
            </div>
            {/* <select
              className=" font-bold bg-slate-700 text-white rounded-xl p-2 w-full md:w-1/2"
              onChange={(e) => setStoveType(e.target.value)}
            >
              <option value=""></option>
              {Object.keys(stovePrices).map((stove, index) => (
                <option key={index} value={stove}>
                  {stove} - ${stovePrices[stove].price}
                </option>
              ))}
            </select> */}
            <div className="grid grid-cols-2 gap-[1px]">
          
            </div>
        
           
          </div>
          {/* <!-- Item 2 --> */}
          
            </div>
            

            {/* <p class="max-w-[20rem] text-center">
             This <span className="font-bold">{woodType}</span> will add ${woodPrices[woodType]}.00 to the subtotal.
           
          </div>):''}
         
        </div>

        {/* <!-- Second Row --> */}
        <div
          className="flex flex-col space-y-24 mt-8 text-center border-t-black border-t-[1px] md:flex-row md:space-y-0"
        >
 
         
          {/* <!-- Item 4 --> */}
       
         
        </div>
      </div>
    </section>






            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-lg font-bold mb-6">Description & Details</h3>
             
              
              <p className="text-gray-500 mb-4">
               {product.description}
              </p>
              {/* Horizontal Line */}
              <hr className="my-6 border-gray-200" />
             
              <Link href={`/saunas/${product.type}`}
                    className="fa-solid fa-location-dot text-lg text-orange-700"
                 >
              <h6 className="text-orange-500 text-sm"> See more {product.collectionType} Saunas </h6>
                </Link> 
              
            </div>

            {/* <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-lg font-bold mb-6">Amenities</h3>

              <ul
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none"
              >
                <li>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i> Wifi
                </li>
                <li>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Full
                  kitchen
                </li>
                <li>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Washer &
                  Dryer
                </li>
                <li>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Free
                  Parking
                </li>
                <li>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Hot Tub
                </li>
                <li>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i>24/7
                  Security
                </li>
                <li>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i
                  >Wheelchair Accessible
                </li>
                <li>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Elevator
                  Access
                </li>
                <li>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i
                  >Dishwasher
                </li>
                <li>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i
                  >Gym/Fitness Center
                </li>
                <li>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Air
                  Conditioning
                </li>
                <li>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i
                  >Balcony/Patio
                </li>
                <li>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Smart TV
                </li>
                <li>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Coffee
                  Maker
                </li>
              </ul>
            </div> */}
            <div className="bg-white p rounded-lg shadow-md mt-6">
              <div id="map">
              <Button className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-xl w-full">Add To Cart</Button>
              </div>
            </div>
          </main>
  )
}

export default ColdPlungeDetails