import Image from "next/image";
import Link from "next/link";

const Studio6Card = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 w-full max-w-7xl mx-auto p-6 mt-20">
      {/* Static Image Card */}
      <div className="group relative rounded-lg overflow-hidden shadow-md bg-white max-w-md w-full">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/images/Classic 2.png"
            alt="Studio 6 Sauna"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={450}
            height={450}
          />
        </div>
        <div className="p-6 bg-white">
          <h3 className="font-light text-gray-900 text-xl mb-2">
            Studio 6 Sauna
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-light text-gray-900 text-lg">$8,999</span>
            <Link href="/saunas/studio-6">
              <div className="px-3 py-2 border border-gray-300 text-black bg-white rounded-lg hover:bg-black hover:text-white shadow-sm transition duration-300">
                View More
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-full max-w-xl aspect-video rounded-lg overflow-hidden shadow-md">
        {/* 360° Label */}
        <div className="absolute top-3 left-3 z-10 bg-black/60 text-white text-xs px-2 py-1 rounded">
          360° Video
        </div>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dw4ev5whz/video/upload/v1747613878/ClassicSauna_tsxfp2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Studio6Card;
