// const saunas = [
//   {
//     image: '/images/Print_Hudson-44.png',
//     name: 'Hudson Sauna',
//     description: 'Spacious, modern sauna with cedar wood finish.'
//   },
//   {
//     image: '/images/CU550- (7)-web.jpg',
//     name: 'CU550 Sauna',
//     description: 'Luxury indoor sauna with elegant glass doors.'
//   },
//   {
//     image: '/images/CU550- (7)-web.jpg',
//     name: 'CU550 Sauna',
//     description: 'Compact design with efficient heating elements.'
//   },
//   {
//     image: '/images/CU550- (7)-web.jpg',
//     name: 'CU550 Sauna',
//     description: 'Energy-efficient sauna, perfect for small spaces.'
//   },
//   {
//     image: '/images/CU550- (7)-web.jpg',
//     name: 'CU550 Sauna',
//     description: 'Classic wooden sauna with a modern twist.'
//   }
// ];

const Hero = () => {
  return (
    <div>
      <section className="relative bg-slate-700 py-20 mb-4 min-h-[75vh] mt-1 overflow-hidden z-[-2]">
        {/* Video element */}
        <video
          // width={1200}
          // height={800}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          {/* <source src="/images/staging/tsc_edit/tsc_edit.mp4" type="video/mp4" /> */}
          <source src="/images/HeroVideo.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <video width="1200" height="800" controls preload="none">
        <source src="/images/VID-20250213-WA0015.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video> */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>

        {/* Content */}
        <div className="relative mt-20 z-20 flex flex-col items-center justify-center text-white h-full">
          <h1 className="text-2xl md:text-6xl font-bold  text-nowrap">
            Welcome to Wellness
          </h1>
          <p className="text-lg md:text-2xl mt-4">
            Relax. Recharge. Rejuvenate.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;

{
  /* Sauna Grid */
}
{
  /* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {saunas.map((sauna, index) => (
          <div key={index} className="bg-white/80 shadow-lg rounded-xl p-6 backdrop-blur-sm z-[-100] mb-4">
            <img src={sauna.image} alt={sauna.name} className="w-[75%] rounded-lg object-cover" />
            <h3 className="text-xl font-bold mt-4">{sauna.name}</h3>
            <p className="text-gray-600">{sauna.description}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">View More</button>
          </div>
        ))}
      </div> */
}
