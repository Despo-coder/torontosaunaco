import React from "react";

const OurStory = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 bg-black/2.5">
      <div className="mt-6 w-full max-w-5xl text-center px-10 py-12 rounded-2xl shadow-xl bg-white backdrop-blur-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-black drop-shadow-lg">
          About The Toronto Sauna Co.
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-black shadow-lg bg-gray-200 mx-auto md:mx-0 transition-shadow duration-300 hover:shadow-2xl">
            <img
              src="/images/Mini 3.png"
              alt="Founders TJ and Angie Allen"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center md:text-center flex-1">
            <h2 className="text-2xl font-semibold text-black mb-2 font-playfair">
              Our Founders
            </h2>
            <p className="italic text-gray-700 font-roboto">TJ & Angie Allen</p>
            <p className="text-sm text-gray-500 mt-2">
              Husband & Wife | Sauna Enthusiasts | Wellness Advocates
            </p>
          </div>
        </div>
        <div className="text-lg leading-relaxed font-roboto text-gray-800 mb-8 space-y-6">
          <p>
            The Toronto Sauna Co. is a Toronto-based sauna company specializing
            in modern outdoor saunas, custom cedar builds, and full-service
            sauna installations across Ontario and Canada. We combine timeless
            craftsmanship with innovative design to create wellness spaces that
            elevate both lifestyle and property value.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-3 font-playfair">
              The Studio Six Collection — Luxury Outdoor Saunas in Canada
            </h3>
            <p>
              We are the creators of the Studio Six sauna line, a contemporary
              alternative to traditional sauna kits. Each unit is built with
              premium Canadian cedar interiors, insulated walls, CharClad
              aluminum siding, and expansive glass fronts. Designed for
              durability and luxury, our saunas provide a modern experience that
              stands apart from typical sauna depot style retailers.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-3 font-playfair">
              Saunas for Sale in Ontario — Outdoor & Indoor Options
            </h3>
            <p>
              Whether you're searching for outdoor saunas in Canada, indoor
              sauna options, or saunas for sale in Ontario, The Toronto Sauna
              Co. offers handcrafted solutions built to last. Every sauna is
              customized to fit your property, with professional design,
              delivery, and installation included.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-3 font-playfair">
              Cottage Saunas in Muskoka & Backyard Saunas in Toronto
            </h3>
            <p>
              From cottage sauna installations in Muskoka to backyard saunas in
              Toronto, our team ensures seamless service from start to finish.
              As a trusted sauna installer in Ontario, we handle every detail,
              so you can focus on enjoying the health and wellness benefits of
              your sauna.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-3 font-playfair">
              Why Choose The Toronto Sauna Co. Over Big-Box Sauna Retailers
            </h3>
            <p>
              Many customers begin their search at large sauna depot outlets or
              mass-market suppliers. They soon discover that what sets us apart
              is craftsmanship, customization, and installation expertise.
              Instead of one-size-fits-all kits, we provide luxury builds that
              reflect your property and lifestyle.
            </p>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-400">
            <h3 className="text-xl font-semibold text-black mb-3 font-playfair">
              Crafting Wellness Spaces for Generations
            </h3>
            <p>
              At The Toronto Sauna Co., we don't just sell saunas, we create
              wellness spaces designed for generations to enjoy. Our goal is to
              deliver a sauna that feels intentional, beautiful, and lasting,
              wherever you call home.
            </p>
          </div>
        </div>
        {/* <ul className="text-left text-gray-700 list-disc ml-6 mt-2 space-y-1">
  <li>Canadian materials built for harsh winters</li>
  <li>Custom builds for Airbnb and cottages</li>
  <li>Handcrafted by Ontario artisans</li>
</ul> */}

        <div className="mt-10 mb-10">
          {/* <h3 className="text-lg font-bold text-emerald-700 mb-2">Milestones</h3> */}
          <ul className="text-gray-600  ml-6">
            <li>Canadian materials built for harsh winters</li>
            <li>Custom builds for Airbnb and cottages</li>
            <li>Handcrafted by Ontario artisans</li>
          </ul>
        </div>
        <blockquote className="text-xl italic text-indigo-800 font-playfair border-l-4 border-emerald-400 pl-4 mb-8 bg-emerald-40/60 py-4">
          "Our mission: Help Canadians feel better, every day, through the
          simple power of heat, sweat, and purpose."
        </blockquote>
        <a
          href="/saunas"
          className="inline-block px-8 py-3 bg-black text-white font-bold rounded-full shadow-lg hover:bg-emerald-700 transition"
        >
          See Our Saunas
        </a>
      </div>
    </div>
  );
};

export default OurStory;
