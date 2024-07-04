'use client'
import { useState , useEffect } from "react"


import Image from "next/image"
import { Button } from "./ui/button";

const SaunaDetails = ({product}) => {
    const [cost, setCost] = useState(product.price);
    const [stoveType, setStoveType] = useState('');
    const [woodType, setWoodType] = useState('');
    const [windowStyle, setWindowStyle] = useState('');
    const [installationChoice, setInstallationChoice] = useState('');
   
    const {wood_type:woodPrices, stove_type:stovePrices}= product

    //console.log(product.installation.map(install=>install))
   // const intsall_array = Array.from(product.installation)
    console.log(product.installation)
    console.log(product.wood_type)
    // const woodPrices = product.wood_type
    // const stovePrices = product.stove_type
    const  installationPrices = product.installation
    // const stovePrices = {
    //   "Harvia Electric Stove (8kw)": { price: 999, image: "/images/Finleo_8KW_With Rocks.jpg" },
    //   "Huum Drop with remote (9kw)": { price: 3125, image: "/images/HUMHIVEWOOD.jpg" },
    //   "Huum Hive Mini (10.5 kw)": { price: 4620, image: "/images/HUUMDROP_Electric.jpg" },
    //   "Karhu 20": { price: 3140, image: "/images/HUUMHIVE_Mini.jpg" },
    //   "Huum Hive Wood Heater": { price: 4890, image: "/images/Saaku Electric_Heater.jpg" }
    // };
     
    // console.log(windowStyle)
    //   const woodPrices = {
    //     "KWC":{price:0, image:"/images/Clear_Cedar.jpg"} ,
    //     "CC": {price:500, image:"/images/Knotty_Cedar.jpg"} // Example additional cost for clear cedar
    //   };
    
      const windowPrices = {
        "standard": {price:0 , image:"/images/panoramic.jpg"},
        "panoramic": {price:500 , image:"/images/panoramic.jpg"}, // Example additional cost for panoramic view
        "regular": {price:200 , image:"/images/panoramic.jpg"}// Example additional cost for regular view
      };
    

      // const installationPrices = {
      //   "DIY": {price:0, image:"/images/diy.jpg"},
      //   "Supply & Install": {price:1750, image:"/images/neptune.png"}
      // };
    
      useEffect(() => {
        let newCost = product.price;  
        if (stoveType) newCost += stovePrices[stoveType].price;
        if (woodType) newCost += woodPrices[woodType].price;
        if (windowStyle) newCost += windowPrices[windowStyle].price;
        if (installationChoice) newCost += installationPrices[installationChoice].price;
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
            {Object.keys(stovePrices).map((stove, index) => (
            <label key={index} className="flex flex-col items-center">
              <input
                type="radio"
                name="stove"
                value={stove}
                checked={stoveType === stove}
                onChange={(e) => setStoveType(e.target.value)}
                className="hidden"
              />
              <Image
                src={stovePrices[stove].image} 
                width={350}
                height={350}
                priority={true}
                alt={stove}
                className={`w-24 h-24 cursor-pointer border-2 ${
                  stoveType === stove ? 'border-blue-500' : 'border-gray-300'
                } rounded`}
              />
              <span className="text-sm">{stove} - ${stovePrices[stove].price}</span>
            </label>
          ))}
            </div>
        {stoveType ? (   <p className="max-w-[20rem] text-center">
             This <span className="font-bold">{stoveType}</span> will add ${stovePrices[stoveType].price}.00 to the subtotal.
            </p>) :(<p>Choose from our wide array of stoves.</p>)}
    
           
          </div>
          {/* <!-- Item 2 --> */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2 ">
            <div className="flex items-center justify-center h-24 mb-6">
              <h2>Select From Various Wood Types</h2>
              {/* <Image src="/images/neptune.png" alt="" height={50} width={50} /> */}
              
            </div>
            <div className=" grid grid-cols-2 gap-[1px] ">
            {Object.keys(woodPrices).map((wood, index) => (
            <label key={index} className="flex flex-col items-center">
              <input
                type="radio"
                name="wood"
                value={wood}
                checked={woodType === wood}
                onChange={(e) => setWoodType(e.target.value)}
                className="hidden"
              />
              <Image
                src={woodPrices[wood].image} 
                width={250}
                height={250}
                priority={true}
                alt={wood}
                className={`w-24 h-24 cursor-pointer border-2 ${
                  woodType === wood ? 'border-blue-500' : 'border-gray-300'
                } rounded`}
              />
              <span className="text-sm">{wood} - ${woodPrices[wood].price}</span>
            </label>
          ))}
            </div>
            {woodType ? (   <p className="max-w-[20rem] text-center">
             This <span className="font-bold">{woodType}</span> will add ${woodPrices[woodType].price}.00 to the subtotal.
            </p>) :(<p>Clear Cedar is more aged than Knotty Wood. Ask for more info or select a type</p>)}

            {/* <p class="max-w-[20rem] text-center">
             This <span className="font-bold">{woodType}</span> will add ${woodPrices[woodType]}.00 to the subtotal.
            </p> */}
          </div>
        </div>

        {/* <!-- Second Row --> */}
        <div
          className="flex flex-col space-y-24 mt-8 text-center border-t-black border-t-[1px] md:flex-row md:space-y-0"
        >
          {/* <!-- Item 3 --> */}
          {/* <div className="flex flex-col items-center space-y-2 md:w-1/2 ">
            <div className="flex items-center justify-center h-24 mb-6">
              <h2>Select From Various Wood Types</h2>
            
              
            </div>
            <div className=" grid grid-cols-2 gap-[1px] ">
            {Object.keys(windowPrices).map((window, index) => (
            <label key={index} className="flex flex-col items-center">
              <input
                type="radio"
                name="window"
                value={window}
                checked={windowStyle === window}
                onChange={(e) => setWindowStyle(e.target.value)}
                className="hidden"
              />
              <Image
                src={windowPrices[window].image} 
                width={50}
                height={50}
                priority={true}
                alt={window}
                className={`w-24 h-24 cursor-pointer border-2 ${
                  windowStyle === window ? 'border-blue-500' : 'border-gray-300'
                } rounded`}
              />
              <span className="text-sm">{window} - ${windowPrices[window].price}</span>
            </label>
          ))}
            </div>
            {windowStyle ? (   <p className="max-w-[20rem] text-center">
             This <span className="font-bold">{windowStyle}</span> will add ${windowPrices[windowStyle].price}.00 to the subtotal.
            </p>) :(<p>Clear Cedar is more aged than Knotty Wood. Ask for more info or select a type</p>)}

           
          </div> */}
          {/* <!-- Item 4 --> */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2 ">
            <div className="flex items-center justify-center h-24 mb-6">
              <h2>Select From Various Wood Types</h2>
              {/* <Image src="/images/neptune.png" alt="" height={50} width={50} /> */}
              
            </div>
            <div className=" grid grid-cols-2 gap-[1px] ">
            {Object.keys(installationPrices).map((install, index) => (
            <label key={index} className="flex flex-col items-center">
              <input
                type="radio"
                name="install"
                value={install}
                checked={installationChoice === install}
                onChange={(e) => setInstallationChoice(e.target.value)}
                className="hidden"
              />
              <Image
                src={installationPrices[install].image} 
                width={250}
                height={250}
                priority={true}
                alt={install}
                className={`w-24 h-24 cursor-pointer border-2 ${
                  installationChoice === install ? 'border-blue-500' : 'border-gray-300'
                } rounded`}
              />
              <span className="text-sm">{install} - ${installationPrices[install].price}</span>
            </label>
          ))}
            </div>
            {installationChoice ? (   <p className="max-w-[20rem] text-center">
             This <span className="font-bold">{installationChoice}</span> will add ${installationPrices[installationChoice].price}.00 to the subtotal.
            </p>) :(<p>Clear Cedar is more aged than Knotty Wood. Ask for more info or select a type</p>)}

            {/* <p class="max-w-[20rem] text-center">
             This <span className="font-bold">{woodType}</span> will add ${woodPrices[woodType]}.00 to the subtotal.
            </p> */}
          </div>
        </div>
      </div>
    </section>






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

export default SaunaDetails
