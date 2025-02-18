import Image from "next/image";

const MaterialCard = ({ 
  name, 
  price, 
  image, 
  properties, 
  selected, 
  onSelect 
}) => {
  return (
    <div
      className={`relative p-4 border rounded-lg cursor-pointer transition-all group ${
        selected 
          ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' 
          : 'border-gray-200 hover:border-blue-300'
      }`}
      onClick={onSelect}
    >
      {/* Selection Badge */}
      {selected && (
        <div className=" z-10 absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
          Selected
        </div>
      )}

      {/* Material Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-md">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center "
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Material Details */}
      <div className="mt-4">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="mt-1 text-sm text-blue-600">
          +${price.toLocaleString()}.00
        </p>
        
        {/* Material Properties */}
        <ul className="mt-2 space-y-1 text-sm text-gray-600">
          {properties.map((prop, index) => (
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
              {prop}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MaterialCard;