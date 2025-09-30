import { fetchProducts } from "@/assets/utils/request";
import Image from "next/image";
import Link from "next/link";

const tubs = [
  {
    name: "Hot Tub",
    path: "/hot-tub",
  },
  {
    name: "Cold Plunge",
    path: "/cold-plunge",
  },
];

export const metadata = {
  title: "Tubs | Toronto Sauna Co.| Ontario",
  description:
    "Explore premium outdoor and indoor saunas for your home, crafted from high-quality cedar wood. Proudly made in Canada, our cedar barrel and cube saunas, sauna kits, and backyard wellness solutions provide relaxation, health benefits, and timeless luxury. Elevate your space today—cold plunges available!",
};

const page = async () => {
  const products = await fetchProducts();
  const filteredProducts = products.filter((product) =>
    tubs.some((tub) => product.type === tub.name)
  );

  return (
    <>
      <section className="px-4 py-6 mt-6">
        <h1 className="text-3xl text-center font-bold font-playfair mb-2">
          All Tubs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-20">
          {filteredProducts.map((product) => (
            <div key={product._id} className="rounded-xl mb-6">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={450}
                  height={450}
                />
              </div>
              <div className="p-6 bg-white">
                <h3
                  className="font-light font-rubik text-gray-900 mb-2"
                  style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}
                >
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span
                      className="font-extralight font-rubik text-gray-900"
                      style={{ fontSize: "1.35rem", lineHeight: "1.25rem" }}
                    >
                      ${product.price.toLocaleString()}
                    </span>
                  </div>
                  <Link
                    href={`${product.type === "Hot Tub" ? "/hot-tub" : "/cold-plunge"}/${product._id}`}
                  >
                    <div className="px-3 py-2 border border-gray-300 text-black bg-white rounded-lg hover:bg-black hover:text-white shadow-sm transition-all ease-in duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                      View More
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
