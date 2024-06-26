import properties from "@/properties.json"
import Link from "next/link"

const Saunas = () => {
  return (
    <div>
      
      <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Listing 1 --> */}
          <div className="rounded-xl shadow-md relative">
            <img
              src="images/neptune.png"
              alt=""
              className='w-full h-auto rounded-t-xl'
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-black">$14,200</div>
                <h3 className="text-xl font-bold">Neptune Sauna</h3>
              </div>
              {/* <h3
                className="absolute top-[10px] right-[10px] bg-slate-500 px-4 py-2 rounded-xl text-white font-semibold text-right md:text-center lg:text-right"
              >
                
              </h3> */}

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <i className="fa-solid fa-bed"></i> 5
                  <span className="md:hidden lg:inline">{"  "}Seats</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> Size: 
                  <span className="md:hidden lg:inline">113" L x 89" W x 91" H</span>
                </p>
                {/* <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  1,500 <span className="md:hidden lg:inline">sqft</span>
                </p> */}
              </div>

              <div
                className="flex justify-center gap-4 text-green-900 text-sm mb-4"
              >
                <p><i className="fa-solid fa-money-bill"></i>2-Tier Benches</p>
                <p><i className="fa-solid fa-money-bill"></i>Spacious Interior</p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i
                    className="fa-solid fa-location-dot text-lg text-orange-700"
                  ></i>
                  <span className="text-orange-700"> Onatrio, Canada </span>
                </div>
                <Link
                  href="/saunas/:id"
                  className="h-[36px] bg-slate-700 hover:bg-slatee-600 text-white px-4 py-2 rounded-xl text-center text-sm"
                >
                  More Info
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Listing 2 --> */}
          <div className="rounded-xl shadow-md relative">
            <img
           
              src="images/Sauna_Image_1-unsplash.jpg"
              alt=""
              className='w-full h-auto rounded-t-xl'
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600"></div>
                <h3 className="text-xl font-bold">Neptune Sauna</h3>
              </div>
              <h3
                className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-xl text-blue-500 font-bold text-right md:text-center lg:text-right"
              >
                $14,200
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <i className="fa-solid fa-bed"></i> 5
                  <span className="md:hidden lg:inline">{"  "}Seats</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> Size: 
                  <span className="md:hidden lg:inline">113" L x 89" W x 91" H</span>
                </p>
                {/* <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  1,500 <span className="md:hidden lg:inline">sqft</span>
                </p> */}
              </div>

              <div
                className="flex justify-center gap-4 text-green-900 text-sm mb-4"
              >
                <p><i className="fa-solid fa-money-bill"></i>2-Tier Benches</p>
                <p><i className="fa-solid fa-money-bill"></i>Spacious Interior</p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i
                    className="fa-solid fa-location-dot text-lg text-orange-700"
                  ></i>
                  <span className="text-orange-700"> Onatrio, Canada </span>
                </div>
                <a
                  href="property.html"
                  className="h-[36px] bg-slate-700 hover:bg-slatee-600 text-white px-4 py-2 rounded-xl text-center text-sm"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Listing 3 --> */}
          <div className="rounded-xl shadow-md relative">
            <img
              src="images/Sauna_Image_2-unsplash.jpg"
              alt=""
              className='w-full h-auto rounded-t-xl'
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600"></div>
                <h3 className="text-xl font-bold">Neptune Sauna</h3>
              </div>
              <h3
                className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-xl text-blue-500 font-bold text-right md:text-center lg:text-right"
              >
                $14,200
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <i className="fa-solid fa-bed"></i> 5
                  <span className="md:hidden lg:inline">{"  "}Seats</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> Size: 
                  <span className="md:hidden lg:inline">113" L x 89" W x 91" H</span>
                </p>
                {/* <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  1,500 <span className="md:hidden lg:inline">sqft</span>
                </p> */}
              </div>

              <div
                className="flex justify-center gap-4 text-green-900 text-sm mb-4"
              >
                <p><i className="fa-solid fa-money-bill"></i>2-Tier Benches</p>
                <p><i className="fa-solid fa-money-bill"></i>Spacious Interior</p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i
                    className="fa-solid fa-location-dot text-lg text-orange-700"
                  ></i>
                  <span className="text-orange-700"> Onatrio, Canada </span>
                </div>
                <a
                  href="property.html"
                  className="h-[36px] bg-slate-700 hover:bg-slatee-600 text-white px-4 py-2 rounded-xl text-center text-sm"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Listing 4 --> */}
          <div className="rounded-xl shadow-md relative">
            <img
              src="images/Sauna_Image_3-unsplash.jpg"
              alt=""
              className='w-full h-auto rounded-t-xl'
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600"></div>
                <h3 className="text-xl font-bold">Neptune Sauna</h3>
              </div>
              <h3
                className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-xl text-blue-500 font-bold text-right md:text-center lg:text-right"
              >
                $14,200
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <i className="fa-solid fa-bed"></i> 5
                  <span className="md:hidden lg:inline">{"  "}Seats</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> Size: 
                  <span className="md:hidden lg:inline">113" L x 89" W x 91" H</span>
                </p>
                {/* <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  1,500 <span className="md:hidden lg:inline">sqft</span>
                </p> */}
              </div>

              <div
                className="flex justify-center gap-4 text-green-900 text-sm mb-4"
              >
                <p><i className="fa-solid fa-money-bill"></i>2-Tier Benches</p>
                <p><i className="fa-solid fa-money-bill"></i>Spacious Interior</p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i
                    className="fa-solid fa-location-dot text-lg text-orange-700"
                  ></i>
                  <span className="text-orange-700"> Onatrio, Canada </span>
                </div>
                <a
                  href="property.html"
                  className="h-[36px] bg-slate-700 hover:bg-slatee-600 text-white px-4 py-2 rounded-xl text-center text-sm"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Listing 5 --> */}
          <div className="rounded-xl shadow-md relative">
            <img
              src="images/Sauna_Image_4-unsplash.jpg"
              alt=""
              className='w-full h-auto rounded-t-xl'
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600"></div>
                <h3 className="text-xl font-bold">Neptune Sauna</h3>
              </div>
              <h3
                className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-xl text-blue-500 font-bold text-right md:text-center lg:text-right"
              >
                $14,200
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <i className="fa-solid fa-bed"></i> 5
                  <span className="md:hidden lg:inline">{"  "}Seats</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> Size: 
                  <span className="md:hidden lg:inline">113" L x 89" W x 91" H</span>
                </p>
                {/* <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  1,500 <span className="md:hidden lg:inline">sqft</span>
                </p> */}
              </div>

              <div
                className="flex justify-center gap-4 text-green-900 text-sm mb-4"
              >
                <p><i className="fa-solid fa-money-bill"></i>2-Tier Benches</p>
                <p><i className="fa-solid fa-money-bill"></i>Spacious Interior</p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i
                    className="fa-solid fa-location-dot text-lg text-orange-700"
                  ></i>
                  <span className="text-orange-700"> Onatrio, Canada </span>
                </div>
                <a
                  href="property.html"
                  className="h-[36px] bg-slate-700 hover:bg-slatee-600 text-white px-4 py-2 rounded-xl text-center text-sm"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Listing 6 --> */}
          <div className="rounded-xl shadow-md relative">
            <img
              src="images/neptune.png"
              alt=""
              className='w-full h-auto rounded-t-xl'
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600"></div>
                <h3 className="text-xl font-bold">Neptune Sauna</h3>
              </div>
              <h3
                className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-xl text-blue-500 font-bold text-right md:text-center lg:text-right"
              >
                $14,200
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <i className="fa-solid fa-bed"></i> 5
                  <span className="md:hidden lg:inline">{"  "}Seats</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> Size: 
                  <span className="md:hidden lg:inline">113" L x 89" W x 91" H</span>
                </p>
                {/* <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  1,500 <span className="md:hidden lg:inline">sqft</span>
                </p> */}
              </div>

              <div
                className="flex justify-center gap-4 text-green-900 text-sm mb-4"
              >
                <p><i className="fa-solid fa-money-bill"></i>2-Tier Benches</p>
                <p><i className="fa-solid fa-money-bill"></i>Spacious Interior</p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i
                    className="fa-solid fa-location-dot text-lg text-orange-700"
                  ></i>
                  <span className="text-orange-700"> Onatrio, Canada </span>
                </div>
                <a
                  href="property.html"
                  className="h-[36px] bg-slate-700 hover:bg-slatee-600 text-white px-4 py-2 rounded-xl text-center text-sm"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Saunas
