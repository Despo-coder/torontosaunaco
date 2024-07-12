'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import toast from "react-hot-toast";

const SaunaDetails = ({ product }) => {
  const dispatch = useDispatch();
  const [cost, setCost] = useState(product.price);
  const [stoveType, setStoveType] = useState('');
  const [woodType, setWoodType] = useState('');
  const [windowStyle, setWindowStyle] = useState('');
  const [installationChoice, setInstallationChoice] = useState('');

  const { wood_type: woodPrices, stove_type: stovePrices } = product;

  const installationPrices = product.installation;
  const windowPrices = product.views;
console.log(product)
  useEffect(() => {
    let newCost = product.price;
    if (stoveType) newCost += stovePrices[stoveType].price;
    if (woodType) newCost += woodPrices[woodType].price;
    if (windowStyle) newCost += windowPrices[windowStyle].price;
    if (installationChoice) newCost += installationPrices[installationChoice].price;
    setCost(newCost);
  }, [stoveType, woodType, windowStyle, installationChoice]);

  const selectedOptions = {
    stoveType: stoveType ? { type: stoveType, price: stovePrices[stoveType].price } : null,
    woodType: woodType ? { type: woodType, price: woodPrices[woodType].price } : null,
    windowStyle: windowStyle ? { type: windowStyle, price: windowPrices[windowStyle].price } : null,
    installationChoice: installationChoice ? { type: installationChoice, price: installationPrices[installationChoice].price } : null,
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
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <h3 className="text-2xl font-semibold mb-4">${cost.toLocaleString()}.00</h3>
        </div>

        <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1 border-red-600 border-[1px]">
          <div className="container mx-auto px-6 pb-2">
            <h3 className="text-lg my-6 bg-gray-50 rounded-xl text-black text-center font-light p-2">
              Options & Rates
            </h3>
            <div className="flex flex-col space-y-12 text-center md:flex-row md:space-y-0">
              <div className="flex flex-col items-center space-y-2 md:w-1/2">
                <div className="flex items-center justify-center h-14 mb-2">
                  <h2>Select From Available Stoves</h2>
                </div>
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
                        width={450}
                        height={450}
                        priority={true}
                        alt={stove}
                        className={`w-24 h-24 cursor-pointer border-2 ${stoveType === stove ? 'border-blue-500' : 'border-gray-300'} rounded`}
                      />
                      <span className="text-sm">{stove}</span>
                    </label>
                  ))}
                </div>
                {stoveType ? (
                  <p className="max-w-[20rem] text-center">
                    This <span className="font-bold">{stoveType}</span> will add ${stovePrices[stoveType].price}.00 to the subtotal.
                  </p>
                ) : ''}
              </div>

              {woodPrices && (
                <div className="flex flex-col items-center space-y-2 md:w-1/2">
                  <div className="flex items-center justify-center h-24 mb-6">
                    <h2>Select From Various Wood Types</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-[1px]">
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
                          width={350}
                          height={350}
                          priority={true}
                          alt={wood}
                          className={`w-24 h-24 cursor-pointer border-2 ${woodType === wood ? 'border-blue-500' : 'border-gray-300'} rounded`}
                        />
                        <span className="text-sm">{wood}</span>
                      </label>
                    ))}
                  </div>
                  {woodType ? (
                    <p className="max-w-[20rem] text-center">
                      This <span className="font-bold">{woodType}</span> will add ${woodPrices[woodType].price}.00 to the subtotal.
                    </p>
                  ) : (<p>Clear Cedar is more aged than Knotty Wood. Ask for more info or select a type</p>)}
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-24 mt-8 text-center border-t-black border-t-[1px] md:flex-row md:space-y-0">
              {product.views && (
                <div className="flex flex-col items-center space-y-2 md:w-1/2">
                  <div className="flex items-center justify-center h-24 mb-6">
                    <h2>Choose Preferred Window Preference</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-[1px]">
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
                          className={`w-24 h-24 cursor-pointer border-2 ${windowStyle === window ? 'border-blue-500' : 'border-gray-300'} rounded`}
                        />
                        <span className="text-sm">{window} - ${windowPrices[window].price}</span>
                      </label>
                    ))}
                  </div>
                  {windowStyle ? (
                    <p className="max-w-[20rem] text-center">
                      This <span className="font-bold">{windowStyle}</span> will add ${windowPrices[windowStyle].price}.00 to the subtotal.
                    </p>
                  ) : (<p>Clear Cedar is more aged than Knotty Wood. Ask for more info or select a type</p>)}
                </div>
              )}

              {product.installation && (
                <div className="flex flex-col items-center space-y-2 md:w-1/2">
                  <div className="flex items-center justify-center h-24 mb-6">
                    <h2>Choose Preferred Installation</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-[1px]">
                    {Object.keys(installationPrices).map((installation, index) => (
                      <label key={index} className="flex flex-col items-center">
                        <input
                          type="radio"
                          name="installation"
                          value={installation}
                          checked={installationChoice === installation}
                          onChange={(e) => setInstallationChoice(e.target.value)}
                          className="hidden"
                        />
                        <Image
                          src={installationPrices[installation].image}
                          width={50}
                          height={50}
                          priority={true}
                          alt={installation}
                          className={`w-24 h-24 cursor-pointer border-2 ${installationChoice === installation ? 'border-blue-500' : 'border-gray-300'} rounded`}
                        />
                        <span className="text-sm">{installation}</span>
                      </label>
                    ))}
                  </div>
                  {installationChoice ? (
                    <p className="max-w-[20rem] text-center">
                      This <span className="font-bold">{installationChoice}</span> will add ${installationPrices[installationChoice].price}.00 to the subtotal.
                    </p>
                  ) : ''}
                </div>
              )}
            </div>
          </div>
        </section>

        <p className="max-w-[40rem] my-6">{product.description}</p>
        <div className="flex justify-center mt-8 space-x-4 md:justify-start">
          <Button className="px-8 py-3 text-lg" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Link href="/contact">
            <Button className="px-8 py-3 text-lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SaunaDetails;
