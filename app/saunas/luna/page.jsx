import Lunas from "@/components/Lunas";
import IndividualHeroes from "@/components/IndividualHeroes";

export const metadata = {
  title: "Luna Saunas | Toronto Sauna Co.",
  description:
    "Discover premium cedar saunas in Toronto. Outdoor & indoor barrel, cube & custom sauna kits. Relax, recharge & enjoy cold plunges.",
};

const page = () => {
  return (
    <div>
      <IndividualHeroes />
      <Lunas />
    </div>
  );
};

export default page;
