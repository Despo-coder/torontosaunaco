import { Button } from "./ui/button";


const Hero = () => {
  return (
    <div>

      <section
        className="relative bg-slate-700 py-20 mb-4 h-[74vh]"
        style={{
          backgroundImage: "url('/images/Sauna_Image_1-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:h-[70%] h-[88%] justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl text-white font-thin sm:text-5xl md:text-6xl">
              Premium Cedar Saunas
            </h1>
            {/* <p className="my-4 text-xl  text-white font-semi-bold">
              Muskoka Lakes, Ontario, Canada
            </p> */}
          </div>
          <form className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center ">
            <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
              <label htmlFor="location" className="sr-only">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Search for accessories..."
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="w-full md:w-2/5 md:pl-2">
              <label htmlFor="property-type" className="sr-only">
                Property Type
              </label>
              <select
                id="property-type"
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              >
                <option value="All">All</option>
                <option value="Popular">Popular Saunas</option>
                <option value="Cedar">Cedar Barrels</option>
                <option value="CedarLuna">Cedar Luna</option>
                <option value="Outdoor">Outdoor Cedar Cube Saunas</option>
                <option value="Indoor">Indoor Cedar Cube Saunas</option>
                <option value="Showers">OutDoor Showers</option>
                {/* <option value="Room">Room</option>
              <option value="Other">Other</option> */}
              </select>
            </div>
            <Button
              type="submit"
              className="md:ml-2 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-xl bg-slate-950 text-white hover:bg-slate-600 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Search
            </Button>
          </form>
        </div>
      </section>
  
    </div>
  );
};

export default Hero
