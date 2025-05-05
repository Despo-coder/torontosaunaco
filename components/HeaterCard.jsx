import Image from "next/image";
import Link from "next/link";
import { GoogleTagManager } from "@next/third-parties/google";

const HeaterCard = ({ heater }) => {
  const heaterLink = `/heaters/${heater._id}`;

  return (
    <>
      <GoogleTagManager gtmId="AW-16622832527" />
      <div className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
        <div className="relative aspect-square overflow-hidden">
          {heater.images?.length > 0 && (
            <Image
              src={heater.images[0].url}
              alt={heater.images[0].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              width={450}
              height={450}
            />
          )}
        </div>

        <div className="p-6 bg-white">
          <div className="mb-2">
            <h3
              className="font-light font-rubik text-gray-900"
              style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}
            >
              {heater.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {heater.power}kW • {heater.specifications.roomSize.min}-
              {heater.specifications.roomSize.max}m³
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span
                className="font-extralight font-rubik text-gray-900"
                style={{ fontSize: "1.35rem", lineHeight: "1.25rem" }}
              >
                ${heater.basePrice.toLocaleString()}
              </span>
              <span className="text-sm text-gray-500 mt-1">Starting from</span>
            </div>

            <Link href={heaterLink}>
              <div className="px-3 py-2 border border-gray-300 text-black bg-white rounded-lg hover:bg-black hover:text-white shadow-sm transition-all ease-in duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                View Details
              </div>
            </Link>
          </div>

          {/* Features Preview */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {heater.features.slice(0, 2).map((feature, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {feature.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaterCard;
