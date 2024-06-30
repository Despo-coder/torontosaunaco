'use client'
import { useState , useEffect } from "react"
import { Button } from "./ui/button";



const SaunaDetails = ({product}) => {
    const [cost, setCost] = useState(product.price);
    const [stoveType, setStoveType] = useState('');
    const [woodType, setWoodType] = useState('');
    const [windowStyle, setWindowStyle] = useState('');
    const [installationChoice, setInstallationChoice] = useState('');
  
    const stovePrices = {
        "Harvia Electric Stove (8kw)": 999,
        "Huum Drop with remote (9kw)": 3125,
        "Huum Hive Mini (10.5 kw)": 4620,
        "Karhu 20": 3140,
        "Huum Hive Wood Heater": 4890
      };
    
      const woodPrices = {
        "KWC": 0,
        "CC": 500 // Example additional cost for clear cedar
      };
    
      const windowPrices = {
        "standard": 0,
        "panoramic": 500, // Example additional cost for panoramic view
        "regular": 100 // Example additional cost for regular view
      };
    
      const installationPrices = {
        "DIY": 0,
        "Supply & Install": 1750
      };
    
      useEffect(() => {
        let newCost = product.price;
        if (stoveType) newCost += stovePrices[stoveType];
        if (woodType) newCost += woodPrices[woodType];
        if (windowStyle) newCost += windowPrices[windowStyle];
        if (installationChoice) newCost += installationPrices[installationChoice];
        setCost(newCost);
      }, [stoveType, woodType, windowStyle, installationChoice]);

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

              <h3 className="text-lg font-semibold my-6 bg-black rounded-xl text-white p-2">
              Available Options For this Sauna
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
     
        <div className="flex flex-col items-left mb-4">
        <label className="text-gray-500 text-2xl font-bold ">Stove Type</label>
        <select
          className="text-xl font-bold text-blue-500 w-full md:w-3/4"
          onChange={(e) => setStoveType(e.target.value)}
        >
          <option value="">Select Stove</option>
          {Object.keys(stovePrices).map((stove) => (
            <option key={stove} value={stove}>{stove} - ${stovePrices[stove]}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-left mb-4">
        <label className="text-gray-500 text-2xl font-bold">Wood Type</label>
        <select
          className="text-xl font-bold text-blue-500 w-full md:w-3/4"
          onChange={(e) => setWoodType(e.target.value)}
        >
          <option value="">Select Wood</option>
          {Object.keys(woodPrices).map((wood) => (
            <option key={wood} value={wood}>{wood} - ${woodPrices[wood]}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-left mb-4">
        <label className="text-gray-500 text-2xl font-bold">Window Style</label>
        <select
          className="text-xl font-bold text-blue-500 w-full md:w-3/4"
          onChange={(e) => setWindowStyle(e.target.value)}
        >
          <option value="">Select Window</option>
          {Object.keys(windowPrices).map((window) => (
            <option key={window} value={window}>{window} - ${windowPrices[window]}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-left  mb-4">
        <label className="text-gray-500 text-2xl font-bold">Installation Style</label>
        <select
          className="text-xl font-bold text-blue-500 w-full md:w-3/4"
          onChange={(e) => setInstallationChoice(e.target.value)}
        >
          <option value="">Select Installation</option>
          {Object.keys(installationPrices).map((installation) => (
            <option key={installation} value={installation}>{installation} - ${installationPrices[installation]}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-left md:items-left  mb-4">
        <div className="text-gray-500 font-bold">Total Cost</div>
        <div className="text-2xl font-bold text-blue-500">${cost}</div>
      </div>
    </div>




            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-lg font-bold mb-6">Description & Details</h3>
             
              <p className="text-gray-500 mb-4">
                Place Holder.....
              </p>
              <p className="text-gray-500 mb-4">
               {product.description}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
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
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <div id="map"></div>
            </div>
          </main>
  )
}

export default SaunaDetails
