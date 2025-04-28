import Image from "next/image";

export const OptionCard = ({ title, price, image, specs, selected, onSelect }) => (
  <div
    className={`relative p-4 border rounded-lg cursor-pointer transition-all ${
      selected ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300'
    }`}
    onClick={onSelect}
  >
    {/* Selection Badge */}
    {selected && (
      <div className="z-10 absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
        Selected
      </div>
    )}

    {/* Option Image */}
    <div className="relative h-38 w-full overflow-hidden rounded-md">
  <Image
    src={image}
    alt={title}
    // className="object-cover object-center"
    // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    // style={{ maxWidth: "100%", height: "auto" }}
    width={450}
    height={250}
  />
</div>


    {/* Option Details */}
    <div className="mt-4">
      <h4 className="font-medium text-lg">{title}</h4>
      <p className="mt-1 text-sm text-blue-600">
        +${price.toLocaleString()}.00
      </p>
      
      {/* Option Specs */}
      <ul className="mt-2 space-y-1 text-sm text-gray-600">
        {specs.map((spec, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {spec}
          </li>
        ))}
      </ul>
    </div>
  </div>
);