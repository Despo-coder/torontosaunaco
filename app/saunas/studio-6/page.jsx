import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Studio Six Collection - Toronto Sauna Co.",
  description:
    "Contemporary. Minimalist. Built for Canadian backyards. The Studio Six Collection blends timeless wellness with modern design, featuring CharClad black aluminum siding and premium Western Red Cedar.",
  keywords:
    "studio six, modern sauna, contemporary sauna, canadian sauna, toronto sauna, minimalist design, backyard sauna",
};

const Studio6Page = () => {
  const models = [
    {
      name: "Mini",
      dimensions: "5.5' x 4.5'",
      image: "/images/Mini 1.png",
      altImage: "/images/Mini 2.png",
      description: "Perfect for intimate spaces and couples",
    },
    {
      name: "Classic",
      dimensions: "6' x 5'",
      image: "/images/Classic 1.png",
      altImage: "/images/Classic 2.png",
      description: "The ideal balance of space and efficiency",
    },
    {
      name: "Max",
      dimensions: "8' x 5'",
      image: "/images/Max 1.png",
      altImage: "/images/Max 2.png",
      description: "Maximum comfort for families and groups",
    },
  ];

  const features = [
    {
      title: "CharClad Black Aluminum",
      description: "Signature modern siding for durability and style",
    },
    {
      title: "Premium Western Red Cedar",
      description: "Tight-knot cedar interior for authentic sauna experience",
    },
    {
      title: "Fully Insulated",
      description: "Complete insulation with vapor barrier for year-round use",
    },
    {
      title: "Custom Modern Benching",
      description: "Designed for comfort and contemporary aesthetics",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/50 z-10"></div>
        <div className="absolute inset-0 ">
          <Image
            src="/images/Classic 2.png"
            alt="Studio Six Collection"
            fill
            className="object-cover "
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="ext-2xl md:text-6xl font-bold  text-nowrap md:mb-6">
              Studio Six Collection
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-light">
              Contemporary. Minimalist. Built for Canadian backyards.
            </p>
            <div className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              The Studio Six Collection by The Toronto Sauna Co. blends timeless
              wellness with modern design. Each unit is thoughtfully crafted for
              smaller footprints without sacrificing luxury — making it a
              seamless fit for today's backyard and lifestyle.
            </div>
            <div className="text-2xl md:text-3xl font-semibold mb-4">
              Prices starting at $15,999
            </div>
            <Link href="/quote">
              <button className="bg-white  text-black px-8 py-4 rounded-xl  font-semibold text-lg hover:bg-gray-200 transition-colors">
                Get Your Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold font-roboto mb-4">
              Available Models
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect size for your space and lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {models.map((model, index) => (
              <div
                key={model.name}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={model.image}
                    alt={`Studio Six ${model.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {model.name}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-roboto mb-4">
                    Studio Six {model.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-600 mb-3">
                    {model.dimensions}
                  </p>
                  <p className="text-gray-600 mb-4">{model.description}</p>
                  <Link href="/quote">
                    <button className="w-full bg-black text-white py-1 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                      Get a Quote
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-600 text-white rounded-2xl p-8 md:p-12 text-center md:mb-20 mb-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                Complete Installation Service
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="mt-1">
                  <h4 className="text-xl font-semibold mb-2 mt-4">
                    Premium Heaters
                  </h4>
                  <p className="text-gray-300">
                    Harvia or HUUM heaters available ($1,500–$5,400)
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    White-Glove Delivery
                  </h4>
                  <p className="text-gray-300">
                    Professional installation throughout Ontario
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Canadian Built</h4>
                  <p className="text-gray-300">
                    Designed for year-round Canadian weather
                  </p>
                </div>
              </div>
              <p className="text-lg mb-6">
                Built in Canada. Backed by wellness. Designed for year-round
                use. Download the specifications book below.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
                    Start Your Project
                  </button>
                </Link>
                <a
                  href="/pdf/Toronto Sauna Co - Spec Book.pdf"
                  download="Toronto Sauna Co - Spec Book.pdf"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Spec Book
                </a>
              </div>
            </div>

            <div className="text-center mb-4">
              <h2 className="text-2xl font-semibold font-roboto mb-4">
                Premium Features
              </h2>
              <p className="text-xl text-gray-600">
                Every detail designed for excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              See Studio Six in Action
            </h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute top-4 left-4 z-10 bg-black/60 text-white text-sm px-3 py-2 rounded-full">
                360° Experience
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
        </div>
      </section> */}

      {/* CTA Section */}
      <section className=" bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-600 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Backyard?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join other satisfied customers who have elevated their wellness
                routine with Studio Six.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
                    Get Custom Quote
                  </button>
                </Link>
                <Link href="/heaters">
                  <button className="border-2 border-white text-white px-8 py-[14px] rounded-xl font-semibold text-lg hover:bg-white hover:text-black transition-colors">
                    Browse Heaters
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studio6Page;
