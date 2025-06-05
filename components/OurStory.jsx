import React from 'react'

const OurStory = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 bg-black/2.5">
        <div className="mt-6 w-full max-w-5xl text-center px-10 py-12 rounded-2xl shadow-xl bg-white backdrop-blur-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-black drop-shadow-lg">About The Toronto Sauna Co.</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
           
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-black shadow-lg bg-gray-200 mx-auto md:mx-0 transition-shadow duration-300 hover:shadow-2xl">
             
             
              <img src="/images/Mini 3.png" alt="Founders TJ and Angie Allen" className="object-cover w-full h-full" />
            </div>
            <div className="text-center md:text-center flex-1">
              <h2 className="text-2xl font-semibold text-black mb-2 font-playfair">Our Founders</h2>
              <p className="italic text-gray-700 font-roboto">TJ & Angie Allen</p>
              <p className="text-sm text-gray-500 mt-2">Husband & Wife | Sauna Enthusiasts | Wellness Advocates</p>
            </div>
          </div>
          <p className="text-lg leading-relaxed font-roboto text-gray-800 mb-8">
            The Toronto Sauna Co. is a proudly Canadian company founded by husband-and-wife team <span className="font-semibold text-black">TJ and Angie Allen</span>. What started as a shared passion for health, design, and craftsmanship has grown into a trusted name in the Canadian wellness space.<br/><br/>
            Every sauna we offer is thoughtfully designed and manufactured across Ontario, using high-quality Canadian materials built for our climate. From modern backyard cubes to traditional cedar barrels, we specialize in low-maintenance, high-performance sauna builds that look as good as they feel.<br/><br/>
            We partner with the best local manufacturers and artisans to bring timeless Nordic tradition into the modern Canadian home. Whether you’re looking for a private wellness space, a cottage upgrade, or a bold feature for your Airbnb, we deliver more than a sauna, we deliver the full experience.
          </p>
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
            "Our mission: Help Canadians feel better, every day, through the simple power of heat, sweat, and purpose."
          </blockquote>
          <a href="/saunas" className="inline-block px-8 py-3 bg-black text-white font-bold rounded-full shadow-lg hover:bg-emerald-700 transition">See Our Saunas</a>
        </div>
      </div>
      )
}

export default OurStory
