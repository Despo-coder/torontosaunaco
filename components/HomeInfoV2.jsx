import Image from 'next/image';
import Link from 'next/link';

const HomeInfoV2 = () => {
  const data = [
    {
      image: '/SliderImages/PortableBarrel_Front_cover-ezgif.com-webp-to-jpg-converter_f3d75c61-5625-4644-b5f2-58d2539db6fa_zlbnnm.webp',
      description: 'Take a Plunge into Pure Bliss with our Classic Cold Plunge.',
      page: '/cold-plunge'
    },
    {
      image: '/images/Accessories.png',
      description: 'your sauna with a varity of accessories.',
      page: '/accessories'
    }
  ];

  return (
    <div className="container mx-auto py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center ">
            <Link href={item.page}>
            <Image
              src={item.image}
              alt={`Image ${index + 1}`}
              className="rounded-xl object-cover mb-4"
              width={400}
              height={300}
            />
            </Link>
            <p className="text-gray-700 text-center font-roboto ">
      {index === data.length - 1 ? (
        <>
          <span className='font-bold font-playfair'>Accessorize </span>
          {item.description}
        </>
      ) : (
        item.description
      )}
    </p>
            <div className='container flex justify-center items-center mt-2'>
              <Link href={item.page}>
                <button className='bg-black w-full text-white p-2 rounded-lg'>Find Out More</button>
              </Link>
            </div>
          </div>
        ))}
       
       
      </div>
    </div>
  );
};

export default HomeInfoV2;
