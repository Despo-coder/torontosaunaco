import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import toast from "react-hot-toast";
import { OptionCard } from '@/components/OptionCard';
import { ToggleSwitch } from "@/components/ToggleSwitch";
import MaterialCard from "@/components/MaterialCard";
import PureCubeLogo from '@/public/images/Pure Cube Logo.jpg'
import CTLOGO from '@/public/images/CTC Logo.png'
import DundalkLogo from '@/public/images/DLC (Low-res) on white.jpg'

const ShieldCheckIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-5 h-5"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" 
    />
  </svg>
);

const LeafIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
    />
  </svg>
);

const SaunaDetails = ({ product }) => {
  const dispatch = useDispatch();
  const [cost, setCost] = useState(product.price);
  const [stoveType, setStoveType] = useState('');
  const [woodType, setWoodType] = useState('');
  const [windowStyle, setWindowStyle] = useState('');
  const [installationChoice, setInstallationChoice] = useState('');

  const { wood_type: woodPrices, stove_type: stovePrices, type } = product;

  ///const installationPrices = product.installation;
  const windowPrices = product.views;

  useEffect(() => {
    let newCost = product.price;
    if (stoveType) newCost += stovePrices[stoveType].price;
    if (woodType) newCost += woodPrices[woodType].price;
    if (windowStyle) newCost += windowPrices[windowStyle].price;
    if (installationChoice === 'PRO') {
      newCost += 1750;
    }
    setCost(newCost);
  }, [stoveType, woodType, windowStyle, installationChoice]);

  const selectedOptions = {
    stoveType: stoveType ? { type: stoveType, price: stovePrices[stoveType].price } : null,
    woodType: woodType ? { type: woodType, price: woodPrices[woodType].price } : null,
    windowStyle: windowStyle ? { type: windowStyle, price: windowPrices[windowStyle].price } : null,
    installationChoice: installationChoice ? { type: installationChoice, price: installationChoice === 'PRO' ? 1750 : 0 } : null,
  };

  const normalizeCartItem = (item) => {
    return {
      id: item.id || item.name, // Ensure each item has a unique ID
      name: item.name,
      price: item.price,
      image: product.images[0] || '',
      qty: item.qty,
      selectedOptions: item.selectedOptions || {},
    };
  };

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: cost,
      image: product.image || '',
      qty: 1,
      selectedOptions: selectedOptions,
    };
    const normalizedItem = normalizeCartItem(item);
    dispatch(addToCart(normalizedItem));
    toast.success("Added to cart");
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Configuration Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Product Header */}
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold tracking-tight">
              {product.name}
            </h1>
            <div className="text-2xl font-semibold">
              ${cost.toLocaleString()}.00
            </div>
          </div>

          {/* Configuration Sections */}
          <div className="space-y-12">
            {/* Stove Selection */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold">Heating System</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {Object.entries(stovePrices).map(([key, value]) => (
                  <OptionCard
                    key={key}
                    title={key}
                    price={value.price}
                    image={value.image}
                    selected={stoveType === key}
                    onSelect={() => setStoveType(key)}
                    specs={[
                      `Power: ${value.power}`,
                      `Dimensions: ${value.dimensions}`,
                    ]}
                  />
                ))}
              </div>
            </section>

          
            {/* <section className="space-y-6">
            <h2 className="text-xl font-semibold">Material Selection</h2>
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


    {Object.entries(woodPrices).map(([key, value]) => (
      <MaterialCard
        key={key}
        name={key}
        price={value.price}
        image={value.image}
        selected={woodType === key}
        onSelect={() => setWoodType(key)}
        properties={[
          // `Aging: ${value.aging}`,
          // `Density: ${value.density}`,
          // `Maintenance: ${value.maintenance}`
        ]}
      />
    ))
  }
                
              
              </div>
            </section> */}


  {/* Wood Type Selection */}
            {type !== 'Canadian Timber' && (
  <section className="space-y-6">
    <h2 className="text-xl font-semibold">Material Selection</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.entries(woodPrices).map(([key, value]) => (
        <MaterialCard
          key={key}
          name={key}
          price={value.price}
          image={value.image}
          selected={woodType === key}
          onSelect={() => setWoodType(key)}
          properties={[
            // `Aging: ${value.aging}`,
            // `Density: ${value.density}`,
            // `Maintenance: ${value.maintenance}`
          ]}
        />
      ))}
    </div>
  </section>
)}




            {/* Installation Selection */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold">Installation Options</h2>
              <div className="space-y-4">
                <ToggleSwitch
                  options={[
                    { value: 'DIY', label: 'Self Installation' },
                    { value: 'PRO', label: 'Professional Installation' }
                  ]}
                  selected={installationChoice}
                  onSelect={setInstallationChoice}
                />
                {installationChoice && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Package Includes:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {installationChoice === 'DIY' ? (
                        <>
                          <li>Digital installation guide</li>
                          <li>24/7 support hotline</li>
                          <li>Pre-sorted hardware kit</li>
                          <li>Cost: $0</li>
                        </>
                      ) : (
                        <>
                          <li>Certified technician team</li>
                          <li>5-year installation warranty</li>
                          <li>Site preparation assistance</li>
                          <li>Cost: $1750</li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>

        {/* Summary Column */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit sticky top-4">
          <h3 className="text-xl font-semibold mb-6">Your Configuration</h3>
          
          {/* Price Breakdown */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>Base Model</span>
              <span>${product.price.toLocaleString()}.00</span>
            </div>
            
            {stoveType && (
              <div className="flex justify-between text-blue-600">
                <span>{stoveType} Heater</span>
                <span>${stovePrices[stoveType].price}.00</span>
              </div>
            )}

            {woodType && (
              <div className="flex justify-between text-blue-600">
                <span>{woodType} Wood</span>
                <span>${woodPrices[woodType].price}.00</span>
              </div>
            )}
            {installationChoice && (
              <div className="flex justify-between text-blue-600">
                <span>{installationChoice} Installation</span>
                <span>${installationChoice === 'PRO' ? 1750 : 0}.00</span>
              </div>
            )}
            
            {/* Add similar blocks for other options */}

           
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-3">
            <ShieldCheckIcon className="w-5 h-5 text-green-600 shrink-0" />
            <span className="text-sm">5-Year Structural Warranty</span>
          </div>
          <div className="flex items-center gap-3">
            <LeafIcon className="w-5 h-5 text-green-600 shrink-0" />
            <span className="text-sm">FSC Certified Wood</span>
          </div>

          {/* CTA Section */}
          <div className="mt-8 space-y-4">
            
            {/* <Button 
              className="w-full py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleAddToCart}
            >
              Secure Your Sauna (${cost.toLocaleString()}.00)
            </Button> */}
            {/* <Link href='/quote'>
            <Button 
              variant="outline" 
              className="w-full py-4 text-lg shadow-lg hover:shadow-xl "
            >
              Book Virtual Consultation
            </Button>
            </Link> */}
            <Image
  src={
    type === "Pure Cube"
      ? PureCubeLogo
      : type === "Barrel" || type === "Luna Sauna"
      ? DundalkLogo
      : CTLOGO // Fallback logo for other types
  }
  width={140}
  height={140}
  alt={product.name}
  className="mx-auto"
/>
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between font-semibold">
                <span>Total Investment</span>
                <span>${cost.toLocaleString()}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SaunaDetails;