import Lunas from '@/components/Lunas'
import IndividualHeroes from '@/components/IndividualHeroes'


export const metadata = {
  title: "Toronto Sauna Co.",
  description: "Explore premium outdoor and indoor saunas for your home, crafted from high-quality cedar wood. Proudly made in Canada, our cedar barrel and cube saunas, sauna kits, and backyard wellness solutions provide relaxation, health benefits, and timeless luxury. Elevate your space today—cold plunges available!",
  keywords: "sauna, toronto, ontario, canada, wellness, relaxation, steam, Best sauna shop in Ontario, Home Saunas near me",
};

const page = () => {
  return (
    <div>
      <IndividualHeroes/>
   <Lunas />
    </div>
  )
}

export default page
