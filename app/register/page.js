import Register from "@/components/Register";
import React from "react";
// import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: "Register | Toronto Sauna Co.",
  description:
    "Explore premium outdoor and indoor saunas for your home, crafted from high-quality cedar wood. Proudly made in Canada, our cedar barrel and cube saunas, sauna kits, and backyard wellness solutions provide relaxation, health benefits, and timeless luxury. Elevate your space today—cold plunges available!",
};

const page = () => {
  return (
    <div>
      <Register />
      {/* <GoogleTagManager gtmId="AW-16622832527" /> */}
    </div>
  );
};

export default page;
