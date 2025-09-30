import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const HomePageImage = () => {
  return (
    <div className="relative w-full h-[800px] md:h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dw4ev5whz/image/upload/v1740247723/torontosaunaco/latvia-912341_1920_new_mvdep7.png"
        alt="Sauna by the sea"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <div className="relative h-full w-full px-6 py-12 overflow-visible">
          <div className="h-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-left md:max-w-xl lg:pl-8">
              <h1 className="text-white text-3xl md:text-5xl font-bold font-atkinson mb-4">
                Discover the Ultimate Sauna Experience
              </h1>
              <p className="text-white text-lg md:text-xl mb-8 font-nunito">
                Unwind in handcrafted cedar saunas built for relaxation, health,
                and wellness. Explore our premium outdoor and indoor sauna
                collections today.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/saunas">
                  <Button
                    variant="none"
                    className="border-white text-black px-6 py-3 bg-[#eeb35a] rounded-lg font-semibold hover:bg-white hover:text-black transition w-full sm:w-auto"
                  >
                    View Saunas
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button
                    variant="outline"
                    className="border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition w-full sm:w-auto"
                  >
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Business Info */}
            <div className="md:justify-self-end md:max-w-md lg:pr-8 relative z-10 mb-8 md:mb-0">
              <div className="text-white flex flex-col items-start gap-4 bg-black bg-opacity-40 p-8 rounded-lg w-full">
                <h2 className="text-2xl font-bold">Visit Our Showroom</h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {/* <FaMapMarkerAlt className="text-[#eeb35a] text-xl flex-shrink-0" /> */}
                    <div className="rounded-lg overflow-hidden w-full h-48 border-2 border-orange-300">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1234567890123!2d-79.63026428222656!3d43.991024017333984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPathways%20to%20Perennials!5e0!3m2!1sen!2sca!4v1747678349536!5m2!1sen!2sca&markers=color:red%7C43.991024017333984,-79.63026428222656"
                        className="w-full h-full border-0"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaPhone className="text-[#eeb35a] text-xl flex-shrink-0" />
                    <p>(437) 429-6623</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-[#eeb35a] text-xl flex-shrink-0" />
                    <p>info@thetorontosaunaco.com</p>
                  </div>
                </div>

                <Link href="/consultation" className="w-full mt-2">
                  <Button
                    variant="none"
                    className="bg-[#eeb35a] text-black px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition w-full"
                  >
                    Schedule Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageImage;
